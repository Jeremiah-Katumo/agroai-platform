import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CropDiseaseDashboard() {
    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h1 className="text-success display-5 fw-bold mb-4">Crop Disease Detector Dashboard</h1>
                <p className="text-muted">Monitor crop disease predictions and model performance</p>
            </div>

            {/* 2x2 Responsive Grid */}
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card shadow rounded h-100">
                        <div className="card-body">
                            <h5 className="card-title">📸 Upload Crop Image</h5>
                            <input type="file" className="form-control" />
                            <button className="btn btn-success mt-3 w-100">Analyze</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow rounded h-100">
                        <div className="card-body">
                            <h5 className="card-title">🧪 Prediction Result</h5>
                            <p className="lead">No disease detected ✅</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow rounded h-100">
                        <div className="card-body">
                            <h5 className="card-title">📊 Disease Statistics</h5>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Blight</span> <span className="badge bg-danger">13%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Rust</span> <span className="badge bg-warning text-dark">22%</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Healthy</span> <span className="badge bg-success">65%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow rounded h-100">
                        <div className="card-body">
                            <h5 className="card-title">📚 Recommendations</h5>
                            <ul>
                                <li>Use organic fungicides weekly</li>
                                <li>Maintain proper irrigation</li>
                                <li>Monitor temperature changes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
