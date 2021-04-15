import React, { useState, useEffect } from 'react'
import Content from './container/content'
import NavHeader from './navheader/NavHeader'
import Header from './header/Header'
import CreateInput from './create/Create'
import TableData from './table/TableData'
import { IData, arrCol } from '../interface/tableData/tabledata'
import { addFood } from '../server/api/foodServices'
import background from '../bg.jpg'
import '../assets/css/index.css'
import {connect} from 'react-redux'

interface IProps {
  foods: IData[]
}

const Home: React.FC<IProps> = props => {
  let { foods } = props

  const [data, setData] = useState<IData[]>([])

  const fetchData = async () => {
    return await foods
  }

  useEffect(() => {
    setInterval(() => 
    fetchData().then(res => setData(res)), 1000)
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

const mapStateToProps = (state: any) => {
  return {
    foods: state.list
  }
}

export default connect(mapStateToProps)(Home)