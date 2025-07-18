// components/SensorDashboard/index.tsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import AnalyticsCards from './AnalyticsCards';
import Charts from './Charts';
import PredictionForm, { PredictionFormData } from './PredictionForm';
import PredictionResults from './PredictionResults';

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
        fetchSensorData();
        fetchAnalytics();
        fetchModelStatus();
    }, []);

    const fetchSensorData = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/sensors/readings?limit=50`);
            const data = await res.json();
            setSensorData(data);
        } catch (err) {
            console.error('Error fetching sensor data:', err);
        }
    };

    const fetchAnalytics = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/sensors/analytics`);
            const data = await res.json();
            setAnalytics(data);
        } catch (err) {
            console.error('Error fetching analytics:', err);
        }
    };

    const fetchModelStatus = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/model/status`);
            const data = await res.json();
            setModelStatus(data);
        } catch (err) {
            console.error('Error fetching model status:', err);
        }
    };

    const handlePrediction = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/predict/anomaly`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(predictionForm),
            });
            const data = await res.json();
            setPrediction(data);
        } catch (err) {
            console.error('Error predicting anomaly:', err);
        } finally {
            setLoading(false);
        }
    };

    const addSampleReading = async () => {
        const sample: SensorReading = {
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
                body: JSON.stringify(sample),
            });
            fetchSensorData();
            fetchAnalytics();
        } catch (err) {
            console.error('Error adding sample reading:', err);
        }
    };

    const handleFormChange = (field: keyof PredictionFormData, value: number) => {
        setPredictionForm(prev => ({ ...prev, [field]: value }));
    };

    const chartData: ChartDataPoint[] = sensorData.map((reading, index) => ({
        index,
        temperature: reading.temperature,
        humidity: reading.humidity,
        pressure: reading.pressure / 10,
        vibration: reading.vibration * 100,
        power: reading.power_consumption,
        status: reading.status === 'anomaly' ? 1 : 0
    }));

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-7xl mx-auto p-4">
                <Header onAddSample={addSampleReading} />
                {analytics && <AnalyticsCards analytics={analytics} />}
                <Charts data={chartData} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <PredictionForm
                        formData={predictionForm}
                        loading={loading}
                        onChange={handleFormChange}
                        onSubmit={handlePrediction}
                    />
                    <PredictionResults prediction={prediction} modelStatus={modelStatus} />
                </div>
            </div>
        </div>
    );
};

export default SensorDashboard;
