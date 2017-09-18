export const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      {
        loader: 'eslint-loader',
        options: {fix: true}
      }
    ]
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      'ts-loader',
      {
        loader: 'eslint-loader',
        options: {fix: true}
      }
    ]
  },
  {
    test: /\.styl$/,
    use: ['css-loader','stylus-loader']
  },
  {
    test: /\.pug$/,
    use: ['babel-loader','pug-loader']
  },
  {
    test: /\.css$/,
    use: ['style-loader','css-loader']
  },
  {
    test: /\.svg$/,
    use: [{
      loader: 'url-loader',
      options: {limit: '65000', mimetype: 'image/svg+xml'}
    }]
  },
  {
    test: /\.woff$/,
    use: [{
      loader: 'url-loader',
      options: {limit: '65000', mimetype: 'application/font-woff'}
    }]
  },
  {
    test: /\.woff2$/,
    use: [{
      loader: 'url-loader',
      options: {limit: '65000', mimetype: 'application/font-woff2'}
    }]
  },
  {
    test: /\.[ot]tf$/,
    use: [{
      loader: 'url-loader',
      options: {limit: '65000', mimetype: 'applicaiton/octet-stream'},
    }]
  },
  {
    test: /\.eot$/,
    use: [{
      loader: 'url-loader',
      options: {limit: '65000', mimetype: 'application/vnd.ms-fontobject'},
    }]
  }
];

