var mapData = function(data) {
  return data.map(function(value) {
  	return {
  		valueField: value
  	}
  })
}

var mapChart = function(data, bar, lcl, ucl) {
  var graph = [{
    "type": "line",
    "title": 'X-Bar',
    "id": "graph",
    "valueField": 'valueField',
    "fillAlphas": 0,
  }]

  var guides =  [{
    "fillAlpha": 0.25,
    "fillColor": "#ccffdc",
    "lineAlpha": 1,
    "lineColor": "#ccffdc",
    "toValue": ucl,
    "value": lcl,
    "inside": true,
    "position": "left"
  },
	{
    "fillAlpha": 0.25,
    "fillColor": "#ffd4cc",
    "lineAlpha": 1,
    "lineColor": "#ffd4cc",
    "toValue": bar,
    "value": bar,
    "inside": true,
    "position": "left"
  }
  ]

  var chartData = mapData(data)

	var chart = {
    "type": "serial",
    "theme": "light",
    "marginRight": 10,
    "marginLeft": 10,
    "graphs": graph,
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "category",
    "categoryAxis": {
    	"fontSize": 0
    },
    "valueAxes": [{
    	"guides": guides
    }],
    "dataProvider": chartData
  }

  return chart
}

$(document).ready(function(){
	Object.keys(data).forEach(function(key, index) {

		var titleRoot = key

		var xBar = data[key]['X-Bar']
		var xBarBar = data[key]['X-Bar-Bar']
		var xLCL = data[key]['X-LCL']
		var xUCL = data[key]['X-UCL']

		var r = data[key]['R']
		var rBar = data[key]['R-Bar']
		var rLCL = data[key]['R-LCL']
		var rUCL = data[key]['R-UCL']

		var xChart = mapChart(xBar, xBarBar, xLCL, xUCL)
		var rChart = mapChart(r, rBar, rLCL, rUCL)

	  var node = '<div class="row" id="row-' + index + '"></div>'
	  var xheader = '<h4>' + key + ' X</h4>'
	  var xnode = '<div class="col">' + xheader + '<div class="chart" id="x-chart-' + index + '"></div></div>'
	  var rheader = '<h4>' + key + ' R</h4>'
	  var rnode = '<div class="col">' + rheader + '<div class="chart" id="r-chart-' + index + '"></div></div>'

	  $('#app').append($(node))
	  $('#row-' + index).append($(xnode))
	  $('#row-' + index).append($(rnode))
	  
	  var amchart = AmCharts.makeChart('x-chart-' + index, xChart)
	  var amchart = AmCharts.makeChart('r-chart-' + index, rChart)



	})
})