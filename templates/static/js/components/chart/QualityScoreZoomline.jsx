// Step 1 - Include react
import React, { Component } from 'react'

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts'

// Step 5 - Include the theme as fusion
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

// Step 6 - Include the ExcelExport
import ExcelExport from 'fusioncharts/features/excelexport'

// Step 7 - Adding the chart, theme and ExcelExport as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, CandyTheme, ExcelExport)

// Step 8 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'column2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "candy",
        },
        // Chart Data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    }
}

var centerStyle = {
 margin: '0 auto'
}

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
export default class QualityScoreZoomline extends Component {
 render() {
  return (
   <div style={centerStyle}>
    <ReactFC
     {...chartConfigs}/>
   </div>
  )
 }
}