import { Request, Response } from 'express';
import { getAgeOnPlanet } from '../controllers/planet-age.controller';

const express = require('express');
const router = express.Router();

router.post('/', function (req: Request, res: Response) {
  const birthDay = req.body.birthDay;
  const planet = req.body.type;

  const { response, error } = getAgeOnPlanet(birthDay, planet);

  if (error) {
    res.status(400).send({ response });
    return;
  }

  res.send({ response });
});

export default router;
