import { defineConfig } from 'vitest/config';

// Thresholds are only enforced by `npm run coverage`, so a plain `npm test`
// still reports coverage without failing the run (same split as the old nyc setup).
const thresholds =
  process.env.COVERAGE_THRESHOLDS === 'true' ? { branches: 65, lines: 70, functions: 70, statements: 70 } : undefined;

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.test.ts', 'src/**/*.{spec,test}.ts'],
    sequence: {
      shuffle: true,
    },
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*.ts'],
      reportsDirectory: 'coverage',
      reporter: ['json', 'html', 'text', 'lcov'],
      thresholds,
    },
  },
});
