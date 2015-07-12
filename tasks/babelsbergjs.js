/*
 * grunt-babelsbergjs
 * 
 *
 * Copyright (c) 2015 Maximilian Grundke
 * Licensed under the MIT license.
 */

'use strict';

var BabelsbergSrcTransform = require("node_modules/babelsbergjs-require/src/src_transform");

module.exports = function(grunt) {

  grunt.registerMultiTask('babelsbergjs', 'Helper for BabelsbergJS for Node.', function() {

    this.files.forEach(function(f) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        
      }
      var content = grunt.file.read(filepath)
      var transformed = new BabelsbergSrcTransform().transform(content);
      var filename = file.dest + path.basename(f, '.bbb') + '.js'
      grunt.file.write(filename, transformed);
    });
  
  });

};
