var Koa = require('koa')
var app = {{#if_eq koaVersion '2.x'}}new {{/if_eq}}Koa()
var Nuxt = require('nuxt')

var config = require('./nuxt.config.js')
config.dev = !(app.env === 'production')

var nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
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

app.listen(3000)
