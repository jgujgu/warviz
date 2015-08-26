var mostObjects = {};
var fillColor = "#008100";
var max = 0;

rawCountries.forEach(function(c) {
    var currentISO = c.iso;
    var stat = [c.statistic," [",c.field,"] (",c.date,")"].join("");

    if (mostObjects[currentISO]) {
        mostObjects[currentISO].statistics.push(stat);
        count = mostObjects[currentISO].count++;
        if (count > max) max = count;
    } else {
        mostObjects[currentISO] = {
            country: c.country,
            statistics: [stat],
            count: 1,
            fillKey: currentISO,
        };
    }
});

var colorFills = {
    defaultFill: 'white'
};

var fill = d3.scale.linear()
.domain([0, max])
.range(["white", fillColor]);

Object.keys(mostObjects).forEach(function(iso) {
    count = mostObjects[iso].count;
    colorFills[iso] = fill(count);
});

var most = new Datamap({
    element: document.getElementById("most"),
    fills: colorFills,
    data: mostObjects,
    geographyConfig: {
        popupTemplate: function(geography, country) {
            return [
                '<div class="hoverinfo">',
                "<strong>",
                country.country,
                "</strong>",
                " (",
                country.count,
                ")",
                "</br>",
                country.statistics.join("</br>"),
                "</br>",
            ].join("");
        },
        borderColor: 'black',
        highlightOnHover: false,
    },
});
