$(document).ready(function() {
  $(function() {
    var firstChild = $("#demo li:first-child").clone(),
      lastChild = $("#demo li:last-child").clone(),
      container = $("#demo ul");
    firstChild.appendTo(container);
    lastChild.prependTo(container);
    $("#demo").dragend({
      jumpToPage: 2,
      onSwipeEnd: function() {
        var first = this.pages[0],
          last = this.pages[this.pages.length - 1];
        if (first === this.activeElement) {
          this.jumpToPage(this.pages.length - 1 );
        }
        if (last === this.activeElement) {
          this.jumpToPage(2);
        }
      },
      afterInitialize: function() {
        this.container.style.visibility = "visible";
      }
    });

    $("#no").click(function() {
      $("#demo").dragend("right");
    });

    $("#yes").click(function() {
      $("#demo").dragend("left");
    });
  });

  $(".prev").click(function() {
    $("#demo").dragend("right");
  });

  $(".next").click(function() {
    $("#demo").dragend("left");
  });
});

var width = 250,
  height = 250,
  radius = Math.min(width, height) / 2;

var color = d3.scale.linear()
.domain([1, 10])
.range(["#93ffb7", "#00a136"]);

var arc = d3.svg.arc()
.outerRadius(radius)
.innerRadius(radius - 52)
.cornerRadius(5);

var pie = d3.layout.pie()
.sort(null)
.startAngle(1.1*Math.PI)
.endAngle(3.1*Math.PI)
.padAngle(.01)
.value(function(d) { return d.score; });

var svg = d3.select("#donut").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

data = [
  {"lang": "Ruby", "score": 7},
  {"lang": "Javascript", "score": 5},
  {"lang": "d3", "score": 2},
  {"lang": "Go", "score": 3},
  {"lang": "Android", "score": 3}
]

var g = svg.selectAll(".arc")
.data(pie(data))
.enter().append("g")
.attr("class", "arc");

g.append("path")
.attr("d", arc)
.style("fill", function(d) { return color(d.data.score); });

//g.append("path")
//.style("fill", function(d) { return color(d.data.score); })
//.transition().delay(function(d, i) { return i * 2000; }).duration(2000)
//.attrTween('d', function(d) {
  //var i = d3.interpolate(d.startAngle, d.endAngle);
  //return function(t) {
    //d.startAngle = i(t);
    //return arc(d);
  //}});

  g.append("text")
  .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
  .attr("dy", ".35em")
  .attr("class", "donut-text")
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.lang; });

  g.append("text")
  .style("text-anchor", "middle")
  .attr("class", "exp")
  .attr("dy", "-0.5em")
  .text("Code");
  g.append("text")
  .attr("dy", "1.1em")
  .attr("class", "exp")
  .style("text-anchor", "middle")
  .text("Experience");
