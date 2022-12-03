/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: [
    "<rootDir>/test/**/*.ts?(x)",
    "<rootDir>/src/**/?(*.)+(spec|test).ts?(x)"
  ],
  coverageReporters: [
    "json",
    "html",
    "text"
  ],
};