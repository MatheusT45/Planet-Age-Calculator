import { Request, Response } from 'express';
import { getAgeOnPlanet } from '../controllers/planet-age.controller';

const express = require('express');
const router = express.Router();

router.post('/age-on-planet', function (req: Request, res: Response) {
  const seconds = req.body.seconds;
  const planet = req.body.type;

  const { response, error } = getAgeOnPlanet(seconds, planet);

  if (error) {
    res.status(400).send({ response });
    return;
  }

  res.send({ response });
});

export default router;
