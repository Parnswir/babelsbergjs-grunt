/*
 * grunt-babelsbergjs
 * 
 *
 * Copyright (c) 2015 Maximilian Grundke
 * Licensed under the MIT license.
 */

'use strict';

var BabelsbergSrcTransform = require("./../node_modules/babelsbergjs-require/src/src_transform.js");

module.exports = function(grunt) {

  grunt.registerMultiTask('babelsbergjs', 'Helper for BabelsbergJS for Node.', function() {

    this.files.forEach(function(f) {
      f.src.forEach(function(filepath) {
        if (!grunt.file.exists(f.cwd + filepath)) {
          grunt.log.warn('Source file "' + f.cwd + filepath + '" not found.');
          
        }
        var content = grunt.file.read(f.cwd + filepath)
        var transformed = new BabelsbergSrcTransform().transform(content);
        var filename = f.dest + filepath.replace(".bbb", ".js");
        grunt.file.write(filename, transformed);
      });
    });
  
  });

};
