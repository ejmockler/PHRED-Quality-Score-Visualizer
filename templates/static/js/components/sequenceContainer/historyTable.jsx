import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

export default class HistoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Header", field: "header", sortable: true, filter: true, resizable: true, width: 255
      }, {
        headerName: "Sequence", field: "sequence", sortable: true, filter: true, resizable: true, width: 255
      }, {
        headerName: "Quality Score", field: "qualityScore", sortable: true, filter: true, resizable: true, width: 255
      }],
      rowData: [{
        header: "@HWI-EAS91_1_30788AAXX:1:1:1761:343",
        sequence: "AAAAAAANNAAAAAAAAAAAAAAAAAAAAAAAAAAACNNANNGAGTNGNNNNNNNGCTTCCCACAGNNCTGG", 
        qualityScore: "hhhhhhh;;hhhhhhhhhhh^hOhhhhghhhfhhhgh;;h;;hhhh;h;;;;;;;hhhhhhghhhh;;Phhh"
      }, {
        header: "@HWI-EAS91_1_30788AAXX:1:1:1578:331", 
        sequence: "GTATAGANNAATAAGAAAAAAAAAAATGAAGACTTTCNNANNTCTGNANNNNNNNTCTTTTTTCAGNNGTAG",
        qualityScore: "hhhhhhh;;hhhhhhhhhhhhhhhhhhhhhhhhhhhh;;h;;hhhh;h;;;;;;;hhhhhhhhhhh;;hhVh"
      }, {
        header: "@HWI-EAS91_1_30788AAXX:1:1:1647:512", 
        sequence: "GTTCCATNNATCTGTGTGTCTATTTTTGTGCAAGTAANNCNNTGTTNANNNNNNNTGAAGAAGACANNAAGA", 
        qualityScore: "hhhhhhh;;hhhhhhhhhhhhhhhhhhhhhhhhhhhh;;h;;hhhh;h;;;;;;;hhhhhhhhfhh;;hhhh"
      }]
    }
  }

  render() {
    return (
      <div className="historyTable">
        <h3>FASTQ Sequences</h3>
        <hr />
        <div 
          className="ag-theme-balham-dark"
          style={{ 
          height: '100%', 
          width: '100%' }} 
        >
          <AgGridReact
            rowSelection='single'
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            onGridReady={ params => this.gridApi = params.api }
          >
          </AgGridReact>
        </div>
      </div>
    );
  }
}

