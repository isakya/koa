import config from '../config'
import log4js from "log4js";
log4js.configure(config.log);

const logger = log4js.getLogger();
const access = log4js.getLogger('access')

export { 
  logger,
  access
}