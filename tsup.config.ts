import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  minify: false,
  target: 'esnext',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' };
  }
});
