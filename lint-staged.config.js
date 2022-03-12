const getPrettierCmd = (/** @type {string[]} */ filenames) => `prettier --write ${filenames.join(' ')}`;

module.exports = {
	'**/*.{js?(x),ts?(x)}': (/** @type {string[]} */ filenames) => {
		return [
			`eslint --fix ${filenames.length > 10 ? '.' : filenames.join(' ')} --max-warnings=0`,
			getPrettierCmd(filenames)
		];
	},
	'src/**/*.css': (/** @type {string[]} */ filenames) => {
		return [getPrettierCmd(filenames)];
	},
	'src/**/*.{sa,sc}ss': (/** @type {string[]} */ filenames) => {
		return [`stylelint ${filenames.length > 10 ? '.' : filenames.join(' ')}`, getPrettierCmd(filenames)];
	}
};
