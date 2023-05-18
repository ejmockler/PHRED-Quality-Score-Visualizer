// Step 1 - Include react
import React, { Component } from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Zoomline from "fusioncharts/fusioncharts.zoomline";

// Step 5 - Include the theme as fusion
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Step 6 - Include the ExcelExport
import ExcelExport from "fusioncharts/features/excelexport";

// Step 7 - Adding the chart, theme and ExcelExport as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Zoomline, CandyTheme, ExcelExport);

// Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "zoomline", // The chart type
  width: "100%", // Width of the chart
  height: "45%", // Height of the chart
  dataFormat: "json", // Data type
  renderAt: "chartContainer",
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "FASTQ Quality Scores",
      subcaption: "PHRED-33",
      yaxisname: "PHRED Score",
      xaxisname: "Base Position",
      labeldisplay: "auto",
      yaxisminValue: "0", // Changed to -5 if Solexa-encoded, on Python Flask backend
      yaxismaxValue: "60",
      pixelsPerPoint: "0",
      pixelsPerLabel: "30",
      lineThickness: "1",
      compactdatamode: "1",
      dataseparator: "|",
      labelHeight: "30",
      scrollheight: "10",
      flatScrollBars: "1",
      scrollShowButtons: "0",
      scrollColor: "#cccccc",
      bgColor: "#2D2A32",
      canvasBgColor: "#2D2A32",
      toolbarButtonColor: "#818181",
      toolbarPosition: "cc",
      showToolBarButtonTooltext: "true",
      toolbarButtonScale: "1.75",
      theme: "candy",
    },
    navigator: {
      enabled: "true",
    },
    categories: [
      {
        category:
          "A|A|A|A|A|A|A|N|N|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|C|N|N|A|N|N|G|A|G|T|N|G|N|N|N|N|N|N|N|G|C|T|T|C|C|C|A|C|A|G|N|N|C|T|G|G|",
      },
    ],
    dataset: [
      {
        seriesname: "@HWI-EAS91_1_30788AAXX:1:1:1761:343",
        data:
          "40|40|40|40|40|40|40|-5|-5|40|40|40|40|40|40|40|40|40|40|40|30|40|15|40|40|40|40|39|40|40|40|38|40|40|40|39|40|-5|-5|40|-5|-5|40|40|40|40|-5|40|-5|-5|-5|-5|-5|-5|-5|40|40|40|40|40|40|39|40|40|40|40|-5|-5|16|40|40|40",
      },
    ],
  },
};

var centerStyle = {
  margin: "0 auto",
};

export default class QualityScoreZoomline extends Component {
  render() {
    return (
      <div style={centerStyle}>
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}
