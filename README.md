Dev361 Front-End Kickstart
========================

Generator-dev361-fks (for FrontKickStart), is a Yeoman generator based on the worldly acclaimed **Dev361 Front-End Assets Builder** (found here : https://github.com/dev361/dev361-front-builder)
       
## Installation

You must have yo and yeoman-generator installed globally :
```
$ npm install -g yo yeoman-generator
```
And then install fks :
```
$ npm install generator-dev361-fks
```
And then run the generator :
```
$ yo dev361-fks
```

Running the **fks generator** will :
 * ask for your project name, 
 * install some dependencies (**Dev361 Front-End Assets Builder**, **Bootstrap**, **Jquery**, **Modernizr**)
 * copy example assets at project root
 * add a few dependencies and put **Dev361 Front-End Assets Builder** config files at the right place (config options of that package can be found at https://github.com/dev361/dev361-front-builder)