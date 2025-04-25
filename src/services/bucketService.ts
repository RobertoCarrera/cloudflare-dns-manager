import { S3 } from 'aws-sdk';
import { CloudflareService } from './cloudflareService';

export class BucketService {
    private s3: S3;
    private cloudflareService: CloudflareService;

    constructor() {
        this.s3 = new S3();
        this.cloudflareService = new CloudflareService();
    }

    public async linkBucketToCloudflare(bucketName: string, domain: string): Promise<void> {
        const bucketExists = await this.checkBucketExists(bucketName);
        if (!bucketExists) {
            throw new Error(`Bucket ${bucketName} does not exist.`);
        }

        await this.cloudflareService.createDNSRecord(domain, bucketName);
    }

    private async checkBucketExists(bucketName: string): Promise<boolean> {
        try {
            await this.s3.headBucket({ Bucket: bucketName }).promise();
            return true;
        } catch (error) {
            return false;
        }
    }
}