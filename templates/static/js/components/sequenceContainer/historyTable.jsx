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
      case "altClick":
        if (this.tmp.has(row.myID)) this.tmp.delete(row.myID)
        else this.tmp.add(row.myID)
        this.setState({
          selectionChanged: this.state.selectionChanged ? false : true
        })
        break
      default:
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
        <h3>Select multiple rows by alt+click</h3>
        <hr />
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "ID",
                  accessor: "myID",
                  style: { textAlign: "right" }
                },
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          pageSizeOptions={[10, 25, 50, 100, 150, 250, 500]}
          className="-striped -highlight"
          getTdProps={(state, rowInfo, column) => {
            if (rowInfo !== undefined) {
              return {
                onClick: (event, handleOriginal) => {
                  event.stopPropagation()
                  if (event.altKey)
                    this.onRowClick("altClick", rowInfo.row._original)
                  else if (event.shiftKey)
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