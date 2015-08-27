---
layout: post
title: "Wikipedia Love"
cover:
date:   2015-08-25 23:58:00
categories: d3 wikipedia love languages
custom_div_id: love
custom_css: tip
custom_js:
- d3.min
- d3-tip
- rawwikis
- love
---
Who loves Wikipedia? Of course, I do. But I wanted to see roughly which language's Wiki had the most love, proportionally to the number of speakers. There are a number of metrics to go by, [depth or number of active users](https://meta.wikimedia.org/wiki/List_of_Wikipedias#Notes) being notable, but, for simplicity, I used the raw number of articles. I ended up choosing a *Nationalencyklopedin*--a Swedish encyclopedia--dataset for native language usage numbers, due to its fullness of language statistics, available on [this page](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers#Nationalencyklopedin). I then used [Ethnologue](https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers#Ethnologue_.282013.2C_17th_edition.29) numbers for English, French, German, Spanish, Persian, Mandarin, and Russian because the difference between total and native speakers was rather great. I believe even these rough statistics provide a telling story. The color intensity shows how a language proportionally compared to its peers in terms of number of articles divided by number of speakers. [Waray-Waray](https://war.wikipedia.org/wiki/Syahan_nga_Pakli), [Swedish](https://sv.wikipedia.org/wiki/Portal:Huvudsida), and [Dutch](https://nl.wikipedia.org/wiki/Hoofdpagina) contributors come out on top. Do their contributors simply more often translate articles from English? Or do they draw from the other languages in their geographic vicinity? Only they know. At the bottom are [Mandarin](https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5) and [Arabic](https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9). The cynic in me cites the fact that the majority of native speakers of these languages live in countries with heavy censorship, but this is only a wild hypothesis.

{% highlight js %}
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

vis.enter().append('circle')
.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
.attr('fill', function(d) { return fill(d.articledivspeakers); })
.attr('r', function(d) { return d.r; })
.on('mouseover', tip.show)
.on('mouseout', tip.hide);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
{% endhighlight %}
