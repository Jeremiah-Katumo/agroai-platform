import React from 'react';
import { Badge, ProgressBar } from 'react-bootstrap';

const DetectionCard = ({ detection }) => (
    <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-start">
            <div>
                <h5>{detection.cropType} - {detection.location}</h5>
                <small>Detected on {detection.detectionDate}</small>
            </div>
            <Badge bg={getSeverityColor(detection.severity)}>{detection.severity} severity</Badge>
        </div>
        <div className="card-body row">
            <div className="col-md-6">
                <img src={detection.imageUrl} alt="Detection" className="img-fluid rounded border" />
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <p><strong>Overall Confidence:</strong> {(detection.confidence * 100).toFixed(1)}%</p>
                    <ProgressBar now={detection.confidence * 100} />
                </div>
                <div>
                    <p><strong>Detected Pests:</strong></p>
                    {detection.detectedPests.map((pest, idx) => (
                        <div key={idx} className="border rounded p-2 mb-2">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>{pest.name}</strong>
                                    <br />
                                    <small className="text-muted fst-italic">{pest.scientificName}</small>
                                </div>
                                <Badge bg="secondary">{(pest.confidence * 100).toFixed(1)}%</Badge>
                            </div>
                            <p className="mt-2"><strong>Treatment:</strong> {pest.treatmentRecommendation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const getSeverityColor = (severity) => {
    switch (severity) {
        case 'critical':
        case 'high': return 'danger';
        case 'medium': return 'warning';
        default: return 'secondary';
    }
};

export default DetectionCard;