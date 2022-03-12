module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json'],
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect'
		}
	},
	env: {
		es6: true,
		node: true
	},
	plugins: ['@typescript-eslint', 'react'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/indent': ['warn', 'tab'],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/triple-slash-reference': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-unresolved': 'off'
	}
};
