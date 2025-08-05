import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

const YieldBarChart = ({ data }: { data }) => ( // {data: any[]}
    <Card className="d-flex flex-column gap-5 align-items-center justify-content-center pb-4 pt-4 top-50 rounded-3">
        <CardHeader>
            <CardTitle>Yield Predictions vs Actual Results</CardTitle>
            <CardDescription>Comparison of predicted and actual crop yields</CardDescription>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="predicted" fill="hsl(var(--primary))" name="Predicted Yield" />
                    <Bar dataKey="actual" fill="hsl(var(--success))" name="Actual Yield" />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);

export default YieldBarChart;
