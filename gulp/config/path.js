import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./assets/dist`;
const srcFolder = `./src`;
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `./src/*.html`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,      
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}