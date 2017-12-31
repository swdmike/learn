/// <reference path="/home/swd/types/node_modules/@types/d3/index.d.ts" />
function render(data) { // <- B
    var bars = d3.select("body").selectAll("div.h-bar") // <- C
        .data(data); // Update <- D

    // Enter
    bars.enter() // <- E
        .append("div") // <- F
        .attr("class", "h-bar") // <- G
        .merge(bars) // Enter + Update <- H
        .style("width", function (d) {
            return (d * 3) + "px"; // <- I
        })
        .text(function (d) {
            return d; // <- J
        });

    // Exit
    bars.exit() // <- K
        .remove();
}
var data = [70, 15, 30, 50, 80, 65, 55, 30, 20, 10, 8];
setInterval(function () { // <- L
    data.shift();
    data.push(Math.round(Math.random() * 100));
    render(data);
}, 500);