<!--
Created By: Suyog Navgale
"version": "1.0.0",
"description": "Modern way to optimize static HTML and Assets",
"license": "ISC"
-->

# OPTIMIZEWEB Installation & Configuration: Modern way to optimize the HTML & Assets

### Step 1: Install NodeJS

**[NodeJS](https://nodejs.org/en/)**

### Step 2: Open the command prompt and install gulp-cli plugin

**[gulp-cli](https://www.npmjs.com/package/gulp-cli)** or use directly on CLI: **npm i gulp-cli -g**

### Step 3: Open the project in the Visual Code and create package.json

Create a package file on CLI: npm init

### Step 4: Install gulp plugins from VS Code terminal

**[gulp](https://www.npmjs.com/package/gulp)** or use directly on CLI: **npm i gulp@3.9.1 -D**

### Step 5: After completed above steps then create a gulpfile.js:

Create a gulpfile using: **echo.> gulpfile.js**
It will ask few details like package name version etc. You can fill or just skip using the enter key

### Step 6: Install remeaning plugins which has to support for optimization:

Install plugins from CLI: **npm i gulp-autoprefixer gulp-html-partial gulp-line-ending-corrector gulp-sass gulp-sourcemaps gulp-uglify gulp-tinypng-web gulp-uglifycss --save-dev**

### Step 7: Download the gulpfile.js from Repo and replace into your project:

Please make sure your assets folder path for CSS, JS & Images. If need then you can change the path from gulpfile.js

### Step 8: Now, Just Run project:

All steps are done, run command **gulp** and,
you can check new **build** folder has been created in your project with optimized files like CSS, JS & Images and all.

### How to make partial component

You can add any HTML file into the parent HTML using the
**<partial src="shared/header.html" title="Header Component"></partial>**
