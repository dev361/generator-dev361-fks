'use strict';

const Generator = require('yeoman-generator');
const fs = require('fs');

class gen extends Generator {

    /*initializing() {}*/

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: name => {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }
                    if (/\s+/.test(name)) {
                        return 'Project name should not contain whitespaces';
                    }

                    if (!fs.existsSync(this.destinationPath(name))) {
                        return true;
                    }
                    if (require('fs').statSync(this.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            }
        ])
            .then(answers => {                
                this.answers = answers;
                this.obj = {
                    answers: this.answers
                };
            });
    }

    /*configuring(answers) {}*/

    writing() {
        this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.obj.answers);
        this.fs.copy(this.templatePath('_dfb.env.js.dist'), this.destinationPath('dfb.env.js.dist'));
        this.fs.copy(this.templatePath('_dfb.config.js'), this.destinationPath('dfb.config.js'));
        this.fs.copy(this.templatePath('assets/'), this.destinationPath('assets/'));
    }

    install() {
        this.npmInstall();
    }

    end() {
        this.log.ok(`Project ${this.answers.name} generated!!!`);
    }
}

module.exports = gen;