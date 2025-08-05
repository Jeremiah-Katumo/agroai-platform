// components/SensorDashboard/Header.tsx
import React from 'react';
import { Activity } from 'lucide-react';

interface HeaderProps {
    onAddSample: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddSample }) => (
    <div className="bg-white rounded-5 shadow-lg pt-4 pb-4 mb-6">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 mt-4">
                <Activity className="h-8 w-8 text-blue-600" />
                <h1 className="text-success text-3xl font-bold text-gray-800">Sensor Data Dashboard</h1>
            </div>
            <button
                onClick={onAddSample}
                className="upload-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-3 mt-3"
            >
                <i className="bi bi-load">
                    Add Sample 
                </i>
            </button>
        </div>
    </div>
);

export default Header;
