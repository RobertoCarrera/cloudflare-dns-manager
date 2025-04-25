import { Router } from 'express';
import DnsController from '../controllers/dnsController';

const router = Router();
const dnsController = new DnsController();

export const setRoutes = () => {
    router.post('/dns', dnsController.addDnsRecord);
    router.put('/dns/:id', dnsController.updateDnsRecord);
    router.delete('/dns/:id', dnsController.deleteDnsRecord);
    router.get('/dns', dnsController.getDnsRecords);
    
    return router;
};