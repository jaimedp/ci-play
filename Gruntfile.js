module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['web/src/styles/**/*.less'],
                tasks: ['less:dev']
            },
            js: {
                files: ['web/src/scripts/**/*.js'],
                tasks: ['concat', 'include']
            },
            templates: {
                files: ['web/src/templates/**/*.html'],
                tasks: ['templates']
            },
            copy: {
                files: ['web/src/fonts/**/*'],
                tasks: ['copy']
            },
            imagemin: {
                files: ['web/src/img/**/*'],
                tasks: ['imagemin:dev']
            }
        },
        copy: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'web/src/fonts/',
                    src: ['**'],
                    dest: 'web/public/fonts/'
                }, {
                    expand: true,
                    cwd: 'web/src/img/',
                    src: ['**/*.{svg,gif,ico}'],
                    dest: 'web/public/img/'
                }, {
                    expand: true,
                    cwd: 'web/src/swf/',
                    src: ['**/*.swf'],
                    dest: 'web/public/swf/'
                }, {
                    expand: true,
                    cwd: 'web/src/scripts/vendor/',
                    src: ['jquery/jquery.js', 'jquery/jquery.min.js', 'modernizr.min.js'],
                    dest: 'web/public/js/vendor/'
                }]
            }
        },
        less: {
            dev: {
                files: {
                    'web/public/css/login.css': 'web/src/styles/login.less',
                    'web/public/css/student.css': 'web/src/styles/student.less',
                    'web/public/css/admin.css': 'web/src/styles/admin.less'
                }
            },
            production: {
                options: {
                    yuicompress: false // Off until calc() bug is addressed.  https://github.com/yui/yuicompressor/issues/59
                },
                files: {
                    'web/public/css/login.min.css': 'web/src/styles/login.less',
                    'web/public/css/setup.min.css': 'web/src/styles/setup.less',
                    'web/public/css/game.min.css': 'web/src/styles/game.less',
                    'web/public/css/admin.min.css': 'web/src/styles/admin.less'
                }
            }
        },
        templates: {
            compile: {
                options: {
                    namespace: 'upenn',
                    prettify: false
                },
                files: {
                    'web/src/scripts/login/templates.js': ['web/src/templates/common/**/*.html', 'web/src/templates/login/**/*.html'],
                    'web/src/scripts/setup/templates.js': ['web/src/templates/common/**/*.html', 'web/src/templates/setup/**/*.html'],
                    'web/src/scripts/game/templates.js': ['web/src/templates/common/**/*.html', 'web/src/templates/game/**/*.html'],
                    'web/src/scripts/admin/templates.js': ['web/src/templates/common/**/*.html', 'web/src/templates/admin/**/*.html']
                }
            }
        },
        scripts: {
            loginlibs: [
                'web/src/scripts/vendor/modernizr.js',
                'web/src/scripts/vendor/jquery/jquery.js',
                'web/src/scripts/vendor/lodash/lodash.js',
                'web/src/scripts/vendor/forio/lodash-extensions.js',
                'web/src/scripts/vendor/backbone.js',
                'web/src/scripts/vendor/forio/backbone.calculated.js',
                'web/src/scripts/vendor/forio/jquery.validate.js',
                'web/src/scripts/vendor/forio/browser-check.js'
            ],
            libs: [
                'web/src/scripts/vendor/jquery/jquery.js',
                'web/src/scripts/vendor/split.js',
                'web/src/scripts/vendor/moment.js',
                'web/src/scripts/vendor/lodash/lodash.js',
                'web/src/scripts/vendor/forio/lodash-extensions.js',
                'web/src/scripts/vendor/backbone.js',
                'web/src/scripts/vendor/forio/backbone.calculated.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-transition.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-modal.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-carousel.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-tooltip.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-popover.js',
                'web/src/scripts/vendor/bootstrap/bootstrap-typeahead.js',
                'web/src/scripts/vendor/highcharts.js',
                'web/src/scripts/vendor/highcharts-more.js',
                'web/src/scripts/vendor/jquery-ui-1.10.2.custom.js',
                'web/src/scripts/vendor/jquery-ui.touch-punch.js',
                'web/src/scripts/vendor/jquery.hover-intent.js',
                'web/src/scripts/vendor/forio/browser-check.js',
                'web/src/scripts/vendor/intro.js'
            ],
            login: [
                'web/src/scripts/login/**/templates.js',
                'web/src/scripts/common/models/model.js',
                'web/src/scripts/common/models/loading-model.js',
                'web/src/scripts/common/views/view.js',
                'web/src/scripts/common/views/loading-view.js',
                'web/src/scripts/common/views/message-view.js',
                'web/src/scripts/login/**/*.js',
                'web/src/scripts/apps/app.js',
                'web/src/scripts/apps/login-app.js',
                'web/src/scripts/main.js'
            ],
            index: [
                'web/src/scripts/highcharts-defaults.js',
                'web/src/scripts/resources/**/*.js',
                'web/src/scripts/common/models/model.js',
                'web/src/scripts/common/models/data-model.js',
                'web/src/scripts/common/models/run-model.js',
                'web/src/scripts/common/models/**/*.js',
                'web/src/scripts/common/collections/collection.js',
                'web/src/scripts/common/collections/**/*.js',
                'web/src/scripts/common/view-models/view-model.js',
                'web/src/scripts/common/view-models/**/*.js',
                'web/src/scripts/common/views/view.js',
                'web/src/scripts/common/views/components/*.js',
                'web/src/scripts/common/views/**/*.js',
                'web/src/scripts/common/routers/router.js',
                'web/src/scripts/common/routers/**/*.js',
                'web/src/scripts/common/**/*.js',
                'web/src/scripts/apps/app.js'
            ],
            setup: [
                'web/src/scripts/vendor/jquery.file-upload.js',
                'web/src/scripts/setup/**/templates.js',
                '<%= scripts.index %>',
                'web/src/scripts/setup/views/steps/setup-base-step-view.js',
                'web/src/scripts/setup/**/*.js',
                'web/src/scripts/apps/setup-app.js',
                'web/src/scripts/main.js'
            ],
            game: [
                'web/src/scripts/game/**/templates.js',
                '<%= scripts.index %>',
                'web/src/scripts/game/models/**/*.js',
                'web/src/scripts/game/collections/**/*.js',
                'web/src/scripts/game/view-models/game-view-model.js',
                'web/src/scripts/game/view-models/**/*.js',
                'web/src/scripts/game/views/abstract-phase-view.js',
                'web/src/scripts/game/views/abstract-*.js',
                'web/src/scripts/game/views/survey/abstract-question-view.js',
                'web/src/scripts/game/views/components/abstract-chart-view.js',
                'web/src/scripts/game/views/components/**/*.js',
                'web/src/scripts/game/views/coaching/time-allotment/abstract-time-allotment-chart-view.js',
                'web/src/scripts/game/views/coaching/time-allotment/abstract-time-allotment-bar-chart-view.js',
                'web/src/scripts/game/**/*.js',
                'web/src/scripts/apps/game-app.js',
                'web/src/scripts/main.js'
            ],
            admin: [
                'web/src/scripts/admin/**/templates.js',
                '<%= scripts.index %>',
                'web/src/scripts/admin/models/**/*.js',
                'web/src/scripts/admin/collections/**/*.js',
                'web/src/scripts/admin/views/view.js',
                'web/src/scripts/admin/views/**/abstract-*.js',
                'web/src/scripts/admin/**/*.js',
                'web/src/scripts/apps/admin-app.js',
                'web/src/scripts/main.js'
            ]
        },
        include: {
            login: {
                src: ['<%= scripts.loginlibs %>', '<%= scripts.login %>'],
                dest: 'web/include/login/scripts.html'
            },
            setup: {
                src: ['<%= scripts.libs %>', '<%= scripts.setup %>'],
                dest: 'web/include/setup/scripts.html'
            },
            game: {
                src: ['<%= scripts.libs %>', '<%= scripts.game %>'],
                dest: 'web/include/game/scripts.html'
            },
            admin: {
                src: ['<%= scripts.libs %>', '<%= scripts.admin %>'],
                dest: 'web/include/admin/scripts.html'
            }
        },
        concat: {
            loginlibs: {
                src: '<%= scripts.loginlibs %>',
                dest: 'build/loginlibs.js'
            },
            libs: {
                src: '<%= scripts.libs %>',
                dest: 'build/libs.js'
            },
            login: {
                src: ['web/src/scripts/closure-header.js', '<%= scripts.login %>', 'web/src/scripts/closure-footer.js'],
                dest: 'build/login.js'
            },
            setup: {
                src: ['web/src/scripts/closure-header.js', '<%= scripts.setup %>', 'web/src/scripts/closure-footer.js'],
                dest: 'build/setup.js'
            },
            game: {
                src: ['web/src/scripts/closure-header.js', '<%= scripts.game %>', 'web/src/scripts/closure-footer.js'],
                dest: 'build/game.js'
            },
            admin: {
                src: ['web/src/scripts/closure-header.js', '<%= scripts.admin %>', 'web/src/scripts/closure-footer.js'],
                dest: 'build/admin.js'
            }
        },
        uglify: {
            options: {
                sourceMap: function (fileName) {
                    return fileName.replace(/\.js$/, '.map');
                },
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            production: {
                files: {
                    'web/public/js/login.min.js': ['build/loginlibs.js', 'build/login.js'],
                    'web/public/js/setup.min.js': ['build/libs.js', 'build/setup.js'],
                    'web/public/js/game.min.js': ['build/libs.js', 'build/game.js'],
                    'web/public/js/admin.min.js': ['build/libs.js', 'build/admin.js']
                }
            }
        },
        imagemin: {
            dev: {
                options: {
                    optimizationLevel: 0
                },
                files: [{
                    expand: true,
                    cwd: 'web/src/img/',
                    src: ['**/*.{jpg,jpeg,png}'],
                    dest: 'web/public/img/'
                }]
            },
            production: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'web/src/img/',
                    src: ['**/*.{jpg,jpeg,png}'],
                    dest: 'web/public/img/'
                }]
            }
        },

        deploy: {
            production: {
                files: 'web/*',
            },

            qa: {
                files: 'web/*',
            }
        },

        login: {
            options: {
                user: 'jdp_upload',
                password: 'upload'
            },

            files: 'web/*'
        }
    });

    grunt.registerMultiTask('deploy', 'deploy the sim to a remote host', function () {
debugger;
        // presedence of options is: -> package.json, Gruntfile.js, defaults
        var shell = require('shelljs');
        var _ = require('lodash');
        var pkg = grunt.config('pkg') || {};
        var deployment = pkg && pkg.deployment && pkg.deployment[this.target] || {};
        var options = _.extend(this.options({ host: 'http://forio.com' }), deployment);
        var modifier = options.modifier || '';
        var uploadPath = grunt.template.process('<%= pkg.client %>/<%= pkg.name %><%= modifier %>', { data: { pkg: pkg, modifier: modifier }});
        var uploadPost = [options.host, 'simulate/api/file', uploadPath, 'site.zip'].join('/');
        var files = this.data.files || './*';
        var dir = /\/\*$/i.test(files) ? files.replace(/\/\*$/i, '') : files;

        shell.pushd('.');
        shell.cd(dir);
        shell.exec('zip -rdgq site.zip * -x */.DS_Store cookies.txt *-config.json *-config-alt.json uplast package.json README.md Gruntfile.js grunt.js CakeFile file *-sublime-project *-sublime-workspace .gitignore /src/templates/* /src/styles/* /docs/* /node_modules/* /tests/*')
        grunt.log.writeln('uploading to simulate at url: ' + uploadPost);
        shell.exec('curl -L -c ../cookies.txt -b ../cookies.txt -F content=@site.zip -Fmethod=PUT -Funzip=true "' + uploadPost + '"');
        shell.exec('rm site.zip');
        shell.popd();
        shell.exec('rm cookies.txt');
        grunt.log.writeln('deploy!!');
    });

    grunt.registerMultiTask('login', 'log into simulate', function () {
        
        var shell = require('shelljs');
        var _ = require('lodash');

        var pkg = grunt.config('pkg');
        var deployment = pkg && pkg.deployment && pkg.deployment.production || {};
        var options = _.extend(this.options({ host: 'http://forio.com' }), deployment);

        var modifier = options.modifier || '';
        var loginPath = grunt.template.process('simulate/api/authentication/<%= pkg.client %>/<%= pkg.name %><%= modifier %>');
        var url = [options.host, loginPath].join('/');
        var params = ['user_action=login', 'email=' + options.user, 'password=' + options.password].join('&');
        var loginPost = [url, '?method=POST&', params].join('');
        shell.exec('curl -L -s -c cookies.txt -b cookies.txt "' + loginPost +'"');
    });

    grunt.registerMultiTask('templates', 'Compiles underscore templates', function () {
        var _ = require('lodash');
        var options = this.options({
            separator: grunt.util.linefeed,
            templateSettings: {},
            templateNamespace: 'tmpl'
        });

        function getNamespace(ns) {
            var output = [];
            var curPath = 'App';
            if (ns !== 'App') {
                var nsParts = ns.split('.');
                nsParts.forEach(function(curPart, index) {
                    if (curPart !== 'App') {
                        curPath += '[' + JSON.stringify(curPart) + ']';
                        output.push(curPath + ' = ' + curPath + ' || {};');
                    }
                });
            }

            return {
                namespace: curPath,
                declaration: output.join('\n')
            };
        }

        this.files.forEach(function (f) {
            var namespaces = [];
            var output = f.src.filter(function (path) {
                if (!grunt.file.exists(path)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (path) {
                var src = grunt.file.read(path);
                var parts = path.match(/.+\/(?:template|tmpl)(?:s)?\/(.+).html/i)[1].split('/');
                var ns = _.initial(parts).join('.').replace(/(-.)/g, function () {
                    return arguments[0].substring(1).toUpperCase();
                });
                var name = _.last(parts).replace(/(-.)/g, function () {
                    return arguments[0].substring(1).toUpperCase();
                });
                var nsInfo = getNamespace([options.templateNamespace, ns].join('.'));
                var compiled;

                try {
                    compiled = _.template(src, false, options.templateSettings).source;
                } catch (e) {
                    grunt.log.error(e);
                    grunt.fail.warn('_.template failed to compile in file "' + filepath + '"');
                }

                if (options.prettify) {
                    compiled = compiled.replace(new RegExp('\n', 'g'), '');
                }

                namespaces = [].concat(namespaces, nsInfo.declaration.split('\n'));

                return nsInfo.namespace + '["' + name + '"] = ' + compiled + ';';
            });

            if (output.length < 1) {
                grunt.log.warn('Destination not written because compiled files were empty.');
            } else {
                if (options.templateNamespace !== false) {
                    output.unshift(_.uniq(namespaces).join('\n'));
                }

                output.unshift('(function (App, undefined) {');
                output.push('})( this["' + options.namespace + '"]);');

                grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });

    });

    grunt.registerMultiTask('include', 'Inserts all required script tags into the html at a special marked insertion point', function () {
        var _ = require('lodash');
        var options = this.options({
            separator: grunt.util.linefeed,
            attributes: '',
            webRoot: 'web/'
        });
        var reRoot = new RegExp('^' + options.webRoot);

        this.files.forEach(function (f) {
            var output = f.src.filter(function (path) {
                if (!grunt.file.exists(path)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (path) {
                return _.compact(['<script', options.attributes, 'src="' + path.replace(reRoot, '') + '"></script>']).join(' ');
            });

            if (output.length < 1) {
                grunt.log.warn('Destination not written because compiled files were empty.');
            } else {
                grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });

    });


    // Default task.
    grunt.registerTask('default', ['copy', 'imagemin:dev', 'templates', 'include', 'less:dev', 'watch']);
    grunt.registerTask('production', ['copy', 'imagemin:production', 'templates', 'concat', 'uglify', 'less:production']);
    grunt.registerTask('deploy-production', ['login', 'deploy:production']);
    grunt.registerTask('deploy-qa', ['login', 'deploy:qa']);
};
