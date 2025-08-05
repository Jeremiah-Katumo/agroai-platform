// components/SensorDashboard/AnalyticsCards.tsx
import React from 'react';
import { Database, Thermometer, TrendingUp, AlertTriangle } from 'lucide-react';

interface AnalyticsData {
    total_readings: number;
    average_temperature: number;
    average_humidity: number;
    recent_anomalies: number;
}

interface Props {
    analytics: AnalyticsData;
}

const AnalyticsCards: React.FC<Props> = ({ analytics }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 rounded-4">
        <Card label="Total Readings" value={analytics.total_readings} icon={<Database />} color="blue" />
        <Card label="Avg Temperature" value={`${analytics.average_temperature.toFixed(1)}°C`} icon={<Thermometer />} color="green" />
        <Card label="Avg Humidity" value={`${analytics.average_humidity.toFixed(1)}%`} icon={<TrendingUp />} color="purple" />
        <Card label="Recent Anomalies" value={analytics.recent_anomalies} icon={<AlertTriangle />} color="red" />
    </div>
);

const Card = ({
    label,
    value,
    icon,
    color
}: {
    label: string;
    value: number | string;
    icon: JSX.Element;
    color: string;
}) => (
    <div className="bg-white rounded-lg shadow-lg p-6 rounded-4">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-600">{label}</p>
                <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
            </div>
            {React.cloneElement(icon, { className: `h-8 w-8 text-${color}-600` })}
        </div>
    </div>
);

export default AnalyticsCards;
