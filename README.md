# THREE.js

### What is it?

Three JS is a javascript library that creates and animates 3D graphics in a web browser. It is a cross-browser JavaScript library and Application Programming Interface that uses WebGL.

### How to Start?

To load and run the files you must have a **live server**.

The option for  server for this project is **live-server (npm)** which you can install globally from this command:

`npm install -g live-server`

to run live server go to your terminal and go to the root of the folder that you wish to run. Then use the following command:

live-server

To exit out of live-server press `Ctrl` `C`

### Now what?

To use Three.js you can link the files via their website. From the website, they do prefer you to download.

http://threejs.org/build/three.min.js (minified version)

https://threejs.org/build/three.js (developer version)

It is suggested to use the developer version to be able to see error messages correctly. 

You can also install Three.js with npm:

`npm i three` 

### Creating

You can also create 3d from within their online editor

https://threejs.org/editor/

Start with the basic HTML template and then you add...

<script src="js/three.js"></script>

like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ThreeJS</title>
    <style>
        body { margin: 0; color:white;}
        canvas { width: 98%; height: 98%; display: block;}
    </style>
</head>
<body>
    <script src="js/three.js"></script>
</body>
</html>

```

For 3d it goes the same as within a 3d program.

For each project there's usually:

- Scene (or staging area)
- Camera (so where )
- Lights 
- And then the 3D model


