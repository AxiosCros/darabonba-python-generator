'use strict';

const defaultConfig = require('../common/config');

module.exports = {
  ...defaultConfig,
  indent: '    ',
  ext: '.py',
  keywords: [
    'default',
    'list',
    'and',
    'as',
    'assert',
    'break',
    'class',
    'continue',
    'def',
    'del',
    'elif',
    'else',
    'except',
    'finally',
    'for',
    'from',
    'False',
    'global',
    'if',
    'import',
    'in',
    'is',
    'lambda',
    'nonlocal',
    'not',
    'None',
    'or',
    'pass',
    'raise',
    'return',
    'try',
    'True',
    'while',
    'with',
    'yield'
  ],
  symbolMap: {
    'ASSIGN': '=',
    'EQ': '==',
    'NOT': 'NOT',
    'AND': 'and',
    'OR': 'or',
    'PLUS': '+',
    'SUB': '-',
    'MULTI': '*',
    'DIV': '/',
    'POWER': '^',
    'GREATER': '>',
    'GREATER_EQ': '>=',
    'LESS': '<',
    'LESS_EQ': '<=',
    'REVERSE': 'not ',
    'CONCAT': '+'
  },
  typeMap: {
    'string': 'str',
    'boolean': 'bool',
    'number': 'integer',
    'integer': 'integer',
    'object': 'dict',
    'map': 'dict',
    'bytes': 'bytes',
    'long': 'integer'
  },
  exceptionMap: {
    'BASE': 'Tea.exceptions.TeaException',
  },
  model: {
    dir: 'models',
    mode: 'single_file',
    include: [
    ],
  },
  client: {
    defaultName: 'client',
    include: []
  },
  tea: {
    core: {
      name: 'Tea.core.TeaCore',
      doAction: 'do_action',
      allowRetry: 'allow_retry',
      sleep: 'sleep',
      getBackoffTime: 'get_backoff_time',
      isRetryable: 'is_retryable',
      toModel: 'toModel',
      merge: 'merge'
    },
    model: { name: 'Tea.model.TeaModel' },
    converter: { name: 'Converter' },
    response: { name: 'Tea.response.TeaResponse' },
    request: { name: 'Tea.request.TeaRequest' },
    exception: { name: 'Tea.exceptions.TeaException' },
    error: { name: 'Tea.exceptions.TeaException' },
    exceptionUnretryable: { name: 'Tea.exceptions.UnretryableException' },
  }
};