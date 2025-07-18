import { YieldPrediction, YieldModel, PestDetection, PestModel } from '@/types/agriculture';

// Mock data for development - replace with actual API calls
export const mockYieldPredictions: YieldPrediction[] = [
    {
        id: '1',
        cropType: 'Corn',
        predictedYield: 185.5,
        actualYield: 178.2,
        confidence: 0.92,
        plantingDate: '2024-04-15',
        harvestDate: '2024-09-20',
        location: 'Iowa Field A',
        soilType: 'Loamy',
        weatherConditions: 'Optimal',
        createdAt: '2024-03-01',
    },
    {
        id: '2',
        cropType: 'Wheat',
        predictedYield: 65.3,
        actualYield: 62.8,
        confidence: 0.88,
        plantingDate: '2024-03-10',
        harvestDate: '2024-08-15',
        location: 'Kansas Field B',
        soilType: 'Clay',
        weatherConditions: 'Dry',
        createdAt: '2024-02-15',
    },
    {
        id: '3',
        cropType: 'Soybeans',
        predictedYield: 48.7,
        confidence: 0.85,
        plantingDate: '2024-05-01',
        harvestDate: '2024-10-10',
        location: 'Illinois Field C',
        soilType: 'Sandy',
        weatherConditions: 'Wet',
        createdAt: '2024-04-01',
    }
];

export const mockYieldModels: YieldModel[] = [
    {
        id: '1',
        name: 'Corn Yield Predictor v2.1',
        version: '2.1.0',
        accuracy: 0.924,
        precision: 0.918,
        recall: 0.929,
        f1Score: 0.923,
        trainingDataSize: 15000,
        lastTrained: '2024-06-15',
        status: 'active',
    },
    {
        id: '2',
        name: 'Multi-Crop Yield Model',
        version: '1.5.2',
        accuracy: 0.876,
        precision: 0.882,
        recall: 0.871,
        f1Score: 0.876,
        trainingDataSize: 25000,
        lastTrained: '2024-06-10',
        status: 'active',
    },
    {
        id: '3',
        name: 'Experimental Deep Learning Model',
        version: '0.8.1',
        accuracy: 0.901,
        precision: 0.895,
        recall: 0.907,
        f1Score: 0.901,
        trainingDataSize: 8000,
        lastTrained: '2024-07-01',
        status: 'training',
    }
];

export const mockPestDetections: PestDetection[] = [
    {
        id: '1',
        imageUrl: '/api/placeholder/300/200',
        detectedPests: [
            {
                name: 'Corn Borer',
                scientificName: 'Ostrinia nubilalis',
                confidence: 0.95,
                boundingBox: { x: 120, y: 80, width: 60, height: 40 },
                treatmentRecommendation: 'Apply Bt-based insecticide',
            }
        ],
        confidence: 0.95,
        location: 'Field A, Section 3',
        cropType: 'Corn',
        detectionDate: '2024-07-10',
        severity: 'high',
    },
    {
        id: '2',
        imageUrl: '/api/placeholder/300/200',
        detectedPests: [
            {
                name: 'Aphids',
                scientificName: 'Aphis gossypii',
                confidence: 0.88,
                boundingBox: { x: 45, y: 90, width: 80, height: 50 },
                treatmentRecommendation: 'Introduce ladybugs or apply neem oil',
            },
            {
                name: 'Spider Mites',
                scientificName: 'Tetranychus urticae',
                confidence: 0.76,
                boundingBox: { x: 200, y: 120, width: 40, height: 30 },
                treatmentRecommendation: 'Increase humidity and apply miticide',
            }
        ],
        confidence: 0.82,
        location: 'Greenhouse B',
        cropType: 'Tomato',
        detectionDate: '2024-07-08',
        severity: 'medium',
    }
];

export const mockPestModels: PestModel[] = [
    {
        id: '1',
        name: 'Universal Pest Detector',
        version: '3.2.1',
        accuracy: 0.932,
        precision: 0.928,
        recall: 0.935,
        f1Score: 0.931,
        classifiedClasses: [
            'Corn Borer', 'Aphids', 'Spider Mites', 'Caterpillars',
            'Whiteflies', 'Thrips', 'Beetles', 'Moths'
        ],
        trainingDataSize: 45000,
        lastTrained: '2024-06-20',
        status: 'active',
    },
    {
        id: '2',
        name: 'Crop-Specific Pest Model',
        version: '2.0.5',
        accuracy: 0.889,
        precision: 0.891,
        recall: 0.887,
        f1Score: 0.889,
        classifiedClasses: [
            'Corn Rootworm', 'Armyworm', 'Cutworm', 'Corn Earworm'
        ],
        trainingDataSize: 20000,
        lastTrained: '2024-05-15',
        status: 'active',
    }
];