// components/SensorDashboard/PredictionResults.tsx
import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';

interface PredictionResult {
    is_anomaly: boolean;
    predicted_status: string;
    confidence: number;
    anomaly_score: number;
}

interface ModelStatus {
    model_trained: boolean;
    metrics?: {
        accuracy: number;
    };
}

interface Props {
    prediction: PredictionResult | null;
    modelStatus: ModelStatus | null;
}

const PredictionResults: React.FC<Props> = ({ prediction, modelStatus }) => (
    <div className="bg-white rounded-4 shadow-lg pt-4 pb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Prediction Results</h2>

        {prediction && (
            <div className="space-y-4">
                <div className={`p-4 rounded-4 ${prediction.is_anomaly ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'} border`}>
                    <div className="flex items-center space-x-2">
                        {prediction.is_anomaly ? (
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                        ) : (
                            <Zap className="h-5 w-5 text-green-600" />
                        )}
                        <span className={`font-medium ${prediction.is_anomaly ? 'text-red-800' : 'text-green-800'}`}>
                            {prediction.is_anomaly ? 'Anomaly Detected' : 'Normal Operation'}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Predicted Status</p>
                        <p className="font-semibold text-gray-800">{prediction.predicted_status}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Confidence</p>
                        <p className="font-semibold text-gray-800">{(prediction.confidence * 100).toFixed(1)}%</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                        <p className="text-sm text-gray-600">Anomaly Score</p>
                        <p className="font-semibold text-gray-800">{prediction.anomaly_score.toFixed(4)}</p>
                    </div>
                </div>
            </div>
        )}

        {modelStatus && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Model Status</h3>
                <p className="text-sm text-blue-700">Model Trained: {modelStatus.model_trained ? 'Yes' : 'No'}</p>
                {modelStatus.metrics && (
                    <p className="text-sm text-blue-700">Accuracy: {(modelStatus.metrics.accuracy * 100).toFixed(1)}%</p>
                )}
            </div>
        )}
    </div>
);

export default PredictionResults;
