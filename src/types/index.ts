export interface DnsRecord {
    id: string;
    type: string;
    name: string;
    content: string;
    ttl: number;
    proxied: boolean;
}

export interface CloudflareResponse {
    success: boolean;
    errors: Array<{ code: number; message: string }>;
    messages: Array<string>;
    result: any;
}