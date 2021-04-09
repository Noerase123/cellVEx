import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap'
import {IData, arrCol} from '../../interface/tableData/tabledata'
import { IModal } from '../../interface/modal/modal'
import UpdateInput from '../update/UpdateInput'

interface ITable {
  data: IData[]
  updateMethod: (params: any) => void
  deleteMethod: (params: any) => void
}

const TableData: React.FC<ITable> = props => {
  let { data, updateMethod } = props
  var count = 1

  //modal open/close
  const [show, setShow] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);

  //modal handling (update)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal handling (delete)
  const deleteModalShow = () => setShowDelete(true)
  const deleteModalClose = () => setShowDelete(false)
  
  let getLast = (arrCol: string[], col: string) => {
    if (col === arrCol[arrCol.length - 1]) {
      return {
        width: 160
      }
    } else {
      return {}
    }
  }
  return (
    <div style={{marginTop:20}}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            {arrCol.map(col => {
              return (
                <th style={getLast(arrCol,col)}>{col}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(res => {
            return (
              <tr>
                <td>{ count++}</td>
                <td>{res.name}</td>
                <td>{res.price}</td>
                <td>{res.quantity}</td>
                <td>{res.type}</td>
                <td>{res.nutrition}</td>
                <td className="d-flex justify-content-around">
                  <Button
                    className="btn-info"
                    onClick={handleShow}
                  >Edit</Button>
                  <Button
                    className="btn-danger"
                    onClick={deleteModalShow}
                  >Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default TableData