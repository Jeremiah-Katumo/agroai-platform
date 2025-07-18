import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Target } from 'lucide-react';
import { YieldPrediction, YieldModel } from '@/types/agriculture';
import { mockYieldPredictions, mockYieldModels } from '@/services/mockData';

const YieldDashboard = () => {
    const [predictions, setPredictions] = useState<YieldPrediction[]>([]);
    const [models, setModels] = useState<YieldModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call - replace with actual API service
        const loadData = async () => {
            try {
                // await apiService.getYieldPredictions();
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

    const chartData = predictions.map(p => ({
        crop: p.cropType,
        predicted: p.predictedYield,
        actual: p.actualYield || 0,
        confidence: p.confidence * 100,
    }));

    const modelAccuracyData = models.map(m => ({
        name: m.name.split(' ')[0],
        accuracy: m.accuracy * 100,
        precision: m.precision * 100,
        recall: m.recall * 100,
        f1Score: m.f1Score * 100,
    }));

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">Loading yield data...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 pb-5 pt-5 d-flex flex-column gap-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Yield Prediction Dashboard</h1>
                <p className="text-muted-foreground">Monitor crop yield predictions and model performance</p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="predictions">Predictions</TabsTrigger>
                    <TabsTrigger value="models">Model Performance</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Predictions</CardTitle>
                                <Target className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{predictions.length}</div>
                                <p className="text-xs text-muted-foreground">
                                    +2 from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Accuracy</CardTitle>
                                <Activity className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {(models.reduce((sum, m) => sum + m.accuracy, 0) / models.length * 100).toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +2.1% from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Models</CardTitle>
                                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {models.filter(m => m.status === 'active').length}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    2 active, 1 training
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
                                <TrendingDown className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">92.4%</div>
                                <p className="text-xs text-muted-foreground">
                                    Based on recent harvests
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                        <CardHeader>
                            <CardTitle>Yield Predictions vs Actual Results</CardTitle>
                            <CardDescription>Comparison of predicted and actual crop yields</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="crop" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="predicted" fill="hsl(var(--primary))" name="Predicted Yield" />
                                    <Bar dataKey="actual" fill="hsl(var(--success))" name="Actual Yield" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="predictions" className="space-y-6">
                    <div className="grid gap-6">
                        {predictions.map((prediction) => (
                            <Card key={prediction.id} className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg">{prediction.cropType} - {prediction.location}</CardTitle>
                                            <CardDescription>
                                                Planted: {prediction.plantingDate} | Harvest: {prediction.harvestDate}
                                            </CardDescription>
                                        </div>
                                        <Badge variant="secondary">
                                            {(prediction.confidence * 100).toFixed(1)}% confidence
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Predicted Yield</p>
                                            <p className="text-2xl font-bold text-primary">{prediction.predictedYield} bu/acre</p>
                                        </div>
                                        {prediction.actualYield && (
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground">Actual Yield</p>
                                                <p className="text-2xl font-bold text-success">{prediction.actualYield} bu/acre</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Conditions</p>
                                            <p className="text-sm">{prediction.soilType} soil, {prediction.weatherConditions} weather</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-sm font-medium text-muted-foreground mb-2">Confidence Level</p>
                                        <Progress value={prediction.confidence * 100} className="w-full" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="models" className="space-y-6">
                    <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                        <CardHeader>
                            <CardTitle>Model Performance Metrics</CardTitle>
                            <CardDescription>Accuracy, precision, and recall for all yield prediction models</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={modelAccuracyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" name="Accuracy" />
                                    <Line type="monotone" dataKey="precision" stroke="hsl(var(--success))" name="Precision" />
                                    <Line type="monotone" dataKey="recall" stroke="hsl(var(--warning))" name="Recall" />
                                    <Line type="monotone" dataKey="f1Score" stroke="hsl(var(--accent-foreground))" name="F1 Score" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6">
                        {models.map((model) => (
                            <Card key={model.id} className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg">{model.name}</CardTitle>
                                            <CardDescription>Version {model.version} | Last trained: {model.lastTrained}</CardDescription>
                                        </div>
                                        <Badge variant={model.status === 'active' ? 'default' : model.status === 'training' ? 'secondary' : 'outline'}>
                                            {model.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Accuracy</p>
                                            <p className="text-xl font-bold">{(model.accuracy * 100).toFixed(1)}%</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Precision</p>
                                            <p className="text-xl font-bold">{(model.precision * 100).toFixed(1)}%</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Recall</p>
                                            <p className="text-xl font-bold">{(model.recall * 100).toFixed(1)}%</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">F1 Score</p>
                                            <p className="text-xl font-bold">{(model.f1Score * 100).toFixed(1)}%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-muted-foreground">
                                            Training data: {model.trainingDataSize.toLocaleString()} samples
                                        </p>
                                        <Button variant="outline" size="sm">
                                            Retrain Model
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default YieldDashboard;