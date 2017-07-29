module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    },
    ifBabel: function(options) {
      var nodeMajMin = process.version.match(/v(\d*).(\d*)./)
      var semMaj = Number(nodeMajMin[1])
      var semMin = Number(nodeMajMin[2])
      var nodeHasAsync = (semMaj === 7 && semMin >= 6) || semMaj >= 8
      return nodeHasAsync ? '' : options.fn(this)
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
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
