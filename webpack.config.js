import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  entry: './src/index.ts',
  
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),  // 使用 __dirname 来确保路径正确
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      CalendarCode: path.resolve( './dist/CalendarCode'),
    },
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
    minimize: false,  // 启用压缩
    usedExports: false,  // 禁用未使用导出的优化
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,    // 去除注释
          },
          compress: {
            // drop_console: true,  // 删除 console.* 语句
            passes: 2,
          },
        },
      }),
    ],
  },
  target: 'node',
  mode: 'production',  // 确保在生产模式下启用压缩
};
