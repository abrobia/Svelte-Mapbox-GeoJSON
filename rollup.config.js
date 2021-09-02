import svelte from 'rollup-plugin-svelte';
import json from "@rollup/plugin-json";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
//// import json from 'rollup-plugin-json';
//import { uglify } from "rollup-plugin-uglify";
const production = !process.env.ROLLUP_WATCH;
export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        // uglify(),
        json({
            // All JSON files will be parsed by default,
            // but you can also specifically include/exclude files
            // include: 'src/**',
            exclude: 'node_modules/**',
            // for tree-shaking, properties will be declared as
            // variables, using either `var` or `const`
            preferConst: true, // Default: false
            // specify indentation for the generated default export —
            // defaults to '\t'
            indent: '  ',
            // ignores indent and generates the smallest code
            compact: true, // Default: false
            // generate a named export for every property of the JSON object
            namedExports: true // Default: true
        }),
        svelte({
            /*
            compilerOptions: {
                dev: !production,
                css: css => {
                    css.write('public/build/bundle.css');
                },
            },
*/
            emitCss: true

        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        postcss({
            extract: true,
            minimize: true,
            use: [
                ['sass', {
                    includePaths: [
                        './theme',
                        './node_modules'
                    ]
                }]
            ]
        }),
        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),
        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),
        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;
    return {
        writeBundle() {
            if (!started) {
                started = true;
                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}