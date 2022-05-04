import { Context, Next } from 'koa'
import { access } from '../logger'
function AccessLogMiddleware(ctx:Context, next:Next) {
  const logStr = `path:${ctx.path} | method: ${ctx.method} | ua:${ctx.headers['user-agent']}`
  access.info(logStr)
  return next()
}

export default AccessLogMiddleware