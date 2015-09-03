---
layout: post
title:  "Bombs Away"
cover:
date:   2015-08-14 23:58:00
categories: d3 nuclear bombs
custom_div_id: nuclear
custom_js:
- d3.min
- topojson.min
- datamap
- nuclear
---
I've been searching for inspiration for a series of D3 graphs I'd like to someday make that center upon one of my favorite subjects, war. I recently happened upon [markmarkoh's bl.ock](http://bl.ocks.org/markmarkoh/4255924) (he is the maintainer of the wonderful [DataMaps](http://datamaps.github.io/) library), which shows notable nuclear explosions and attending information. I used a native javascript implementation of the cleanup code. Tsar Bomba was ridiculously big, so it's hard to effectively scale the other circles and still retain their hoverability. We observe North Korea racking up tests in recent years. [Wikipedia](https://en.wikipedia.org/wiki/Nuclear_weapons_testing#Milestone_nuclear_explosions)

{% highlight js %}
//required html
//<div id="nuclear" style="height: 500px; width: 750px"></div>
//<script src='/scripts/d3.min.js' type="text/javascript"></script>
//<script src='/scripts/topojson.js' type="text/javascript"></script>
//<script src='/scripts/datamap.js' type="text/javascript"></script>
//var bombs in another file

bubbleTemplate = { popupTemplate: function(geo, data) {
    return [
        '<div class="hoverinfo"><strong>',data.name,'</strong>',
        '<br/>Payload: ', data.yeild, ' kilotons',
        '<br/>Country: ', data.country,
        '<br/>Date: ', data.date,
        '<br/>Significance: ', data.significance,
        '</div>'].join('');
}};

var yields = bombs.map(function(bomb) {
    return bomb.yeild;
});

var min = d3.min(yields);
var max = d3.max(yields);

var scale = d3.scale.pow()
.domain([min, max])
.range([7, 49]);

bombs.forEach(function(bomb, i) {
    bombs[i].radius = scale(bomb.yeild);
});

var bubbleMap = new Datamap({
    element: document.getElementById("nuclear"),
    scope: 'world',
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
    },
    fills: {
        'USA': '#1f77b4',
        'RUS': '#9467bd',
        'PRK': '#ff7f0e',
        'PRC': '#2ca02c',
        'IND': '#e377c2',
        'GBR': '#8c564b',
        'FRA': '#d62728',
        'PAK': '#7f7f7f',
        defaultFill: '#E7C4AE'
    },
    data: {
        'RUS': {fillKey: 'RUS'},
        'PRK': {fillKey: 'PRK'},
        'CHN': {fillKey: 'PRC'},
        'IND': {fillKey: 'IND'},
        'GBR': {fillKey: 'GBR'},
        'FRA': {fillKey: 'FRA'},
        'PAK': {fillKey: 'PAK'},
        'USA': {fillKey: 'USA'}
    }
});

bubbleMap.bubbles(bombs, bubbleTemplate);
{% endhighlight %}
