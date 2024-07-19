<script lang="ts" setup>
import { ref, onMounted, unref } from "vue";
import * as BABYLON from "babylonjs";
const renderCanvas = ref();
const init = () => {
  // Get the canvas DOM element
  var canvas = unref(renderCanvas);
  // Load the 3D engine
  var engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });
  // CreateScene function that creates and return the scene
  var createScene = function () {
    // Create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);
    // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
    var camera = new BABYLON.FreeCamera(
      "camera1",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    // Attach the camera to the canvas
    camera.attachControl(canvas, false);
    // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
    var sphere = BABYLON.MeshBuilder.CreateSphere(
      "sphere1",
      { segments: 16, diameter: 2 },
      scene
    );
    // Move the sphere upward 1/2 of its height
    sphere.position.y = 1;
    // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
    var ground = BABYLON.MeshBuilder.CreateGround(
      "ground1",
      { width: 6, height: 6, subdivisions: 2 },
      scene
    );
    // Return the created scene
    return scene;
  };
  // call the createScene function
  var scene = createScene();
  // run the render loop
  engine.runRenderLoop(function () {
    scene.render();
  });
  // the canvas/window resize event handler
  window.addEventListener("resize", function () {
    engine.resize();
  });
};

onMounted(() => init());
</script>

<template>
  <canvas id="render-canvas" ref="renderCanvas"></canvas>
</template>

<style lang="css" scoped>
#render-canvas {
  width: 100%;
  height: 100%;
}
</style>
