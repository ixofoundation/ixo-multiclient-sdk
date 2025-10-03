module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': ['ts-jest', { tsconfig: '<rootDir>/__tests__/tsconfig.json' }],
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testTimeout: 24000000,
};
