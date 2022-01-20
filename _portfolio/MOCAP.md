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


<div class='threejs'>
  <div id="cube" style="border:1px solid black;">
    <div id="param" class="dat-gui">
    </div>
  </div>
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



<script src="/assets/js/cube.js"></script>



Text at the bottom of it.