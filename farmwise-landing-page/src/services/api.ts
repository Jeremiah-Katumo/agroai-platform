import {
    YieldPrediction,
    YieldModel,
    PestDetection,
    PestModel,
    ApiResponse
} from '@/types/agriculture';

// FastAPI backend URL - update this to match your backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class ApiService {
    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${API_BASE_URL}${endpoint}`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }

    // Yield-related API calls
    async getYieldPredictions(): Promise<ApiResponse<YieldPrediction[]>> {
        return this.request('/yield/predictions');
    }

    async getYieldModels(): Promise<ApiResponse<YieldModel[]>> {
        return this.request('/yield/models');
    }

    async createYieldPrediction(data: Omit<YieldPrediction, 'id' | 'createdAt'>): Promise<ApiResponse<YieldPrediction>> {
        return this.request('/yield/predictions', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async trainYieldModel(modelId: string): Promise<ApiResponse<YieldModel>> {
        return this.request(`/yield/models/${modelId}/train`, {
            method: 'POST',
        });
    }

    // Pest-related API calls
    async getPestDetections(): Promise<ApiResponse<PestDetection[]>> {
        return this.request('/pest/detections');
    }

    async getPestModels(): Promise<ApiResponse<PestModel[]>> {
        return this.request('/pest/models');
    }

    async uploadPestImage(imageFile: File): Promise<ApiResponse<PestDetection>> {
        const formData = new FormData();
        formData.append('image', imageFile);

        return this.request('/pest/detect', {
            method: 'POST',
            body: formData,
            headers: {}, // Let browser set content-type for FormData
        });
    }

    async trainPestModel(modelId: string): Promise<ApiResponse<PestModel>> {
        return this.request(`/pest/models/${modelId}/train`, {
            method: 'POST',
        });
    }
}

export const apiService = new ApiService();