// PestDashboard.tsx (Main Component)
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Container, Row, Col, Spinner } from 'react-bootstrap';
import DetectionCard from './pestsDashboard/DetectionCard';
import ModelCard from './pestsDashboard/ModelCard';
import DashboardChart from './pestsDashboard/DashboardChart';
import { PestDetection, PestModel } from '@/types/agriculture';
import { mockPestDetections, mockPestModels } from '@/services/mockData';
import 'bootstrap/dist/css/bootstrap.min.css';


const PestDashboard = () => {
    const [detections, setDetections] = useState<PestDetection[]>([]);
    const [models, setModels] = useState<PestModel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setDetections(mockPestDetections);
                setModels(mockPestModels);
            } catch (err) {
                console.error('Failed to load pest data:', err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const severityData = [
        { name: 'Low', value: detections.filter(d => d.severity === 'low').length, color: 'green' },
        { name: 'Medium', value: detections.filter(d => d.severity === 'medium').length, color: 'orange' },
        { name: 'High', value: detections.filter(d => d.severity === 'high').length, color: 'red' },
        { name: 'Critical', value: detections.filter(d => d.severity === 'critical').length, color: '#dc2626' },
    ];

    const pestTypeData = detections.reduce((acc, detection) => {
        detection.detectedPests.forEach(pest => {
            const existing = acc.find(p => p.name === pest.name);
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
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Container className="mx-auto py-4 gap-4">
            {/* <h2 className="mb-2">Pest Detection Dashboard</h2>
            <p className="text-muted mb-4">Monitor crop pest detections and classification models</p> */}
            <div className="text-center pt-4 mb-5">
                <h1 className="text-success display-5 fw-bold mb-2">Pest Detection Dashboard</h1>
                <p className="text-muted">Monitor crop pest detections and classification models</p>
            </div>
            <Tabs defaultActiveKey="overview" className="mb-4">
                <Tab eventKey="overview" title="Overview">
                    <Row className="mb-4">
                        <Col lg={6}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Detection Severity</h5>
                                    <DashboardChart data={severityData} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Most Common Pests</h5>
                                    <DashboardChart data={pestTypeData.map(p => ({ ...p, value: p.count, color: 'blue' }))} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="detections" title="Detections">
                    {detections.map(d => <DetectionCard key={d.id} detection={d} />)}
                </Tab>

                <Tab eventKey="models" title="Models">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Model Performance</h5>
                            <DashboardChart data={modelPerformanceData.map(p => ({ name: p.name, value: p.accuracy, color: 'green' }))} />
                        </div>
                    </div>
                    {models.map(m => <ModelCard key={m.id} model={m} />)}
                </Tab>

                <Tab eventKey="upload" title="Upload Image">
                    <div className="card text-center p-5 border-dashed">
                        <p className="mb-2">Drag & drop image or click to browse</p>
                        <button className="btn btn-primary">Choose Image</button>
                        <p className="text-muted small mt-3">Supported: JPG, PNG, WEBP (max 10MB)</p>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PestDashboard;
