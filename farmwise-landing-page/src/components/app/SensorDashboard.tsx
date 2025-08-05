// components/SensorDashboard/index.tsx
import React, { useState, useEffect } from 'react';
import Header from './dashboard/Header';
import AnalyticsCards from './dashboard/AnalyticsCards';
import Charts from './dashboard/Charts';
import PredictionForm, { PredictionFormData } from './dashboard/PredictionForm';
import PredictionResults from './dashboard/PredictionResults';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

interface SensorReading {
    timestamp: string;
    sensor_id: string;
    temperature: number;
    humidity: number;
    pressure: number;
    vibration: number;
    power_consumption: number;
    status: 'anomaly' | 'normal';
}

interface AnalyticsData {
    total_readings: number;
    average_temperature: number;
    average_humidity: number;
    recent_anomalies: number;
}

interface ModelStatus {
    model_trained: boolean;
    metrics?: {
        accuracy: number;
    };
}

interface PredictionResult {
    is_anomaly: boolean;
    predicted_status: string;
    confidence: number;
    anomaly_score: number;
}

interface ChartDataPoint {
    index: number;
    temperature: number;
    humidity: number;
    pressure: number;
    vibration: number;
    power: number;
    status: number;
}

const SensorDashboard: React.FC = () => {
    const [sensorData, setSensorData] = useState<SensorReading[]>([]);
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
    const [modelStatus, setModelStatus] = useState<ModelStatus | null>(null);
    const [prediction, setPrediction] = useState<PredictionResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [predictionForm, setPredictionForm] = useState<PredictionFormData>({
        temperature: 25,
        humidity: 60,
        pressure: 1013,
        vibration: 0.1,
        power_consumption: 100
    });

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        await Promise.all([fetchSensorData(), fetchAnalytics(), fetchModelStatus()]);
    };

    const fetchSensorData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/sensors/readings?limit=50`);
            const data = await response.json();
            setSensorData(data);
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    const fetchAnalytics = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/sensors/analytics`);
            const data = await response.json();
            setAnalytics(data);
        } catch (error) {
            console.error('Error fetching analytics:', error);
        }
    };

    const fetchModelStatus = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/model/status`);
            const data = await response.json();
            setModelStatus(data);
        } catch (error) {
            console.error('Error fetching model status:', error);
        }
    };

    const handlePrediction = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/predict/anomaly`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(predictionForm),
            });
            const data = await response.json();
            setPrediction(data);
        } catch (error) {
            console.error('Error predicting anomaly:', error);
        } finally {
            setLoading(false);
        }
    };

    const addSampleReading = async () => {
        const sampleReading: SensorReading = {
            timestamp: new Date().toISOString(),
            sensor_id: `sensor_${Math.floor(Math.random() * 10)}`,
            temperature: 20 + Math.random() * 10,
            humidity: 50 + Math.random() * 20,
            pressure: 1000 + Math.random() * 50,
            vibration: 0.05 + Math.random() * 0.1,
            power_consumption: 80 + Math.random() * 40,
            status: Math.random() > 0.8 ? 'anomaly' : 'normal',
        };

        try {
            await fetch(`${API_BASE_URL}/sensors/readings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sampleReading),
            });
            await Promise.all([fetchSensorData(), fetchAnalytics()]);
        } catch (error) {
            console.error('Error adding sample reading:', error);
        }
    };

    const handleFormChange = (field: keyof PredictionFormData, value: number) => {
        setPredictionForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const chartData: ChartDataPoint[] = sensorData.map((reading, index) => ({
        index,
        temperature: reading.temperature,
        humidity: reading.humidity,
        pressure: reading.pressure / 10, // normalize
        vibration: reading.vibration * 100, // amplify
        power: reading.power_consumption,
        status: reading.status === 'anomaly' ? 1 : 0
    }));

    return (
        <div id="sensor-dashboard" className="min-vh-100 bg-light bg-gradient p-4">
            <div className="container py-3">
                <Header onAddSample={addSampleReading} /> <hr/>

                {analytics && <AnalyticsCards analytics={analytics} />}

                <Charts data={chartData} />

                <div className="row g-4 mt-4">
                    <div className="col-12 col-lg-6">
                        <PredictionForm
                            formData={predictionForm}
                            loading={loading}
                            onChange={handleFormChange}
                            onSubmit={handlePrediction}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <PredictionResults
                            prediction={prediction}
                            modelStatus={modelStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SensorDashboard;
