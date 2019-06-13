import React, { Component } from "react"
import classnames from 'classnames'

// Import React Table
import ReactTable from "react-table"

export default class HistoryTable extends Component {
  constructor() {
    super()
    this.state = {
      data: ['1', '2', '3', '4', '5', '6'],
      selectionChanged: false
    }
    this.tmp = new Set()
  }

  onRowClick = (action, row) => {
    switch (action) {
      default:
        this.tmp.clear()
        this.tmp.add(row.myID)
        this.setState({
          selectionChanged: this.state.selectionChanged ? false : true
        })
        break
    }
  }

  isRowSelected = rowID => {
    return this.tmp.has(rowID)
  }

  render() {
    const { data } = this.state
    return (
      <div className='historyTable'>
        <h3>FASTQ Sequences</h3>
        <hr />
        <ReactTable
          data={data}
          showPagination={false}
          columns={[
            {
              Header: "File Name",
              accessor: "fileName",
              style: { textAlign: "right" }
            },
            {
              Header: "Header",
              accessor: "Header"
            },
            {
              Header: "Quality Score",
              accessor: "qualityScore"
            },
            {
              Header: "Sequence",
              accessor: "sequence"
            }
          ]}
          defaultPageSize={5}
          style={{
            height: "200px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          pageSizeOptions={[10, 25, 50, 100, 150, 250, 500]}
          className="-striped -highlight"
          getTdProps={(state, rowInfo, column) => {
            if (rowInfo !== undefined) {
              return {
                onClick: (event, handleOriginal) => {
                  event.stopPropagation()
                  if (event.shiftKey)
                    this.onRowClick(
                      "shiftClick",
                      rowInfo.row._original,
                      rowInfo.index
                    )
                  else this.onRowClick("click", rowInfo.row._original)
                  if (handleOriginal) handleOriginal()
                }
              }
            }
          }}
          getTrProps={(state, rowInfo, column) => {
            if (rowInfo !== undefined) {
              return {
                className: classnames({
                  "selected-row": this.isRowSelected(rowInfo.original.myID)
                })
              }
            }
          }}
        />
      </div>
    )
  }
}