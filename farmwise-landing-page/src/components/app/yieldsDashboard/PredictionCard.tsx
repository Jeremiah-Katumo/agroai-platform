import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { YieldPrediction } from '@/types/agriculture';

const PredictionCard = ({ prediction }: { prediction: YieldPrediction }) => (
    <Card className="d-flex flex-column gap-5 align-items-center justify-content-center p-4 rounded-5">
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="text-lg">{prediction.cropType} - {prediction.location}</CardTitle>
                    <CardDescription>
                        Planted: {prediction.plantingDate} | Harvest: {prediction.harvestDate}
                    </CardDescription>
                </div>
                <Badge variant="secondary">
                    {(prediction.confidence * 100).toFixed(1)}% confidence
                </Badge>
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Predicted Yield</p>
                    <p className="text-2xl font-bold text-primary">{prediction.predictedYield} bu/acre</p>
                </div>
                {prediction.actualYield && (
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Actual Yield</p>
                        <p className="text-2xl font-bold text-success">{prediction.actualYield} bu/acre</p>
                    </div>
                )}
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Conditions</p>
                    <p className="text-sm">{prediction.soilType} soil, {prediction.weatherConditions} weather</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">Confidence Level</p>
                <Progress value={prediction.confidence * 100} className="w-full" />
            </div>
        </CardContent>
    </Card>
);

export default PredictionCard;
