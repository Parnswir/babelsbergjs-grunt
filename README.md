# grunt-babelsbergjs

Grunt-babelsbergjs is a helper for BabelsbergJS on Node. It uses [babelsbergjs-require](https://github.com/babelsbergjs/babelsbergjs-require) to transform .bbb files to plain JavaScript.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-babelsbergjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-babelsbergjs');
```

## The "babelsbergjs" task

### Overview
In your project's Gruntfile, add a section named `babelsbergjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babelsbergjs: {
      build: {
        cwd: 'src/',
        src: '**/*.bbb',
        dest: 'dist/'
      }
    }
  });
```

### Using the task

```shell
grunt babelsbergjs
```

Or use it in another task:

```js
grunt.registerTask('some_name', ['some_other_task', 'babelsbergjs']);
```
