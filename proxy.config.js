const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080',
      pathRewrite: {'^/rest' : ''}
    }
  ];

  module.exports = proxy;