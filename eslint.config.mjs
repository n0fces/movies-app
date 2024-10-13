// @ts-check
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

/*
extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
],
*/
// также в конфигурации обозначены некоторые правила из jsx-a11y
// * более подробно про базовую конфигурацию можно посмотреть в
// * node_modules/eslint-config-next/index.js
const nextCoreWebVitalsConfig = fixupConfigRules([
	...compat.extends('next/core-web-vitals'),
]);

// иначе будет такая ошибка
// ConfigError: Config "jsx-a11y/recommended": Key "plugins": Cannot redefine plugin "jsx-a11y".
const { plugins, ...jsxA11yConfig } = jsxA11y.flatConfigs.strict;

export default tseslint.config(
	{
		ignores: [
			'.next/*',
			'.fttemplates/**/*',
			'node_modules/**/*',
			'.env*',
			'.gitignore',
			'*.config.*'
		],
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		extends: [
			...nextCoreWebVitalsConfig,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
			jsxA11yConfig,
			eslintConfigPrettier,
		],
	},
);
