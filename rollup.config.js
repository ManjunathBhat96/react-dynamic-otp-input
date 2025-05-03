import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.tsx',
    output: [
      { file: 'dist/index.js', format: 'cjs', sourcemap: true },
      { file: 'dist/index.mjs', format: 'esm', sourcemap: true }
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript()
    ]
  },
  {
    input: 'src/index.tsx',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts.default()]
  }
];
