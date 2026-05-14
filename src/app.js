import express from 'express';
import { router as tutorRouter } from './routers/tutoring.router.js';

//configure Express.js app
const app = express();

//middleware
app.use(express.json());

//routers
app.use("/api/tutoring", tutorRouter);

export default app;