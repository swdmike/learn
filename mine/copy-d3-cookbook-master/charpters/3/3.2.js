let data = [31, 23, 49, 17, 54, 28, 9, 12, 78, 47];

function render() {
    let bars = d3.select("body").selectAll("div.h-bar")
        .data(data)

    bars.enter()
        .append("div")
        .attr("class", "h-bar")
        .merge(bars)
        .style("width", function (d) {
            return (d * 3) + "px"; // <- I
        })
        .text(function (d) {
            return d; // <- J
        });


}