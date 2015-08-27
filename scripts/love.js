var pack = rawWikis;
var diameter = 500;

var svg = d3.select('#love').append('svg')
.attr('width', diameter)
.attr('height', diameter);

var bubble = d3.layout.pack()
.size([diameter, diameter])
.value(function(d) { return d.articles; })
// .sort(function(a, b) {
// 	return -(a.value - b.value)
// })
.padding(3);

var tip = d3.tip()
.attr('class', 'd3-tip')
.offset([-10, 0])
.html(function(d) {
  return [
    "<p>",
    d.englishname,
    " (",
    d.nativename,
    ")",
    "</br>",
    "Articles: ",
    numberWithCommas(d.articles),
    "</br>",
    "Speakers: ",
    numberWithCommas(d.speakers),
    "</br>",
    "Quotient: ",
    d3.round(d.articledivspeakers,4),
    "</br>",
    "Wiki Symbol: ",
    d.wiki,
    "</p>",
  ].join("");
});

svg.call(tip);

// generate data with calculated layout values
var nodes = bubble.nodes(pack)
.filter(function(d) { return !d.children; }); // filter out the outer bubble

var values = pack.children.map(function(obj) {
  return obj.articledivspeakers;
});

var max = d3.max(values);

var fillColor = "#008100";
var secondFillColor = "#bcffbc";
var fill = d3.scale.sqrt()
.domain([0, max])
.range([secondFillColor, fillColor]);

var vis = svg.selectAll('circle')
.data(nodes);

var circle = vis.enter().append('circle')
.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
.attr('fill', function(d) { return fill(d.articledivspeakers); })
.attr('r', function(d) { return d.r; })
.on('mouseover', tip.show)
.on('mouseout', tip.hide);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
