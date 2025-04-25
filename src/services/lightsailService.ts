// import { Lightsail } from 'aws-sdk';
// import { CloudflareService } from './cloudflareService';

// export class LightsailService {
//     private lightsail: Lightsail;
//     private cloudflareService: CloudflareService;

//     constructor() {
//         this.lightsail = new Lightsail();
//         this.cloudflareService = new CloudflareService();
//     }

//     public async createInstance(instanceName: string, blueprintId: string, bundleId: string) {
//         const params = {
//             instanceNames: [instanceName],
//             blueprintId: blueprintId,
//             bundleId: bundleId,
//         };

//         return this.lightsail.createInstances(params).promise();
//     }

//     public async deleteInstance(instanceName: string) {
//         const params = {
//             instanceNames: [instanceName],
//         };

//         return this.lightsail.deleteInstances(params).promise();
//     }

//     public async getInstanceDetails(instanceName: string) {
//         const params = {
//             instanceNames: [instanceName],
//         };

//         return this.lightsail.getInstances(params).promise();
//     }

//     public async configureDns(instanceName: string, domain: string) {
//         const instanceDetails = await this.getInstanceDetails(instanceName);
//         const ipAddress = instanceDetails.instances[0].publicIpAddress;

//         return this.cloudflareService.createDnsRecord(domain, ipAddress);
//     }
// }