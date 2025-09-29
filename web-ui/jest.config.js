/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/tests/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
};