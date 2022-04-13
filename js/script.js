// Copyright (c) 2022 Marcus Wehbi All rights reserved
//
// Created by: Marcus Wehbi
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a sphere.
 */
function calcVolume () {
  // get user input
  let side_a = parseFloat(document.getElementById("side-a").value)


  // calculate the volume
  let volume = (4/3) * Math.PI * (side_a ** 3)

  // display the results
  document.getElementById("volume").innerHTML = "The volume is " + volume.toFixed(2) + "m<sup>3</sup>"
}