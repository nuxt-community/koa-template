module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    },
    koaSemver: function(answer) {
      return answer === '1.x' ? '^1.2.5' : '^2.0.0'
    },
    ifBabel: function(options) {
      var needBabel = this.koaVersion === '2.x' && !this.nodeHasAsync
      return needBabel ? options.fn(this) : ''
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    koaVersion: {
      'type': 'list',
      'required': true,
      'message': 'Koa version',
      'choices': ['1.x', '2.x'],
      'default': 0
    },
    nodeHasAsync: {
      'when': 'koaVersion == "2.x"',
      'type': 'confirm',
      'message': 'Are you using node >= v7.6.0?',
      'default': false
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
