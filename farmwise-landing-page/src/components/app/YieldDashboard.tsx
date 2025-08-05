import { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { YieldModel, YieldPrediction } from '@/types/agriculture';
import { mockYieldModels, mockYieldPredictions } from '@/services/mockData';
import MetricCard from './yieldsDashboard/MetricCard';
import PredictionCard from './yieldsDashboard/PredictionCard';
import ModelCard from './yieldsDashboard/ModelCard';
import YieldBarChart from './yieldsDashboard/YieldBarChart';
import ModelLineChart from './yieldsDashboard/ModelLineChart';
import { Target, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';


const YieldDashboard = () => {
    const [predictions, setPredictions] = useState<YieldPrediction[]>([]);
    const [models, setModels] = useState<YieldModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setPredictions(mockYieldPredictions);
                setModels(mockYieldModels);
            } catch (error) {
                console.error('Error loading yield data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="text-center">Loading yield data...</div>
            </div>
        );
    }

    const chartData = predictions.map((p) => ({
        crop: p.cropType,
        predicted: p.predictedYield,
        actual: p.actualYield || 0,
        confidence: p.confidence * 100,
    }));

    const modelAccuracyData = models.map((m) => ({
        name: m.name.split(' ')[0],
        accuracy: m.accuracy * 100,
        precision: m.precision * 100,
        recall: m.recall * 100,
        f1Score: m.f1Score * 100,
    }));

    const avgAccuracy =
        models.reduce((sum, m) => sum + m.accuracy, 0) / models.length;

    return (
        <div className="container pt-5 pb-5">
            <div className="text-center mb-5">
                <h1 className="text-success display-5 fw-bold mb-2">Yield Prediction Dashboard</h1>
                <p className="text-muted">Monitor crop yield predictions and model performance</p>
            </div>

            <Tabs defaultActiveKey="overview" className="mb-4">
                <Tab eventKey="overview" title="Overview">
                    <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                        <MetricCard
                            title="Total Predictions"
                            value={predictions.length}
                            icon={<Target className="h-4 w-4 text-muted-foreground" />}
                            note="+2 from last month"
                        />
                        <MetricCard
                            title="Average Accuracy"
                            value={`${(avgAccuracy * 100).toFixed(1)}%`}
                            icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                            note="+2.1% from last month"
                        />
                        <MetricCard
                            title="Active Models"
                            value={models.filter((m) => m.status === 'active').length}
                            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
                            note="2 active, 1 training"
                        />
                        <MetricCard
                            title="Prediction Accuracy"
                            value="92.4%"
                            icon={<TrendingDown className="h-4 w-4 text-muted-foreground" />}
                            note="Based on recent harvests"
                        />
                    </div>
                    <YieldBarChart data={chartData} />
                </Tab>

                <Tab eventKey="predictions" title="Predictions">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                        {predictions.map((prediction) => (
                            <PredictionCard key={prediction.id} prediction={prediction} />
                        ))}
                    </div>
                </Tab>

                <Tab eventKey="models" title="Models">
                    <ModelLineChart data={modelAccuracyData} />
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                        {models.map((model) => (
                            <ModelCard key={model.id} model={model} />
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default YieldDashboard;
