import 'dotenv/config';
import { readConfiguration } from '../utils/config.utils.js';

/**
 * Configure Middleware. Example only. Adapt on your own
 */

export const httpMiddlewareOptions = {
  host: `https://api.${process.env.CTP_REGION}.commercetools.com`,
};
