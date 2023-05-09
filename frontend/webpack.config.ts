const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const webpackConfig = () => ({
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /build/,
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							additionalData: `@import 'src/styles/variables';`,
						},
					},
				],
			},
		],
	},
	devServer: {
		port: 9099,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}',
			},
		}),
	],
});

export default webpackConfig;
