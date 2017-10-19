/* global google $ */

google.charts.load('current', { packages: ['treemap'] });


function drawChart() {
  $.getJSON('repo.json', (dataJson) => {
    const data = google.visualization.arrayToDataTable(dataJson.data);
    function showFullTooltip(row, size, value) {
      return `${'<div style="background:#fd9; padding:10px; border-style:solid">' +
        '<span style="font-family:Courier"><b> NOM: '}${data.getValue(row, 0)}</b></span><br>` +
        `${data.getColumnLabel(4)}: ${data.getValue(row, 4)}<br>${
          data.getColumnLabel(5)}: ${data.getValue(row, 5)}<br>${
          data.getColumnLabel(6)}:<a style="color: #BE00FF;"  target="_blank" href=${data.getValue(row, 6)}>
            ${data.getValue(row, 6)}</a> </div>`;
    }

    // autoresizement
    // window.onresize = drawChart;
    // const width = 0.95 * window.innerHeight;
    // const height = 0.3 * window.innerWidth;

    const options = {
      // width,
      // height,
      minColor: '#B0B0B0',
      midColor: '#82cb78',
      maxColor: '#54E740',
      showScale: true,
      generateTooltip: showFullTooltip,
    };

    const tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

    tree.draw(data, options);
  });
}
google.charts.setOnLoadCallback(drawChart);
