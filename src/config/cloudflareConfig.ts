// filepath: cloudflare-dns-manager/config/cloudflareConfig.ts
import dotenv from 'dotenv';

dotenv.config();

export const cloudflareConfig = {
    apiUrl: 'https://api.cloudflare.com/client/v4',
    apiKey: process.env.CLOUDFLARE_API_TOKEN || '',
    email: process.env.CLOUDFLARE_EMAIL || '',
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
    zoneId: process.env.CLOUDFLARE_ZONE_ID || ''
};

if (!cloudflareConfig.apiKey) {
    throw new Error('Cloudflare API Token is missing. Please set it in the .env file.');
}