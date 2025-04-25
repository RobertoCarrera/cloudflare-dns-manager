// filepath: services/cloudflareService.ts
import axios from 'axios';
import { cloudflareConfig } from '../config/cloudflareConfig';
import { DnsRecord, CloudflareResponse } from '../types';

export class CloudflareService {
    private apiUrl = cloudflareConfig.apiUrl;
    private apiKey = cloudflareConfig.apiKey;

    private getHeaders() {
        return {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };
    }

    public async getDnsRecords(zoneId: string): Promise<any> {
        const url = `${this.apiUrl}/zones/${zoneId}/dns_records`;
        const response = await axios.get(url, { headers: this.getHeaders() });
        return response.data;
    }

    public async createDnsRecord(zoneId: string, record: DnsRecord): Promise<CloudflareResponse> {
        const url = `${this.apiUrl}/zones/${zoneId}/dns_records`;
        const response = await axios.post(url, record, { headers: this.getHeaders() });
        return response.data;
    }

    public async updateDnsRecord(zoneId: string, recordId: string, record: DnsRecord): Promise<CloudflareResponse> {
        const url = `${this.apiUrl}/zones/${zoneId}/dns_records/${recordId}`;
        const response = await axios.put(url, record, { headers: this.getHeaders() });
        return response.data;
    }

    public async deleteDnsRecord(zoneId: string, recordId: string): Promise<CloudflareResponse> {
        const url = `${this.apiUrl}/zones/${zoneId}/dns_records/${recordId}`;
        const response = await axios.delete(url, { headers: this.getHeaders() });
        return response.data;
    }

    public async getAllZones(): Promise<any> {
        const response = await axios.get(`${this.apiUrl}/zones`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
    
}
