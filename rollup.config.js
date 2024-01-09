import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json'

export default {
    input: './autocomplete.ts',
    output: [
        {
            file: pkg.main,
            format: 'iife',
            sourcemap: true,
            name: 'window.kraaden_autocomplete'
        }, {
            file: pkg.main.replace('.js', '.min.js'),
            format: 'iife',
            sourcemap: true,
            name: 'window.kraaden_autocomplete',
            plugins: [
                terser({
                    compress: true,
                    mangle: true,
                    format: {
                        comments: /Copyright/ig
                    }
                })
            ]
        }
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        sourceMaps()
    ]
}
