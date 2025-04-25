# Cloudflare DNS Manager

## Overview
The Cloudflare DNS Manager is a Node.js application that allows users to manage their DNS records through the Cloudflare API. It provides functionality to link AWS S3 buckets and Lightsail instances to Cloudflare DNS, enabling seamless integration and management of DNS settings.

## Features
- Create, update, and delete DNS records using the Cloudflare API.
- Manage AWS S3 buckets and link them to Cloudflare DNS.
- Manage AWS Lightsail instances and configure their DNS settings with Cloudflare.
- RESTful API for easy integration with other services.

## Project Structure
```
cloudflare-dns-manager
├── src
│   ├── app.ts                # Entry point of the application
│   ├── services              # Contains service classes for Cloudflare, S3, and Lightsail
│   │   ├── cloudflareService.ts
│   │   ├── bucketService.ts
│   │   └── lightsailService.ts
│   ├── controllers           # Contains controllers for handling requests
│   │   ├── dnsController.ts
│   │   └── index.ts
│   ├── routes                # Contains route definitions
│   │   └── dnsRoutes.ts
│   └── types                 # Contains TypeScript interfaces
│       └── index.ts
├── config                    # Configuration files
│   └── cloudflareConfig.ts
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cloudflare-dns-manager
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
Before running the application, configure your Cloudflare API settings in `config/cloudflareConfig.ts`. Ensure you have your API key and account details ready.

## Usage
To start the application, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## API Endpoints
- **POST /dns**: Add a new DNS record.
- **PUT /dns/:id**: Update an existing DNS record.
- **DELETE /dns/:id**: Remove a DNS record.
- **GET /dns/suggestions**: Get suggestions for available domains.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.