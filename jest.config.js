module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/__tests__/**/*.test.js', '**/tests/**/*.test.ts'],
  collectCoverage: true,
  coverageThreshold: {
    global: { lines: 50, branches: 40, functions: 50, statements: 50 },
  },
};