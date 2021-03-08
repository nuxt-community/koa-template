export default async function (ctx, next) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  ctx.body = 'World!'
}
