import React from 'react';
import { Badge, Button } from 'react-bootstrap';

const ModelCard = ({ model }) => (
  <div className="card mb-4">
    <div className="card-header d-flex justify-content-between">
      <div>
        <h5>{model.name}</h5>
        <small>Version {model.version} | Last trained: {model.lastTrained}</small>
      </div>
      <Badge bg={model.status === 'active' ? 'primary' : 'secondary'}>{model.status}</Badge>
    </div>
    <div className="card-body">
      <div className="row mb-3">
        <div className="col">
          <small className="text-muted">Accuracy</small>
          <h6>{(model.accuracy * 100).toFixed(1)}%</h6>
        </div>
        <div className="col">
          <small className="text-muted">Precision</small>
          <h6>{(model.precision * 100).toFixed(1)}%</h6>
        </div>
        <div className="col">
          <small className="text-muted">Recall</small>
          <h6>{(model.recall * 100).toFixed(1)}%</h6>
        </div>
        <div className="col">
          <small className="text-muted">Classes</small>
          <h6>{model.classifiedClasses.length}</h6>
        </div>
      </div>

      <p className="text-muted mb-2">Classified Pest Types:</p>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {model.classifiedClasses.map((c, i) => (
          <Badge key={i} bg="light" text="dark">{c}</Badge>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <small className="text-muted">Training data: {model.trainingDataSize.toLocaleString()} samples</small>
        <Button variant="outline-primary" size="sm">Retrain Model</Button>
      </div>
    </div>
  </div>
);

export default ModelCard;
