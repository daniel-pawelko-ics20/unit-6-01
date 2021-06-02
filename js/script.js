// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: June 2021
// This file contains the JS functions for index.html

"use strict"

window.onload = function() {
  // this calculates volume of a sphere, user input from search query
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')
  console.log(radius)

  // process
  const volume = (4/3)*Math.PI*Math.pow(radius, 3)

  // output
  document.getElementById('output').innerHTML = "Volume = " + volume + "mm"
}

function userInputClick() {
  // this calculates volume of a sphere, user input basic input
  const radius = parseFloat(document.getElementById("radius-entered").value)

  // process
  const volume = (4/3)*Math.PI*Math.pow(radius, 3)

  // output
  document.getElementById("output").innerHTML = "Volume = " + volume + "mm"
}