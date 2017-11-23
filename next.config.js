const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
         {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    )
    return config
  }
}