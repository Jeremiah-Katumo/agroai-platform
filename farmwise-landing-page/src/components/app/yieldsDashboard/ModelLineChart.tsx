import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

const ModelLineChart = ({ data }: { data }) => (  // {data: any[]}
    <Card className="d-flex flex-column gap-5 align-items-center justify-content-center p-4">
        <CardHeader>
            <CardTitle>Model Performance Metrics</CardTitle>
            <CardDescription>Accuracy, precision, and recall for all yield prediction models</CardDescription>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="accuracy" stroke="hsl(var(--primary))" name="Accuracy" />
                    <Line type="monotone" dataKey="precision" stroke="hsl(var(--success))" name="Precision" />
                    <Line type="monotone" dataKey="recall" stroke="hsl(var(--warning))" name="Recall" />
                    <Line type="monotone" dataKey="f1Score" stroke="hsl(var(--accent-foreground))" name="F1 Score" />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);

export default ModelLineChart;
