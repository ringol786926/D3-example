/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select('#chart-area')
  .append('svg')
  .attr('height', '400')
  .attr('width', '400')

d3.json('data/buildings.json').then(datas => {
  datas.forEach(data => {
    data.height = +data.height
  });

  var bars = svg.selectAll('rect')
    .data(datas)

  bars.enter()
    .append('rect')
      .attr('y', 0)
      .attr('x', (d, i) => {
        return (i * 60)
      })
      .attr('width', 40)
      .attr('height', (d, i) => {
        return d.height
      })
      .attr('fill', (d) => {
        return 'grey'
      })
})