const fs = require('fs')
const path = require('path')

const _r = (..._) => path.resolve(__dirname, '../', ..._)
const _removeExtraFilename = filename => filename.replace(/\.([^.]*)$/, '')

const entry = fs
    .readdirSync(_r('packages'))
    .map(p => ({ filename: p, fullpath: _r('packages', p) }))
    .reduce(
        (map, { fullpath, filename }) => ({
            ...map,
            [_removeExtraFilename(filename)]: fullpath
        }),
        Object.create(null)
    )

module.exports = {
    entry,
    output: {
        filename: 'lib_[name].js',
        path: _r('dist'),
        library: {
            name: 'Lib_[name]',
            type: 'umd'
        }
    },
    devtool: false,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.d.ts'],
    }
}