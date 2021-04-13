import React, { useState, useEffect } from 'react'
import Content from './container/content'
import NavHeader from './navheader/NavHeader'
import Header from './header/Header'
import CreateInput from './create/Create'
import TableData from './table/TableData'
import {store} from '../redux/store'
import { IData, arrCol } from '../interface/tableData/tabledata'
import { foodList, addFood } from '../server/api/foodServices'
import background from '../bg.jpg'
import '../assets/css/index.css'

const Home: React.FC = () => {

  const [data, setData] = useState<IData[]>([])

  const fetchFood = async () => {
    try {  
      let response = await foodList()
      setData(response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    let state = store.getState().updated
    console.log(state)
    fetchFood()
  }, [])

  let fontStyle = {
    fontFamily: '"Times New Roman", Times, serif'
  }

  return (
    <div style={fontStyle}>
      <NavHeader title="CRUD"/>
        <img src={background} className="imgBg"/>
      <Content>
        <Header title="Food List">
          <CreateInput addMethod={addFood}/>
        </Header>
        <TableData
          data={data}
          column={arrCol}
        />
      </Content>
    </div>
  )
}

export default Home