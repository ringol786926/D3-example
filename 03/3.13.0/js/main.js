/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var margin = { left:100, right:10, top:10, bottom:150 }

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom

var g = d3.select('#chart-area')
    .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
    .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

g.append('text')
  .attr('x', width / 2)
  .attr('y', height + 50)
  .attr('font-size', '20px')
  .attr('text-anchor', 'middle')
  .text('Month')

g.append('text')
  .attr('x', - ( height / 2 ))
  .attr('y', -60)
  .attr('font-size', '20px')
  .attr('text-anchor', 'middle')
  .attr('transform', 'rotate(-90)')
  .text('Revenue')

d3.json('data/revenues.json').then(data => {
  data.forEach(d => {
    d.revenue = +d.revenue
  });

  var x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.2)

  var y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.revenue)])
      .range([height, 0])

  var xAxisCall = d3.axisBottom(x)
  g.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxisCall)

  var yAxisCall = d3.axisLeft(y)
    .tickFormat(d => '$' + d)
  g.append('g')
    .attr('class', 'y axis')
    .call(yAxisCall)

  var rects = g.selectAll('rect')
      .data(data)
  
  rects.enter()
      .append('rect')
          .attr('y', d => y(d.revenue))
          .attr('x', d => x(d.month))
          .attr('width', x.bandwidth)
          .attr('height', d => height - y(d.revenue))
          .attr('fill', 'grey')
})
 