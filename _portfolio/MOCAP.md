---
title: "MOCAP Data Visualization"
excerpt: "This is a page deticated to experiments with an interactive 3D visualizer to explore musical perfomance MOCAP data. <br/><img src='/images/tube3D.png'>"
collection: portfolio
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"></script>


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


<!-- <script src="/assets/js/cube.js"></script> -->
<script src="/assets/js/tube.js"></script>