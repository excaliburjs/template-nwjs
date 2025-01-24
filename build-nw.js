import nwbuild from 'nw-builder';

// read more about nwbuilder here
// https://github.com/nwutils/nw-builder


nwbuild({
    mode: "build",
    flavor: "normal",
    version: "stable",
    srcDir: "./dist/**/**",
    outDir: "./app",
    platform: "win",
    managedManifest: true,
    app: {
        name: "Excalibur + NWJS",
        internalName: "Excalibur + NWJS",
        originalFilename: "Excalibur + NWJS",
        legalCopyright: "Copyright (c) 2025 Your Company Here",
        version: '0.0.0',
        productVersion: '0.0.0',


    }
});

