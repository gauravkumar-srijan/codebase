import { Router } from 'express';
import { logger } from '../utils/logger.utils.js';

const serviceRouter = Router();

serviceRouter.post('/', async (req, res) => {
  logger.info('Cart update extension executed' , req.body);
  res.status(200).json({"message": "success"});
});

export default serviceRouter;
