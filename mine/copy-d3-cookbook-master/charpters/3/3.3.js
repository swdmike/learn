let data = [ // <- A
    { width: 10, color: 23 }, { width: 15, color: 33 },
    { width: 30, color: 40 }, { width: 50, color: 60 },
    { width: 80, color: 22 }, { width: 65, color: 10 },
    { width: 55, color: 5 }, { width: 30, color: 30 },
    { width: 20, color: 60 }, { width: 10, color: 90 },
    { width: 8, color: 10 }
];

var colorScale = d3.scaleLinear()
    .domain([0, 100])
    .range(["#add8e6", "blue"]); // <- B

function render(data) {
    var bars = d3.select("body").selectAll("div.h-bar")
        .data(data); // Update

    // Enter
    bars.enter()
        .append("div")
        .attr("class", "h-bar")
        .merge(bars) // Enter + Update
        .style("width", function (d) { // <- C
            return (d.width * 5) + "px"; // <- D
        })
        .style("background-color", function (d) {
            return colorScale(d.color); // <- E
        })
        .text(function (d) {
            return d.width; // <- F
        });


    // Exit
    bars.exit().remove();
}

function randomValue() {
    return Math.round(Math.random() * 100);
}

setInterval(function () {
    data.shift();
    data.push({ width: randomValue(), color: randomValue() });
    render(data);
}, 500);

render(data);