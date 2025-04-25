import axios from 'axios';
import { CloudflareConfig } from '../config/cloudflareConfig';
import { DnsRecord, CloudflareResponse } from '../types';

export class CloudflareService {
    private apiUrl: string;
    private apiKey: string;
    private email: string;

    constructor() {
        this.apiUrl = CloudflareConfig.apiUrl;
        this.apiKey = CloudflareConfig.apiKey;
        this.email = CloudflareConfig.email;
    }

    async createDnsRecord(zoneId: string, record: DnsRecord): Promise<CloudflareResponse> {
        const response = await axios.post(`${this.apiUrl}/zones/${zoneId}/dns_records`, record, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }

    async updateDnsRecord(zoneId: string, recordId: string, record: DnsRecord): Promise<CloudflareResponse> {
        const response = await axios.put(`${this.apiUrl}/zones/${zoneId}/dns_records/${recordId}`, record, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }

    async deleteDnsRecord(zoneId: string, recordId: string): Promise<CloudflareResponse> {
        const response = await axios.delete(`${this.apiUrl}/zones/${zoneId}/dns_records/${recordId}`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
        return response.data;
    }

    async getDnsRecords(zoneId: string): Promise<CloudflareResponse> {
        const response = await axios.get(`${this.apiUrl}/zones/${zoneId}/dns_records`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
        return response.data;
    }
}