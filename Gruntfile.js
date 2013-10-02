module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-recess');


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			install: {
				options: {
					cleanup: true,
					targetDir: './dist/js/ext'
				}
			}
		},
		clean: ['js', 'styles', './*.html'],
		concat: {
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/js/base.js'
			}
		},
		copy: {
			extras: {
				files: [
					{expand: true, cwd: 'extras/', src: ['**'], dest: 'dist/'}
				]
			},
			'public': {
				files: [
					{expand: true, src: ['public/**'], dest: 'dist/'}
				]
			}
		},
		recess: {
			dist: {
				options: {
					strictPropertyOrder: false
				},
				src: ['src/**/*.less']
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'index.html'
				}
			}
		},
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js'],
			options: {
				bitwise: true,
				browser: true,
				camelcase: true,
				curly: true,
				eqeqeq: true,
				eqnull: true,
				forin: true,
				immed: true,
				indent: 1,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				strict: true,
				undef: true,
				trailing: true,
				unused: true,
				globals: {
					module: true,
					jQuery:true
				}
			}
		},
		less: {
			dev: {
				options: {
					paths: ["src/styles"],
					yuicompress: false
				},
				files: {
					"dist/styles/style.css": "src/styles/style.less"
				}
			},
			prod: {
				options: {
					paths: ["src/styles"],
					yuicompress: true
				},
				files: {
					"dist/styles/style.css": "src/styles/style.less"
				}
			}
		},
		includes: {
			files: {
				src: ['src/**/*.html', '!src/**/partials/*.html'],
				dest: 'dist/',
				flatten: true,
				cwd: '.'
			}
		},
		uglify: {
			dist: {
				files: {
					'js/base.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		watch: {
			include: {
				files: ['src/**/*.html'],
				tasks: ['includes']
			},
			less: {
				files: ['src/**/*.less'],
				tasks: ['recess', 'less:dev']
			},
			javascripts: {
				files: ['src/**/*.js'],
				tasks: ['concat']
			}
		}
	});

	grunt.registerTask('dev', ['includes', 'jshint', 'recess', 'concat', /*'bower',*/ 'less:dev', 'copy:public', 'copy:extras']);
	grunt.registerTask('default', ['jshint', 'recess', 'concat', 'uglify', 'less:prod', 'includes', /*'bower',*/ 'htmlmin', 'copy:public', 'copy:extras']);
};