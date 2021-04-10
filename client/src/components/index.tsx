import React, {useState, useEffect} from 'react'
import Content from './container/content'
import NavHeader from './navheader/NavHeader'
import Header from './header/Header'
import CreateInput from './create/Create'
import TableData from './table/TableData'
import { IData } from '../interface/tableData/tabledata'
import { foodList, addFood } from '../server/api/foodServices'
import background from '../bg.jpg'

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
    fetchFood()
  }, [])

  let fontStyle = {
    fontFamily: '"Times New Roman", Times, serif'
  }
  let bgStyle = {
    width: 1350,
    height: 200,
    opacity: 0.6
  }

  return (
    <div style={fontStyle}>
      <NavHeader title="CRUD"/>
        <img src={background} style={bgStyle}/>
      <Content>
        <Header title="Food List">
          <CreateInput addMethod={addFood}/>
        </Header>
        <TableData
          data={data}
          // updateMethod={updateFood}
          // deleteMethod={deleteFood}
        />
      </Content>
    </div>
  )
}

export default Home