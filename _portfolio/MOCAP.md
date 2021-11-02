---
title: "MOCAP Data Visualization"
excerpt: "This is a page deticated to experiments with an interactive 3D visualizer to explore musical perfomance MOCAP data. <br/><img src='/images/tube3D.png'>"
collection: portfolio
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>
<script src="/assets/js/OBJLoader.js">



<style>
.highlight-left {margin-left: 0}
canvas { position: relative; top: 0;}
</style>

<div id="canvas-holder" style="position:relative; width: 100%;">
  <div id="dat-gui-holder" style="position: absolute; top: 0em; right: 0em;z-index: 1;"></div>
</div>

<div class='threejs'>
    <div id='cube'></div>
</div>


<style>
.threejs {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}
.threejs > * {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script type="x-shader/x-vertex" id="vertexshader"> attribute float distance; attribute vec3 surfaceNormal; uniform float amplitude; varying vec3 vNormal; void main() { vNormal = normal; vec3 newPosition = position + surfaceNormal * vec3(distance * amplitude); gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.0); } </script> <script type="x-shader/x-fragment" id="fragmentshader"> varying vec3 vNormal; void main() { vec3 light = vec3(0.7, 0.5, 1.0); light = normalize(light); float dProd = max(0.0, dot(vNormal, light)); gl_FragColor = vec4(dProd, // R dProd, // G dProd, // B 1.0); // A } </script>

<!-- <script src="/assets/js/cube.js"></script> -->
<script src="/assets/js/tube.js"></script>