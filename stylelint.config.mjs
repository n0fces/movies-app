/** @type {import('stylelint').Config} */
export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-order'],
	rules: {
		'selector-class-pattern': null,
		'scss/dollar-variable-pattern': '^[a-z][a-zA-Z0-9]+$',
		'declaration-block-no-redundant-longhand-properties': null,
		'declaration-no-important': true,
		'declaration-empty-line-before': null,
	},
};
