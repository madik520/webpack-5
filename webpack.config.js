const  resolve  = require('path').resolve;
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const packageJSON = require('./package.json');

const isDev = process.env.NODE_ENV !== 'production';

const HotModuleReplacementInstance = new HotModuleReplacementPlugin();

const HtmlWebpackPluginInstance = new HtmlWebpackPlugin({
	favicon: resolve(__dirname, './public/favicon.ico'),
	filename: 'index.html',
	inject: true,
	title: 'Webpack 5',
	meta: {
		description: packageJSON.description,
		keywords: Array.isArray(packageJSON.keywords) && packageJSON.keywords.join(','),
		robots: 'noindex, nofollow',
		viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	},
	minify: {
		collapseWhitespace: true,
		collapseInlineTagWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		removeComments: true,
		useShortDoctype: true
	},
	template: resolve(__dirname, './src/html/index.html'),
	version: packageJSON.version
});

const MiniCssExtractPluginInstance = new MiniCssExtractPlugin({
	filename: '[name].[fullhash:8].css'
});

const stats = {
	colors: {
		green: '\u001b[32m'
	},
	assets: false,
	modules: false,
	timings: false,
	version: false,
	entrypoints: false,
	warnings: true
};

const devServer = {
	historyApiFallback: true,
	static: {
		directory: resolve(__dirname, 'src'),
	},
	hot: true,
	open: true,
	port: 3002,
	host: 'localhost',
	client: {
		overlay: {
			warnings: false
		}
	}
};

const config = {
	mode: isDev ? 'development' : 'production',

	devtool: 'source-map',

	devServer,

	bail: true,

	stats,

	entry: {
		main: resolve('./src/index.js')
	},

	output: {
		path: resolve(__dirname, './build'),
		publicPath: `${isDev ? '' : '.'}/`,
		filename: `js/[name]${isDev ? '' : '.[contenthash]'}.js`,
		assetModuleFilename: `assets/[name]${isDev ? '' : '.[fullhash:8]'}[ext]`
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				use: [
					{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 1, sourceMap: isDev } },
					{ loader: 'postcss-loader', options: { sourceMap: isDev } }
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /\.module\.(sa|sc|c)ss$/,
				use: [
					{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 3, sourceMap: isDev } },
					{ loader: 'postcss-loader', options: { sourceMap: isDev } },
					{ loader: 'resolve-url-loader', options: { sourceMap: isDev, root: resolve(__dirname, 'src') } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				include: resolve(__dirname, 'src'),
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8192
					}
				},
				generator: {
					filename: 'assets/images/[name].[hash:8][ext]'
				}
			},
			{
				test: /\.(ttf|otf|woff(2)?|eot)$/,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						maxSize: 8192
					}
				},
				generator: {
					filename: 'assets/fonts/[name].[hash:8][ext]'
				}
			},
		]
	},

	performance: {
		maxEntrypointSize: 300000,
		hints: !isDev ? 'warning' : false
	},

	optimization: {
		minimize: !isDev,
		minimizer: [
			'...',
			new TerserPlugin({
				parallel: true
			}),
			new CssMinimizerPlugin()
		],
		runtimeChunk: 'single'
	},

	resolve: {
		extensions: ['.js', '.css', '.scss', '.sass'],
		fallback: { process: require.resolve('process/browser') }
	},

	plugins: [
		HtmlWebpackPluginInstance,
		MiniCssExtractPluginInstance,
		HotModuleReplacementInstance,
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			}
		})
	]
};

module.exports = config;