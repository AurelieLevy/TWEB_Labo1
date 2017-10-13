/* global google $ */

google.charts.load('current', { packages: ['treemap'] });


function drawChart() {
  $.getJSON('repo.json', (dataJson) => {
    const data = google.visualization.arrayToDataTable(dataJson.data);
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
      minColor: '#B0B0B0',
      midColor: '#82cb78',
      maxColor: '#54E740',
      showScale: true,
      generateTooltip: showFullTooltip,
    };

    const tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

    tree.draw(data, options);
  });
  /* tree.draw(data, {
      minColor: '#f00',
      midColor: '#ddd',
      maxColor: '#0d0',
      headerHeight: 15,
      fontColor: 'black',
      showScale: true
    }); */
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
