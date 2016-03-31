module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass : {
	      dist : {
	        options : { style : 'expanded', sourcemap: 'none' },
	        files : {
			        'assets/stylesheets/css/main.css' : 'assets/stylesheets/_sass/main.scss'
	        }
	      },
	      min : {
	        options : { style : 'compressed', sourcemap: 'none' },
	        files : {
	        		'assets/stylesheets/css/main.min.css' : 'assets/stylesheets/_sass/main.scss',
	        }
	      }
	    },

		uglify: {
			target: {
				files: {
					'assets/javascripts/js/main.min.js': 'assets/javascripts/_js/main.js'
				}
			}
		},

		postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'assets/stylesheets/css/*.css'
            }
        },

		watch: {

			options: {
				livereload: true
			},
			css: {
				files: 'assets/stylesheets/_sass/*.scss',
				tasks: ['sass']
			},
			js: {
				files: 'assets/javascripts/_js/*.js',
				tasks: ['uglify']
			},
			html: {
				files: '*.html'
			}

		},

		htmlmin: {
		    dist: {
		      options: {
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {
		        'index.min.html': 'index.html'
		      }
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['sass', 'uglify']);
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('s', ['sass']);
	grunt.registerTask('h', ['htmlmin']);
	grunt.registerTask('p', ['postcss:dist']);
	grunt.registerTask('d', ['sass', 'uglify', 'postcss:dist']);
};