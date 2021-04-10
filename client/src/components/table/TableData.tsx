import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Table, Button, Spinner, InputGroup, FormControl } from 'react-bootstrap'
import { IData, arrCol } from '../../interface/tableData/tabledata'
import CreateModal from '../modal/CreateModal'
import { deleteFood } from '../../server/api/foodServices'
import './data.js'

interface ITable {
  data: IData[]
  // updateMethod: (params: any) => void
  // deleteMethod: (params: any) => void
}

const TableData: React.FC<ITable> = props => {
  let history = useHistory()
  let { data } = props
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
    // await deleteFood(docID)
  }
  
  return (
    <div style={{ marginTop: 20 }}>
      <InputGroup className="mb-3">
        <FormControl
          id="searchBar"
          placeholder="Search for food"
          aria-label="Search for food"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" className="btn-default" style={{width:100}}>
            <i className="fa fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            {arrCol.map(col => {
              return (
                <th style={getLast(arrCol, col)}> 
                  {col}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? 
            data.map((res, key) => {
              params.set("name",res.name)
              params.set("price",res.price)
              params.set("quantity",res.quantity.toString())
              params.set("type",res.type)
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
          <tr style={{position:'relative'}}>
            <Spinner animation="border" style={{position:'absolute', top: '80%', left: '50%'}} role="status">
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