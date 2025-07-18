export interface YieldPrediction {
  id: string;
  cropType: string;
  predictedYield: number;
  actualYield?: number;
  confidence: number;
  plantingDate: string;
  harvestDate: string;
  location: string;
  soilType: string;
  weatherConditions: string;
  createdAt: string;
}

export interface YieldModel {
  id: string;
  name: string;
  version: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingDataSize: number;
  lastTrained: string;
  status: 'active' | 'training' | 'deprecated';
}

export interface PestDetection {
  id: string;
  imageUrl: string;
  detectedPests: DetectedPest[];
  confidence: number;
  location: string;
  cropType: string;
  detectionDate: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface DetectedPest {
  name: string;
  scientificName: string;
  confidence: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  treatmentRecommendation: string;
}

export interface PestModel {
  id: string;
  name: string;
  version: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  classifiedClasses: string[];
  trainingDataSize: number;
  lastTrained: string;
  status: 'active' | 'training' | 'deprecated';
}

export interface ModelMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  confusionMatrix?: number[][];
  rocAuc?: number;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}