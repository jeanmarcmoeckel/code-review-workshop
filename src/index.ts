import { ApiKeyService } from './api-key.service';

const apiKeyService = new ApiKeyService();

const apiKey1 = apiKeyService.generateApiKey(1);
const apiKey2 = apiKeyService.generateApiKey(2);

console.log('API Key 1:', apiKey1);
console.log('API Key 2:', apiKey2);

console.log('Validating API Key 1:', apiKeyService.validateApiKey(apiKey1.key));

apiKeyService.deactivateApiKey(apiKey1.id);
console.log('API Key 1 after deactivation:', apiKeyService.validateApiKey(apiKey1.key));