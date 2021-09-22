module.exports = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests?__/.*|(\\.|/)(tests|spec))\\.tsx?$',
    preset: 'ts-jest',
    testMatch: null,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}