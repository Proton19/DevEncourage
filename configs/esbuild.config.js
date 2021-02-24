module.exports = {
    entryPoints: ['./src/index.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    loader: { '.js': 'jsx' },
    outfile: 'build/out.js',
    define: {
        'process.env.NODE_ENV': JSON.stringify('"production"'),
    },
};
