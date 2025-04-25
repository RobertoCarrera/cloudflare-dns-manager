import { Router } from 'express';
import DnsController from './dnsController';

const dnsController = new DnsController();
const router = Router();

export const initializeControllers = () => {
    router.post('/dns', dnsController.addDnsRecord.bind(dnsController));
    router.put('/dns/:id', dnsController.updateDnsRecord.bind(dnsController));
    router.delete('/dns/:id', dnsController.deleteDnsRecord.bind(dnsController));
    router.get('/dns', dnsController.getDnsRecords.bind(dnsController));
    
    return router;
};