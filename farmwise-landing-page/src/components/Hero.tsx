import React from "react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Bug, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from "lucide-react";


const Hero = () => {

    return (
        <>
            <section id="hero" className="hero section dark-background">

                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <Sprout className="h-16 w-16 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        AgriAI Platform - Solution to World's Starvation
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Advanced machine learning platform for crop yield prediction and pest detection.
                        Empowering farmers with AI-driven insights for better harvests.
                    </p>
                    <div className="dash-btn-container d-flex flex-row sm:flex-row gap-4 justify-content-center align-items-center">
                        <Button asChild size="lg" className="dash-btn m-3">
                            <Link to="/yields-dashboard">
                                <BarChart3 className="h-7 w-7 mr-4" />
                                Yield Dashboard
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="dash-btn">
                            <Link to="/pests-dashboard">
                                <Bug className="h-7 w-7 mr-4" />
                                Pest Dashboard
                            </Link>
                        </Button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero;