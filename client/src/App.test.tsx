import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import { foodList, findOne, addFood, updateFood, deleteFood } from './server/api/foodServices'
import {IData} from '../src/interface/tableData/tabledata'
import {Facts} from './server/vendor/foodFacts'

test('Test FoodList service', async () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  let listData  = await foodList()
  expect(listData)
});

test('Test FindOne service', async () => {
  let docID = "apple"
  let findData  = await findOne(docID)
  expect(findData)
});

test('Test addFood service', async () => {
  let addData: IData = {
    "name": "apple",
    "price": "45",
    "quantity": 2,
    "type": "Fruits",
    "nutrition": "Vitamin C"
  }
  let submit  = await addFood(addData)
  expect(submit)
});

test('Test updateFood service', async () => {
  let docID = "apple"
  let updateData: IData = {
    "name": "apple",
    "price": "45",
    "quantity": 2,
    "type": "Fruits",
    "nutrition": "Vitamin C"
  }
  let update  = await updateFood(docID,updateData)
  expect(update)
});

test('Test deleteOne service', async () => {
  let docID = "apple"
  let deleteTest = await deleteFood(docID)
  expect(deleteTest)
});

test('Test foodFacts service', async () => {
  let facts = "How much Vitamin A does an apple?"
  let factTest = await Facts(facts)
  expect(factTest)
});