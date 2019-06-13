// Step 1 - Include react
import React, { Component } from 'react'

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts'

// Step 4 - Include the chart type
import Zoomline from 'fusioncharts/fusioncharts.zoomline'

// Step 5 - Include the theme as fusion
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

// Step 6 - Include the ExcelExport
import ExcelExport from 'fusioncharts/features/excelexport'

// Step 7 - Adding the chart, theme and ExcelExport as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Zoomline, CandyTheme, ExcelExport)

// Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'zoomline',// The chart type
    width: '100%', // Width of the chart
    height: '45%', // Height of the chart
    dataFormat: 'json', // Data type
    renderAt: 'chartContainer',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "FASTQ Quality Scores",
            "subcaption": "PHRED-33",
            "yaxisname": "PHRED Score",
            "xaxisname": "Base Position",
            "labeldisplay": "auto",
            "yaxisminValue": "0",
            "yaxismaxValue": "93",
            "pixelsPerPoint": "0",
            "pixelsPerLabel": "30",
            "lineThickness": "1",
            "compactdatamode": "1",
            "dataseparator": "|",
            "labelHeight": "30",
            "scrollheight": "10",
            "flatScrollBars": "1",
            "scrollShowButtons": "0",
            "scrollColor": "#cccccc",
            "bgColor": "#2D2A32",
            "canvasBgColor": "#2D2A32",
            "toolbarButtonColor": "#818181",
            "toolbarPosition": "cc",
            "showToolBarButtonTooltext": "true",
            "toolbarButtonScale": "1.75",
            "theme": "candy"
        },
        "navigator": {
            "enabled": "true"
        },
        "categories": [
            {
                "category": "1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|49|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|"
            },
        ],
        "dataset": [
            {
                "seriesname": "@HWI-EAS91_1_30788AAXX:1:1:1761:343",
                "data": "26|47|57|41|64|59|42|42|49|37|66|59|21|24|47|47|50|34|26|62|53|22|58|20|23|28|35|53|42|26|57|28|61|58|31|64|47|52|59|36|58|48|29|68|20|49|48|63|27|68|33|62|62|50|55|49|53|19|39|58|19|61|34|64|38|41|61|66|49|20|25|27|"
            },
        ]
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