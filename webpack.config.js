/* eslint-disable no-tabs */
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
			'@configs': path.resolve(__dirname, 'src/configs/'),
			'@helpers': path.resolve(__dirname, 'src/helpers/'),
			'@shared': path.resolve(__dirname, 'src/shared/'),
		},
	},
	devServer: {
		open: true,
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
	},
};
