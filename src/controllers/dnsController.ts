import { Request, Response } from 'express';
import { CloudflareService } from '../services/cloudflareService';
import { BucketService } from '../services/bucketService';
import { LightsailService } from '../services/lightsailService';

export class DnsController {
    private cloudflareService: CloudflareService;
    private bucketService: BucketService;
    private lightsailService: LightsailService;

    constructor() {
        this.cloudflareService = new CloudflareService();
        this.bucketService = new BucketService();
        this.lightsailService = new LightsailService();
    }

    public async addDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const recordData = req.body;
            const result = await this.cloudflareService.createDnsRecord(recordData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async updateDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const recordData = req.body;
            const result = await this.cloudflareService.updateDnsRecord(id, recordData);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    public async removeDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.cloudflareService.deleteDnsRecord(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}