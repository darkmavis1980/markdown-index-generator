/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  randomize: true,
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
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      }
    ]
  }
};