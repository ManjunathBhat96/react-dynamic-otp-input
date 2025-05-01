import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default[
    {
        input:'src/index.tsx',
        output:[
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/index.mjs",
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            commonjs(),
            PeerDepsExternalPlugin(),
            resolve(),
            typescript({
                tsconfig: "./tsconfig.json",
            }),
            terser(),
            // nodeResolve({ browser: true }),
            // babel({
            //     babelHelpers: 'bundled',
            //     exclude: 'node_modules/**',
            //     presets: ['@babel/preset-env']
            // })
        ],
        external: ['react', 'react-dom', ],

           
    },
    {
        input:'src/index.tsx',
        output:[
            {
                file: "dist/index.d.ts"
            }
        ],
        plugins: [
            dts.default()
        ],
    }
]