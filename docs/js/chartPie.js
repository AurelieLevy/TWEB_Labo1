/* global google */

google.charts.load('current', { packages: ['treemap'] });
function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)', 'test new col (new)'],
    ['Global', null, 0, 0, 100],
    ['America', 'Global', 0, 0, 100],
    ['Europe', 'Global', 0, 0, 100],
    ['Asia', 'Global', 0, 0, 100],
    ['Australia', 'Global', 0, 0, 100],
    ['Africa', 'Global', 0, 0, 100],
    ['Brazil', 'America', 11, 10, 100],
    ['USA', 'America', 52, 31, 100],
    ['Mexico', 'America', 24, 12, 100],
    ['Canada', 'America', 16, -23, 100],
    ['France', 'Europe', 42, -11, 100],
    ['Germany', 'Europe', 31, -2, 100],
    ['Sweden', 'Europe', 22, -13, 100],
    ['Italy', 'Europe', 17, 4, 100],
    ['UK', 'Europe', 21, -5, 100],
    ['China', 'Asia', 36, 4, 100],
    ['Japan', 'Asia', 20, -12, 100],
    ['India', 'Asia', 40, 63, 100],
    ['Laos', 'Asia', 4, 34, 100],
    ['Mongolia', 'Asia', 15, -5, 100],
    ['Israel', 'Asia', 12, 24, 100],
    ['Iran', 'Asia', 18, 13, 100],
    ['Pakistan', 'Asia', 11, -52, 100],
    ['Egypt', 'Africa', 21, 0, 100],
    ['S. Africa', 'Africa', 30, 43, 100],
    ['Sudan', 'Africa', 12, 2, 100],
    ['Congo', 'Africa', 10, 12, 100],
    ['Zaire', 'Africa', 8, 10, 100],
  ]);

  const tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

  /* tree.draw(data, {
    minColor: '#f00',
    midColor: '#ddd',
    maxColor: '#0d0',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true
  }); */
  function showFullTooltip(row, size, value) {
    return `${'<div style="background:#fd9; padding:10px; border-style:solid">' +
      '<span style="font-family:Courier"><b>'}${data.getValue(row, 0)
    }</b>, ${data.getValue(row, 1)}, ${data.getValue(row, 2)
    }, ${data.getValue(row, 3)}</span><br>` +
      `Datatable row: ${row}<br>${
        data.getColumnLabel(2)
      } (total value of this cell and its children): ${size}<br>${
        data.getColumnLabel(3)}: ${value} </div>`; // + '<br>' + data.getColumnLabel(4) + data.getValue(row, 4)
  }
  const options = {
    minColor: '#e7711c',
    midColor: '#fff',
    maxColor: '#4374e0',
    showScale: true,
    generateTooltip: showFullTooltip,
  };

  tree.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);

// <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
//    <script type="text/javascript">
/* google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['German', 5.85],
        ['French', 1.66],
        ['Italian', 0.316],
        ['Romansh', 0.0791]
    ]);

    var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Swiss Language Use (100 degree rotation)',
        pieStartAngle: 100,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
} */
//    </script>
//  </head>

/*
// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    $.getJSON("repo.json", function (dataJson) {
        console.log(dataJson);
        var result = [];
        for (var i in dataJson) {
            result.push([i, dataJson[i]]);
        }
        data.addRows(result);

        //data.addRows([
        //    ['James', 31],
        //    ['Onions', 1],
        //    ['Olives', 1],
        //    ['Zucchini', 1],
        //    ['Pepperoni', 2]
        //]);

        // Set chart options
        var options = {
            'title': 'Number of commit by author',
            'width': 800,
            'height': 700
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);


        //console.log(json);
        //return json;
    });//ouverture et lecture fichier json


    //TODO: VOIR DANS INDEX.HTML POUR INSERER JQUERY!!!! 
    //REGARDER DANS LA CONSOLE DE FIREFOX LES ERREURS A REGLER!!!


} */
