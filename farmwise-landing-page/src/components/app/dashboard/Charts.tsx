// components/SensorDashboard/Charts.tsx
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, BarChart, Bar
} from 'recharts';

interface ChartDataPoint {
    index: number;
    temperature: number;
    humidity: number;
    pressure: number;
    vibration: number;
    power: number;
    status: number;
}

interface Props {
    data: ChartDataPoint[];
}

const Charts: React.FC<Props> = ({ data }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sensor Readings Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temperature" stroke="#3B82F6" name="Temperature" />
                    <Line type="monotone" dataKey="humidity" stroke="#8B5CF6" name="Humidity" />
                    <Line type="monotone" dataKey="power" stroke="#EF4444" name="Power" />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Anomaly Detection</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="index" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="status" fill="#EF4444" name="Anomaly Status" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default Charts;
