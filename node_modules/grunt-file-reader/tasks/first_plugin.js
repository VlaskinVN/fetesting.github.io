/*
* grunt-first-plugin
* https://github.com/oscherbak/grunt-first-plugin
*
* Copyright (c) 2016 Oleg Scherbak
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

// Please see the Grunt documentation for more information regarding task
// creation: http://gruntjs.com/creating-tasks

var getIndexFile = function (src) {
    return grunt.file.read(src);
};

var log = grunt.log.write;

grunt.registerMultiTask('file_reader', 'Inroduction plugin', function() {
    // var indexFileSrc = this.data.source;

    grunt.file.write('index.jsx', '<oleg></oleg>');
    // grunt.log.write(getIndexFile(indexFileSrc));
    // var keys = Object.keys(this);

    // keys.forEach(function (key) {
    //     log(key + '\n');
    // });

    log(this.data.dest[0]);

    // Merge task-specific and/or target-specific options with these defaults.
    // var options = this.options({
    //   punctuation: '.',
    //   separator: ', '
    // });

    // // Iterate over all specified file groups.
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
    });

};
