import React, {useState, useEffect} from 'react'
import {store} from '../redux/store'
import Content from '../components/container/content'
import NavHeader from '../components/navheader/NavHeader'
import Header from '../components/header/Header'
import FormVal from '../components/form/FormVal'
import { Form, Button, Breadcrumb, Row, Col, Image, Spinner } from 'react-bootstrap'
import { updateFood, deleteFood } from '../server/api/foodServices'
import { IData } from '../interface/tableData/tabledata'
import Skeleton from 'react-loading-skeleton'
import { useHistory } from "react-router-dom";
import { Facts } from '../server/vendor/foodFacts'
import DropDown from './dropdown/DropDown'
  
const UpdatePage: React.FC = () => {
  let history = useHistory()

  let [isLoading, setIsLoading] = useState<boolean>(true)
  let [isLoading2, setIsLoading2] = useState<boolean>(true)
  let [isLoading3, setIsLoading3] = useState<boolean>(true)
  let [isLoading4, setIsLoading4] = useState<boolean>(true)

  let params = new URLSearchParams(document.location.search)

  let data:IData = {
    name: params.get('name') as string,
    price: params.get('price') as string,
    quantity: params.get('quantity') as any,
    type: params.get('type') as string,
    nutrition: params.get('nutrition') as string
  }

  const [name, setName] = useState<string>(data.name)
  const [price, setPrice] = useState<string>(data.price)
  const [quantity, setQuantity] = useState<string>(`${data.quantity}`)
  const [type, setType] = useState<string>(data.type)
  const [facts, setFacts] = useState<string>(data.nutrition)

  useEffect(() => {
    implementVendorData()
    setTimeout(() => {
      setIsLoading(false)
    },300)
    setTimeout(() => {
      setIsLoading2(false)
    },500)
    setTimeout(() => {
      setIsLoading3(false)
    },700)
    setTimeout(() => {
      setIsLoading4(false)
    },900)
  }, [])

  const [eanswer, setEAnswer] = useState<string>("")
  const [eimage, setEImage] = useState<string>("")
  const [etype, setEType] = useState<string>("")
  const [eLoading, setEloading] = useState<boolean>(true)
  
  const implementVendorData = async () => {
    try {
      const response = await Facts(data.nutrition+' ' + data.quantity + ' ' + data.name + '?')
      if (response.data === undefined) {
        setEAnswer("No Data");
        setEImage("No");
        setEType("No Data");
        setEloading(false)
      } else {
        setEAnswer(response.data.answer);
        setEImage(response.data.image);
        setEType(response.data.type);
        setEloading(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleUpdate = async () => {

    const payload = {
      "name": name,
      "price": price,
      "quantity": quantity,
      "type": type,
      "nutrition": facts
    }
    try {
      await updateFood(name, payload)
      history.push("/")
      store.dispatch({type: 'updated'})
    }
    catch (error) {
      console.log(error)
    }

  }

  const handleDelete = async () => {
    try {
      await deleteFood(data.name)
      history.push("/")
    }
    catch (error) {
      console.log(error)
    }
  }
  
  let fontStyle = {
    fontFamily: '"Times New Roman", Times, serif'
  }

  return (
    <div style={fontStyle}>
      <NavHeader title="CRUD" />
      <Content>
        <Header title="Update your Food">
        </Header>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Food List</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit {data.name}</Breadcrumb.Item>
          </Breadcrumb>
        <hr />
        <Row>
          <Col xs={6}>
            <div style={{ position: 'relative' }}>
              {eLoading ? 
              <Spinner animation="border" style={{position:'absolute', top: 50, left: 250}} role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
                :
                <div>
                  <div className="d-flex justify-content-center">
                    <Image src={eimage} rounded style={{width:'50%'}}/>
                  </div>
                  <hr />
                  <h3>Facts: <small>{eanswer}</small></h3>
                  <h5>{`TYPE: ${etype}`}</h5>
                </div>
              }
            </div>
          </Col>
          <Col xs={6}>
          <div className="d-flex justify-content-center">
              <Form style={{width:'100%'}}>
                {isLoading ?
                <div>
                  <Skeleton style={{width:'20%'}}/>
                  <Skeleton style={{padding:10}} />
                </div>
                  :
                <FormVal
                  label="Name"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onchange={event => setName(event.target.value)}
                  disabled={true}
                />
                }
                {isLoading2 ? 
                <div>
                  <Skeleton style={{width:'20%'}}/>
                  <Skeleton style={{padding:10}} />
                </div>
                  :
                <FormVal
                  label="Price"
                  type="text"
                  placeholder="Enter price"
                  value={price}
                  onchange={event => setPrice(event.target.value)}
                />
                }
                {isLoading3 ? 
                <div>
                  <Skeleton style={{width:'20%'}}/>
                  <Skeleton style={{padding:10}} />
                </div>
                :
                <FormVal
                  label="Quantity"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onchange={event => setQuantity(event.target.value)}
                />
                }
                {isLoading4 ? 
                <div>
                  <Skeleton style={{width:'20%'}}/>
                  <Skeleton style={{padding:10}} />
                </div>
                  :
                  <div>
                    <DropDown
                      label="Type"
                      default_item={type}
                      items={["Fruits", "Vegetables", "Meat", "Snacks"]}
                      onchange={event => setType(event.target.value)}
                      value={type}
                    />
                    <FormVal
                      label="Nutrient Ask"
                      type="text"
                      placeholder="Ask"
                      value={facts}
                      onchange={event => setFacts(event.target.value)}
                    />
                  </div>
                }
                <Button
                  className="form-control btn-info"
                  onClick={handleUpdate}
                >Update</Button>
                <br/><br/>
                <Button
                  className="form-control btn-danger"
                  onClick={handleDelete}
                >Delete</Button>
                <div style={{marginBottom:40}}></div>
              </Form>
            </div>
          </Col>
        </Row>
        
      </Content>
    </div>
  )
}
export default UpdatePage