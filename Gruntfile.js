module.exports = function(grunt) {
	const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);
    
    const testFolder = './extends/mixins';
    const fs = require('fs');
    const fileBootstrap = 'extends/bootstrap.scss';
    const fileMixins = 'extends/_mixins.scss';

    var textBootstrap = grunt.file.read(fileBootstrap);
    var textMixins = grunt.file.read(fileMixins);

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log('./extends/mixins/' + file);
            
            var nameFile = file.replace('_', '');
            nameFile = nameFile.replace('.scss', '');

            if (textMixins.match('../bootstrap/mixins/' + nameFile)){
                textMixins = textMixins.replace('../bootstrap/mixins/' + nameFile, 'mixins/' + nameFile)
                grunt.file.write(fileMixins, textMixins);
                //console.log(textMixins);
            }

            if (textBootstrap.match('../bootstrap/' + nameFile)){
                textBootstrap = textBootstrap.replace('../bootstrap/' + nameFile, nameFile);
                grunt.file.write(fileBootstrap, textBootstrap);
            }
        });
    })

    //grunt.file.write(fileBootstrap, textBootstrap);
    //grunt.file.write(fileMixins, textMixins);

	grunt.initConfig({
		connect: {
			server: {
				options: {
          hostname: 'localhost',
          port: 3000,
          livereload: true
        }
			}
		},
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {                         
					'bootstrap/css/main.css': 'extends/bootstrap.scss',       
				}
			}
		},
		watch: {
			scripts: {
				files: ['*.html', 'assets/scss/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},
	});
	
	grunt.registerTask('default', ['sass', 'connect', 'watch']);
};