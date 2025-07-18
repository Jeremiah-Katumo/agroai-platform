import React from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bug, TrendingUp } from 'lucide-react';
import { Link } from "lucide-react";

const FeatureCard = () => {

    return (
        <>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> */}
            <div className="d-flex flex-row align-items-center justify-content-center gap-5 mb-16 mt-4 p-5">
                <Card className="feature-card border-border flex-fill col-md-4">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <TrendingUp className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle>Yield Prediction</CardTitle>
                                <CardDescription>AI-powered crop yield forecasting</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="d-flex gap-3 justify-content-center flex-column align-items-center pb-5">
                        <p className="text-paragraph text-muted-foreground mb-4 w-2">
                            Get accurate predictions for your crop yields using advanced machine learning models
                            trained on historical data, weather patterns, and soil conditions.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 list-unstyled">
                            <li>• 92%+ prediction accuracy</li>
                            <li>• Multiple crop types supported</li>
                            <li>• Real-time model performance metrics</li>
                            <li>• Historical trend analysis</li>
                        </ul>
                        <Button asChild className="feature-btn mt-4 w-full" variant="outline">
                            <Link
                                to="/yields-dashboard"
                                style={{
                                    display: "inline-block",
                                    padding: "12px 20px",
                                    backgroundColor: "#059652",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    textAlign: "center",
                                    width: "30%",
                                    marginTop: "1rem",
                                    paddingTop: "1rem"
                                }}
                            >
                                <p>View Dashboard</p>
                            </Link>
                        </Button>

                    </CardContent>
                </Card>

                <Card className="feature-card border-border flex-fill col-md-4">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Bug className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle>Pest Detection</CardTitle>
                                <CardDescription>Computer vision-based pest identification</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="d-flex gap-3 justify-content-center flex-column align-items-center pb-5">
                        <p className="text-paragraph text-muted-foreground mb-4">
                            Instantly identify pests in your crops using state-of-the-art computer vision
                            models. Get treatment recommendations and track pest patterns.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li>• 8+ pest types classified</li>
                            <li>• Real-time image analysis</li>
                            <li>• Treatment recommendations</li>
                            <li>• Severity level assessment</li>
                        </ul>
                        <Button asChild className="feature-btn mt-4 w-full" variant="outline">
                            <Link
                                to="/pests-dashboard"
                                style={{
                                    display: "inline-block",
                                    padding: "12px 20px",
                                    backgroundColor: "#059652",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    textAlign: "center",
                                    width: "30%",
                                    marginTop: "1rem",
                                    paddingTop: "1rem"
                                }}
                            >
                                <p>View Dashboard</p>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default FeatureCard