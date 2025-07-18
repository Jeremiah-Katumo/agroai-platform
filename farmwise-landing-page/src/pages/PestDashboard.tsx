import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Bug, AlertTriangle, CheckCircle, Camera, Upload } from 'lucide-react';
import { PestDetection, PestModel } from '@/types/agriculture';
import { mockPestDetections, mockPestModels } from '@/services/mockData';

const PestDashboard = () => {
    const [detections, setDetections] = useState<PestDetection[]>([]);
    const [models, setModels] = useState<PestModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call - replace with actual API service
        const loadData = async () => {
            try {
                // await apiService.getPestDetections();
                setDetections(mockPestDetections);
                setModels(mockPestModels);
            } catch (error) {
                console.error('Error loading pest data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const severityData = [
        { name: 'Low', value: detections.filter(d => d.severity === 'low').length, color: 'hsl(var(--success))' },
        { name: 'Medium', value: detections.filter(d => d.severity === 'medium').length, color: 'hsl(var(--warning))' },
        { name: 'High', value: detections.filter(d => d.severity === 'high').length, color: 'hsl(var(--destructive))' },
        { name: 'Critical', value: detections.filter(d => d.severity === 'critical').length, color: '#dc2626' },
    ];

    const pestTypeData = detections.reduce((acc, detection) => {
        detection.detectedPests.forEach(pest => {
            const existing = acc.find(item => item.name === pest.name);
            if (existing) {
                existing.count += 1;
            } else {
                acc.push({ name: pest.name, count: 1 });
            }
        });
        return acc;
    }, [] as { name: string; count: number }[]);

    const modelPerformanceData = models.map(m => ({
        name: m.name.split(' ')[0],
        accuracy: m.accuracy * 100,
        precision: m.precision * 100,
        recall: m.recall * 100,
        classes: m.classifiedClasses.length,
    }));

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">Loading pest data...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 pb-5 pt-5 d-flex flex-column gap-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Pest Detection Dashboard</h1>
                <p className="text-muted-foreground">Monitor crop pest detections and classification models</p>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="detections">Detections</TabsTrigger>
                    <TabsTrigger value="models">Models</TabsTrigger>
                    <TabsTrigger value="upload">Upload Image</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div className="card-container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Detections</CardTitle>
                                <Bug className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{detections.length}</div>
                                <p className="text-xs text-muted-foreground">
                                    +3 from last week
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">High Severity</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-destructive" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-destructive">
                                    {detections.filter(d => d.severity === 'high' || d.severity === 'critical').length}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Require immediate attention
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
                                <CheckCircle className="h-4 w-4 text-success" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {(models.reduce((sum, m) => sum + m.accuracy, 0) / models.length * 100).toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Average across all models
                                </p>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pest Classes</CardTitle>
                                <Camera className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {Math.max(...models.map(m => m.classifiedClasses.length))}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Detected pest types
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader>
                                <CardTitle>Detection Severity Distribution</CardTitle>
                                <CardDescription>Breakdown of pest detections by severity level</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={severityData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={80}
                                            dataKey="value"
                                            label={({ name, value }) => `${name}: ${value}`}
                                        >
                                            {severityData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                            <CardHeader>
                                <CardTitle>Most Common Pests</CardTitle>
                                <CardDescription>Frequency of detected pest types</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={pestTypeData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="count" fill="hsl(var(--primary))" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="detections" className="space-y-6">
                    <div className="grid gap-6">
                        {detections.map((detection) => (
                            <Card key={detection.id} className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-lg">
                                                {detection.cropType} - {detection.location}
                                            </CardTitle>
                                            <CardDescription>
                                                Detected on {detection.detectionDate}
                                            </CardDescription>
                                        </div>
                                        <Badge
                                            variant={
                                                detection.severity === 'critical' ? 'destructive' :
                                                    detection.severity === 'high' ? 'destructive' :
                                                        detection.severity === 'medium' ? 'secondary' : 'outline'
                                            }
                                        >
                                            {detection.severity} severity
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <div>
                                            <img
                                                src={detection.imageUrl}
                                                alt="Pest detection"
                                                className="w-full h-48 object-cover rounded-lg border"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">
                                                    Overall Confidence: {(detection.confidence * 100).toFixed(1)}%
                                                </p>
                                                <Progress value={detection.confidence * 100} className="w-full" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-muted-foreground mb-2">Detected Pests:</p>
                                                <div className="space-y-2">
                                                    {detection.detectedPests.map((pest, index) => (
                                                        <div key={index} className="border rounded-lg p-3">
                                                            <div className="flex justify-between items-start mb-2">
                                                                <div>
                                                                    <p className="font-medium">{pest.name}</p>
                                                                    <p className="text-sm text-muted-foreground italic">{pest.scientificName}</p>
                                                                </div>
                                                                <Badge variant="outline">
                                                                    {(pest.confidence * 100).toFixed(1)}%
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground">
                                                                <strong>Treatment:</strong> {pest.treatmentRecommendation}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="models" className="space-y-6">
                    <Card className='d-flex flex-column gap-5 align-items-center justify-content-center p-4'>
                        <CardHeader>
                            <CardTitle>Model Performance Comparison</CardTitle>
                            <CardDescription>Accuracy metrics for all pest detection models</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={modelPerformanceData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="accuracy" fill="hsl(var(--primary))" name="Accuracy %" />
                                    <Bar dataKey="precision" fill="hsl(var(--success))" name="Precision %" />
                                    <Bar dataKey="recall" fill="hsl(var(--warning))" name="Recall %" />
                                </BarChart>
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
                                            <CardDescription>
                                                Version {model.version} | Last trained: {model.lastTrained}
                                            </CardDescription>
                                        </div>
                                        <Badge
                                            variant={model.status === 'active' ? 'default' :
                                                model.status === 'training' ? 'secondary' : 'outline'}
                                        >
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
                                            <p className="text-sm font-medium text-muted-foreground">Classes</p>
                                            <p className="text-xl font-bold">{model.classifiedClasses.length}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-muted-foreground mb-2">Classified Pest Types:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {model.classifiedClasses.map((pestClass, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {pestClass}
                                                </Badge>
                                            ))}
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

                <TabsContent value="upload" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload Image for Pest Detection</CardTitle>
                            <CardDescription>
                                Upload a crop image to detect and identify pests using our ML models
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-lg font-medium mb-2">Drag and drop your image here</p>
                                <p className="text-muted-foreground mb-4">or click to browse files</p>
                                <Button>
                                    <Camera className="h-4 w-4 mr-2" />
                                    Choose Image
                                </Button>
                            </div>
                            <div className="mt-4 text-sm text-muted-foreground">
                                <p>Supported formats: JPG, PNG, WEBP (max 10MB)</p>
                                <p>For best results, ensure the image is clear and well-lit</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default PestDashboard;