import { Router } from 'express';
import * as tutorCtr from '../controllers/tutoring.controller.js';

export const router = Router();

router.get("/tutors", tutorCtr.getAllHours);