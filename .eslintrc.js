module.exports = {
    extends: ['sandricoprovo', 'plugin:import/typescript'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
};
