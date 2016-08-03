#!/usr/bin/env node
'use strict';

const program = require('commander');

program
  .version('0.0.1', '-v, --version');

program
  .usage('[command] [options]')
  .command('init [config]')
  .description('initialize a project')
  .action((file) => {
    let configFile = 'mcook.json';
    if (file) {
      configFile = file;
    }
    const fs = require('fs');
    fs.readFile(configFile, 'utf8', function (err, data) {
      if (err) {
        console.log('Read configuration file failed');
      } else {
        console.log('Read configuration file success');
        let obj;
        try {
          obj = JSON.parse(data);
        } catch (err) {
          console.log('Json parsing failed, please check the file format');
        }
        if (obj) {
          const Mcook = require('../lib');
          const mcook = new Mcook(obj);
          mcook.validateConfiguration((err) => {
            if (err) {
              console.log(err.message);
            } else {
              mcook.createProject((err) => {
                if (err) {
                  console.log(err.message);
                }
              });
            }
          });
        }
      }
    });
  });

program
  .command('*')
  .action(function (env) {
    console.log('\'%s\' is not a mcook command, see \'mcook --help\'', env);
  });

program.parse(process.argv);

if (!process.argv[2]) {
  console.log(program.help());
}
