module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        src: ["src/index.js"],
        dest: "./bin/",
        rename: function(dest, src) {
          grunt.log.write("\n" + src + "\n");
          return "./bin/www";
        }
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts", "!src/_all.d.ts"],
          dest: "."
        }],
        options: {
          module: "commonjs",
          noLib: true,
          target: "es6",
          sourceMap: false
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/\*\*/\*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["js/src/\*\*/\*.ts", "src/\*\*/\*.ts"],
        tasks: ["ts", "tslint"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", [
    "ts",
    "tslint",
    "copy"
  ]);

};