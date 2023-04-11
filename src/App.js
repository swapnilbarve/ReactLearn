import React from 'react'

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


const App = () => {

  let expenses = [
    {
      id: 'e1',
      title: 'school fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'books',
      amount: 150,
      date: new Date(2022, 8, 22)
    },
    {
      id: 'e3',
      title: 'tution fee',
      amount: 150,
      date: new Date(2021, 3, 2)
    },
    {
      id: 'e4',
      title: 'Computer fee',
      amount: 250,
      date: new Date(2021, 5, 12)
    }
  ]


  return (
    <div>
     <NewExpense/>
      <Expenses item={expenses}/>
    </div>
  )
}

export default App