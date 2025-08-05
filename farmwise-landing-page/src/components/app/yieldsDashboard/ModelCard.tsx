import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { YieldModel } from '@/types/agriculture';

const ModelCard = ({ model }: { model: YieldModel }) => (
    <Card className="d-flex flex-column gap-4 align-items-center justify-content-center p-2 rounded-5">
        <CardHeader>
            <div className="flex justify-between items-start">
                <div>
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    <CardDescription>Version {model.version} | Last trained: {model.lastTrained}</CardDescription>
                </div>
                <Badge
                    variant={
                        model.status === 'active'
                            ? 'default'
                            : model.status === 'training'
                                ? 'secondary'
                                : 'outline'
                    }
                >
                    {model.status}
                </Badge>
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Accuracy</p>
                    <p className="text-xl font-bold">{(model.accuracy * 100).toFixed(1)}%</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Precision</p>
                    <p className="text-xl font-bold">{(model.precision * 100).toFixed(1)}%</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">Recall</p>
                    <p className="text-xl font-bold">{(model.recall * 100).toFixed(1)}%</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-muted-foreground">F1 Score</p>
                    <p className="text-xl font-bold">{(model.f1Score * 100).toFixed(1)}%</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                    Training data: {model.trainingDataSize.toLocaleString()} samples
                </p>
                <Button variant="outline" size="sm">
                    Retrain Model
                </Button>
            </div>
        </CardContent>
    </Card>
);

export default ModelCard;
