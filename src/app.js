import express from 'express';

//configure Express.js app
const app = express();

//middleware
app.use(express.json());

//routers

export default app;