import { Request, Response, NextFunction } from 'express';
import { CloudflareService } from '../services/cloudflareService';

export class DnsController {
    private cloudflareService: CloudflareService;

    constructor() {
        this.cloudflareService = new CloudflareService();
    }

    public async getDnsRecords(req: Request, res: Response): Promise<void> {
        try {
            const { zoneId } = req.params; // Obtener zoneId de los parámetros de la URL
            const records = await this.cloudflareService.getDnsRecords(zoneId);
            res.status(200).json(records);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async addDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const { zoneId } = req.params; // Obtener zoneId de los parámetros de la URL
            const recordData = req.body; // Obtener los datos del registro del cuerpo de la solicitud
            const result = await this.cloudflareService.createDnsRecord(zoneId, recordData);
            res.status(201).json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async updateDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const { zoneId, id: recordId } = req.params; // Obtener zoneId y recordId de los parámetros de la URL
            const recordData = req.body; // Obtener los datos del registro del cuerpo de la solicitud
            const result = await this.cloudflareService.updateDnsRecord(zoneId, recordId, recordData);
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async removeDnsRecord(req: Request, res: Response): Promise<void> {
        try {
            const { zoneId, id: recordId } = req.params; // Obtener zoneId y recordId de los parámetros de la URL
            await this.cloudflareService.deleteDnsRecord(zoneId, recordId);
            res.status(204).send();
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }

    public async getAllZones(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.cloudflareService.getAllZones();
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Unknown error' });
            }
        }
    }
    
}