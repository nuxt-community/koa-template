# Nuxt.js with Koa

> [KoaJS](http://koajs.com/) + [Nuxt.js](https://nuxtjs.org) = :zap:

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init nuxt-community/koa-template <project-name>
cd <project-name> # move to your project
npm install # or yarn install*[see note below]
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

*Note: Due to a bug in yarn's engine version detection code if you are
using a prerelease version of Node (i.e. v7.6.0-rc.1) you will need to either:
  1. Use `npm install`
  2. Run `yarn` with a standard release of Node and then switch back

## Commands

| Command | Description |
|---------|-------------|
| npm run dev | Start KoaJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| npm run build | Build the nuxt.js web application for production. |
| npm start | Start KoaJS server in production. |


## Documentation

- [KoaJS](http://koajs.com/)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses

- [KoaJS license](https://github.com/koajs/koa/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)

## Credits

- [@detrohutt](https://github.com/detrohutt) for making the option of choosing between Koa 1.x and 2.x (PR [#2](https://github.com/nuxt/koa/pull/2))
