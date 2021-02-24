const esbuild = require('esbuild');
const esbuildConfig = require('../configs/esbuild.config');

// Running the build process
(async () => {
    esbuild.build(esbuildConfig).catch(() => process.exit(1));
})();
