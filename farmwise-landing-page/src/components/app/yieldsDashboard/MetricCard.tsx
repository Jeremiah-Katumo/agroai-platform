import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

const MetricCard = ({
    title,
    value,
    icon,
    note,
}: {
    title: string;
    value: string | number;
    icon: ReactNode;
    note: string;
}) => (
    <Card className="card d-flex flex-column gap-5 align-items-center justify-content-center p-4 w-40 rounded-pill">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {icon}
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{note}</p>
        </CardContent>
    </Card>
);

export default MetricCard;
