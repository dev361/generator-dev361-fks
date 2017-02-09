/*************************************
 /* Paths definitions
 /*************************************/
var ROOT= __dirname+'/';
var srcPath= ROOT+'assets/';
var destPath= ROOT+'build/';

var config = {
    frontBuilder : {
        js: [
            {src: srcPath+'js/vendors.js', dest: destPath+'js/vendors.js'},
            {src: [srcPath+'js/scripts/script1.js', srcPath+'js/scripts/script2.js'], dest: destPath+'js/scripts.js' }
        ],
        css: [
            {src: srcPath+'scss/main.scss', dest: destPath+'css/main.css'}
        ],
        copy: [
            {src: srcPath + 'fonts/**/*', dest: destPath + 'fonts/'}
        ],
        img: [
            {src: srcPath + 'img/**/*', dest: destPath + 'img/'}
        ],
        cleanBeforeBuild: [
            {destroy: destPath}
        ],
        watch: [
            {filesToWatch: srcPath+'scss/**/*.scss', task: ['sass']},
            {filesToWatch: srcPath+'js/scripts/*.js', task: ['js']}
        ]
    }
}

module.exports = config;