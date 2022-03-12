module.exports = {
	plugins: [
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					grid: 'autoplace',
					flexbox: 'no-2009'
				},
				stage: 3
			}
		]
	],
	ident: 'postcss'
};
