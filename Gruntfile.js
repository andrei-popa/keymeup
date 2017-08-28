module.exports = function(grunt) {

  grunt.initConfig({

	cssmin: {
	  options: {
	    mergeIntoShorthands: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'css/keymeup.min.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css','node_modules/font-awesome/css/font-awesome.min.css','css/*.css','!css/keymeup.min.css','!css/*.scss']
	    }
	  }
	}

  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
