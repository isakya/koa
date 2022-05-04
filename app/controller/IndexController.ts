import { Context } from 'koa'
import { logger } from '../logger'
class IndexController {
  async index(ctx: Context) {
    logger.level = 'info'
    logger.info('msg','msg')
    ctx.body = [1, 2, 3, 4, 5, 6,7]
  }
}
export default new IndexController