/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^sink-npm$': '<rootDir>/src/index.ts',
    '^sink-npm/_shims/(.*)$': '<rootDir>/src/_shims/$1.node',
    '^sink-npm/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/', '<rootDir>/deno_tests/'],
};
