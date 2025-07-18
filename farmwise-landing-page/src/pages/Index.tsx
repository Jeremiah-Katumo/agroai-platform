import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Bug, BarChart3, TrendingUp } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/cards/FeatureCard';
import StatsSection from '@/components/StatsSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Feature Cards */}
        <FeatureCard />

        {/* Stats Section */}
        <StatsSection />
      </div>
    </div>
  );
};

export default Index;
