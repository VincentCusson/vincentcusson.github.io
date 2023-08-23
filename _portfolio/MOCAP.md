---
title: "MOCAP Data Visualization"
excerpt: "This is an experiment with an interactive 3D visualizer to explore musical perfomance MOCAP data. <br/><img src='/images/tube3D.png'>"
collection: portfolio
order: 7
---

We're utilizing the Three.js library to visualise motion capture data from live instrumentalists, allowing us to get a better understanding of the data and how it can be used to create new musical experiences. We think using web technologies to explore this kind of data can be a great way to share and collaborate on related research projects.

In this proof of concept, we're using a simple tube geometry to represent the [eTu{d,b}e](https://vincentcusson.github.io/portfolio/etube/) instrument. You can use the mouse to navigate around the scene and the GUI to change some parameters.

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



In futur work, we will add the actual MOCAP data from the Qualisys software available through [CIRMMT](https://www.cirmmt.org/en/welcome-to-cirmmt). We would also like to explore other visualisation techniques and representations.