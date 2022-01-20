---
title: "MOCAP Data Visualization"
excerpt: "This is an experiment with an interactive 3D visualizer to explore musical perfomance MOCAP data. <br/><img src='/images/tube3D.png'>"
collection: portfolio
---
Text on top of visualizer..

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>
<script src="/assets/js/OBJLoader.js"></script>
<script src="/assets/js/OrbitControls.js"></script>


<style>
  canvas { width: inherit; position: relative; top: 0;}
</style>
<div id='canvas-holder' style="position: relative; width: inherit; border: 1px solid black">
  <div id="dat-gui-holder" style="position: absolute; top: 0em; right: 0em; z-index: 1;"></div>
</div>


<script src="/assets/js/cube.js"></script>



Text at the bottom of it.