// filepath: middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

export const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message = error.response?.data?.errors?.[0]?.message || error.message || 'Axios error';
        console.error('Axios Error:', error.response?.data); // Opcional
        return res.status(status).json({ error: message });
    }

    if (error instanceof Error) {
        console.error('General Error:', error.message);
        return res.status(500).json({ error: error.message });
    }

    console.error('Unknown Error:', error);
    res.status(500).json({ error: 'An unknown error occurred' });
};
