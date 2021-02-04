<!--
Created By: Suyog Navgale
"version": "1.1.0",
"description": "Modern way to optimize static HTML and Assets",
"license": "ISC"
-->

# OPTIMIZEWEB Installation & Configuration: Modern way to optimize the HTML & Assets

### Uses and Benefits:

- It is possible to merge multiple components in a one HTML
- All Jpg, Png can optimized, no need to upload on tinypng or other server websites.
- Customized/Third-party Javascript minimized.
- Customized CSS/Third-party CSS mininized.
- Any modification in the HTML or SCSS will run the **watch** and update in build folder.

**Note:** Once you have done the all below steps, then please change the source file path from gulpfile.js as per your project.
Currently, It is set as per SRC folder, which has added in this Repositary.

### Step 1: Install NodeJS

**[NodeJS](https://nodejs.org/en/)**

### Step 2: Open the command prompt and install gulp-cli plugin

**[gulp-cli](https://www.npmjs.com/package/gulp-cli)** or use directly on CLI: **npm i gulp-cli -g**

### Step 3: Open the project in the Visual Code and create package.json

Create a package file on CLI: npm init

### Step 4: Install gulp plugins from VS Code terminal

**[gulp](https://www.npmjs.com/package/gulp)** or use directly on CLI: **npm i gulp -D**

### Step 5: After completed above steps then create a gulpfile.js:

Create a gulpfile using: **echo.> gulpfile.js**
It will ask few details like package name version etc. You can fill or just skip using the enter key

### Step 6: Install remeaning plugins which has to support for optimization:

Install plugins from CLI: **npm i gulp-autoprefixer gulp-html-partial gulp-line-ending-corrector gulp-sass gulp-sourcemaps gulp-uglify gulp-image gulp-uglifycss --save-dev**

### Step 7: Download the gulpfile.js from Repo and replace into your project:

Please make sure your assets folder path for CSS, JS & Images. If need then you can change the path from gulpfile.js

### Step 8: Now, Just Run project:

All steps are done, Now, you can run command **gulp** or **gulp develop** and,
you can check new **build** folder has been created in your project with optimized files like CSS, JS & Images and all.

### Difference between **gulp** and **gulp develop** CLI command:

**gulp develop**: if you are not required to optimize the images on each time.
**gulp**: optimize the images on each time.

### How to make partial component

You can add any HTML file into the parent HTML using the <br>
\<partial src="shared/header.html" title="Header Component"></partial>
