/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 1000)
	.attr("height", 1000);

var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 70)
	.attr("fill", "grey");

var rect = svg.append('rect')
	.attr('width', 500)
	.attr('height', 100)
	.attr('x', 200)
	.attr('y', 300)
	.attr('fill', 'red')

