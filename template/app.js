import Koa from 'koa'
import Nuxt from 'nuxt'

const app = {{#if_eq koaVersion '2.x'}}new {{/if_eq}}Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('./nuxt.config.js')
  config.dev = !(app.env === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Build in development
  if (config.dev) {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  {{#if_eq koaVersion '1.x'}}
  app.use(function * () {
    this.status = 200 // koa defaults to 404 when it sees that status is unset
    yield nuxt.render(this.req, this.res)
  })
  {{/if_eq}}
  {{#if_eq koaVersion '2.x'}}
  app.use(async (ctx, next) => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    await nuxt.render(ctx.req, ctx.res)
  })
  {{/if_eq}}

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
