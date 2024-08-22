import { ApiKey } from './api-key.types';

export class ApiKeyService {
    private apiKeys: ApiKey[] = [];

    public generateApiKey(userId: number): ApiKey {
        const newApiKey: ApiKey = {
            id: this.apiKeys.length + 1,
            key: `key-${Math.random().toString(36).substring(2)}`,
            userId: userId,
            createdAt: new Date(),
            isActive: true,
        };

        this.apiKeys.push(newApiKey);
        return newApiKey;
    }

    public getApiKeysForUser(userId: number): ApiKey[] {
        return this.apiKeys.filter(apiKey => apiKey.userId === userId);
    }

    public deactivateApiKey(apiKeyId: number): void {
        for (let i = 0; i < this.apiKeys.length; i++) {
            if (this.apiKeys[i].id === apiKeyId) {
                this.apiKeys[i].isActive = false;
                return; 
            }
        }
    }

    public validateApiKey(key: string): boolean {
        const apiKey = this.apiKeys.find(apiKey => apiKey.key === key);
        return apiKey !== undefined && apiKey.isActive;
    }
}