import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'esnext',
  external: ['react', 'react/jsx-runtime'],
  minify: !options.watch,
  banner: { js: '"use client";' },
}))
