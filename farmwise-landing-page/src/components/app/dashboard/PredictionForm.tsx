// components/SensorDashboard/PredictionForm.tsx
import React, { ChangeEvent } from 'react';

export interface PredictionFormData {
    temperature: number;
    humidity: number;
    pressure: number;
    vibration: number;
    power_consumption: number;
}

interface Props {
    formData: PredictionFormData;
    loading: boolean;
    onChange: (field: keyof PredictionFormData, value: number) => void;
    onSubmit: () => void;
}

const PredictionForm: React.FC<Props> = ({ formData, loading, onChange, onSubmit }) => (
    <div className="bg-white rounded-4 shadow-lg p-6 gap-4 pt-4 pb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Anomaly Prediction</h2>
        <div className="space-y-4 gap-3 d-flex flex-column justify-content-center align-items-center">
            {(Object.keys(formData) as (keyof PredictionFormData)[]).map((key) => (
                <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                        {key.replace('_', ' ')}
                    </label>
                    <input
                        type="number"
                        step={key === 'vibration' ? 0.01 : 0.1}
                        value={formData[key]}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(key, parseFloat(e.target.value))}
                        className="mt-1 block w-full rounded-md border-gray-300 border p-2 focus:border-blue-500 focus:outline-none"
                    />
                </div>
            ))}

            <button
                onClick={onSubmit}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
                {loading ? 'Predicting...' : 'Predict Anomaly'}
            </button>
        </div>
    </div>
);

export default PredictionForm;
