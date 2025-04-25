import { Express } from 'express';
import { DnsController } from '../controllers/dnsController';

const dnsController = new DnsController();

export const setRoutes = (app: Express): void => {
    app.get('/api/dns/:zoneId', dnsController.getDnsRecords.bind(dnsController));
    app.post('/api/dns', dnsController.addDnsRecord.bind(dnsController));
    app.put('/api/dns/:id', dnsController.updateDnsRecord.bind(dnsController));
    app.delete('/api/dns/:id', dnsController.removeDnsRecord.bind(dnsController));
    app.get('/api/zones', dnsController.getAllZones.bind(dnsController));
};