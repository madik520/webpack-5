module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-idiomatic-order',
		'stylelint-config-sass-guidelines',
		'stylelint-config-prettier'
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		'comment-no-empty': true,
		'max-nesting-depth': 5,
		'selector-class-pattern': '^[A-Za-z0-9\\-]+$',
		'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class', 'id'] }],
		'shorthand-property-no-redundant-values': null,
		'order/properties-alphabetical-order': null,
		'scss/dollar-variable-colon-newline-after': 'always-multi-line',
		'scss/dollar-variable-first-in-block': [true, { ignore: ['comments', 'imports'] }],
		'scss/double-slash-comment-empty-line-before': 'always',
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
		'scss/selector-nest-combinators': 'always',
		'scss/selector-no-union-class-name': true,
		'scss/no-duplicate-dollar-variables': true,
		'scss/no-duplicate-mixins': true
		// 'scss/no-global-function-names': true
	}
};
