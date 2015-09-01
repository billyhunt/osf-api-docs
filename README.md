Open Science Frameowork API Documentation
=========

This is the start of the Open Science Framework's (OSF) API Documentation.  The template was copied from Caner Ugus's OSF Style Guide.  

### Quick Start
* Clone the remote repo to your local

        $ git clone https://github.com/billyhunt/osf-api-docs.git
        $ cd osf-api-docs
    
* Install the dependent libraries (listed in [package.json](https://github.com/haoyuchen1992/osf-style/blob/Edit-Readme/package.json)) with npm

        $ npm install

* Then run gulp script and the project dashboard could be found in `http://localhost:8000/`

        $ npm run gulp
After that, click `index.html` in the list directory and now the guideline page will show in your browser.

With the help of gulp, every change in repo code will automatically be complied and changed after saving.  

### Possible Issues
* If npm is not installed (`-bash : npm: command not found`), please install [node.js](https://nodejs.org/download/) in which it contains `npm`.

* If SASS is not installed (`bash: sass: command not found`), you should run the following command: 

        $ sudo gem install sass
[Click here](http://sass-lang.com/install) for more details about installation of SASS. 

### Libraries Used Here
This Project relies on these technologies for its workflow so it's important to familiarize yourself before starting.

1. [Npm](https://www.npmjs.org) 
Node package management, for server side dependencies and making gulp work. We will use it to install all the dependent libraries(such as Gulp) in package.json.

2. [Gulp](http://gulpjs.com/)  
Builds the distribution by running important tasks including concatenation, minification(we are not doing this yet, but will), compiling less files.

3. [Bootstrap](http://getbootstrap.com/)  
Forms the basic design with flat colors taken from elsewhere. If you are working with html you need to use the Bootstrap syntax. 

4. [SASS](http://sass-lang.com/)
Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
