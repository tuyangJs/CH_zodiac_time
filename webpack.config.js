import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('./', 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true, // 启用压缩
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 删除所有 console.*
          },
        },
      }),
    ],
  },
  mode: 'production', // 确保在生产模式下启用压缩
};
