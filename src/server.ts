import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
   res.send('Welcome to Express zzz & TypeScript Server');
});

app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});