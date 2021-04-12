import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Table, Button, Spinner, InputGroup, FormControl, Form } from 'react-bootstrap'
import { IData } from '../../interface/tableData/tabledata'
import CreateModal from '../modal/CreateModal'
import { deleteFood, orderByAll } from '../../server/api/foodServices'

interface ITable {
  data: IData[]
  column: string[]
}

const TableData: React.FC<ITable> = props => {
  let history = useHistory()
  let { data, column } = props
  var count = 1

  let params = new URLSearchParams(document.location.search)

  let getLast = (arrCol: string[], col: string) => {
    if (col === arrCol[arrCol.length - 1]) {
      return {
        width: 160
      }
    } else {
      return {}
    }
  }

  const [show, setShow] = React.useState<boolean>(false)
  const [docID, setdocID] = React.useState<string>("")

  let handleSubmit = () => {
    deleteFood(docID).then(res => {
      setShow(false)
      history.push("/")
    })
      .catch(err => {
        console.log(err)
      })
  }

  let handleClose = () => {
    setShow(false)
  }

  let HandleDelete = async (docID: any) => {
    setShow(true)
    setdocID(docID)
  }

  const [newData, setNewData] = React.useState<IData[]>([])
  const [search, setSearch] = React.useState<string>("")
  const [orderBy, setOrderBy] = React.useState<string>("")

  let filterData = (datas: IData[]) => {
    if (orderBy === 'name') {
      datas = datas.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    }
    else if (orderBy === 'type') {
      datas = datas.sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      })
    }
    else if (orderBy === 'quantity') {
      datas = datas.sort((a, b) => {
        if (a.quantity < b.quantity) {
          return -1;
        }
        if (a.quantity > b.quantity) {
          return 1;
        }
        return 0;
      })
    }
    else if (orderBy === 'price') {
      datas = datas.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      })
    }
    else if (orderBy === 'nutrients ask') {
      datas = datas.sort((a, b) => {
        if (a.nutrition < b.nutrition) {
          return -1;
        }
        if (a.nutrition > b.nutrition) {
          return 1;
        }
        return 0;
      })
    }
    return datas.filter(data => data.name.toLowerCase().indexOf(search) > -1 ||
      data.nutrition.toLowerCase().indexOf(search) > -1 ||
      data.price.toLowerCase().indexOf(search) > -1 ||
      data.type.toLowerCase().indexOf(search) > -1)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <InputGroup className="mb-3">
        <FormControl
          id="searchBar"
          placeholder="Search for food"
          aria-label="Search for food"
          aria-describedby="basic-addon2"
          onChange={event => setSearch(event.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" className="btn-default" style={{ width: 100 }}>
            <i className="fa fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Table id="tableData" responsive striped bordered hover>
        <thead>
          <tr>
            {column.map(col => {
              return (
                <th style={getLast(column, col)} onClick={() => setOrderBy(col)}>
                  {col}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ?
            filterData(data).map((res, key) => {
              params.set("name", res.name)
              params.set("price", res.price)
              params.set("quantity", res.quantity.toString())
              params.set("type", res.type)
              params.set("nutrition", res.nutrition)

              let total = parseInt(res.price) * Number(res.quantity)

              return (
                <tr key={key}>
                  <td>{count++}</td>
                  <td>{res.name}</td>
                  <td>php {res.price}</td>
                  <td>{res.quantity}</td>
                  <td>{total}</td>
                  <td>{res.type}</td>
                  <td>{res.nutrition}</td>
                  <td className="d-flex justify-content-around">
                    <Link to={`/update?${params}`}>
                      <Button className="btn-info">
                        Edit
                      </Button>
                    </Link>
                    <Button
                      className="btn-danger"
                      onClick={() => HandleDelete(res.name)}
                    >Delete</Button>
                  </td>
                </tr>
              )
            })
            :
            <tr style={{ position: 'relative' }}>
              <Spinner animation="border" style={{ position: 'absolute', top: '80%', left: '50%' }} role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </tr>
          }

        </tbody>
      </Table>
      <CreateModal
        buttonName="Yes"
        title="Message"
        show={show}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      >
        Are you sure you want to delete {docID}?
      </CreateModal>
    </div>
  )
}

export default TableData