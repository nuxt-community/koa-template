// TODO: remove when using Nitro
import Koa from 'koa'
import Router from '@koa/router'

// Require API routes
import hello from './hello'

// Create express instance
const app = new Koa()
const router = new Router()

// Import API Routes
router.get('/hello', hello)

// Export Koa app
app
  .use(router.routes())
  .use(router.allowedMethods())

export default app.callback()
