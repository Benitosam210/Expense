import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '45.43',
      date: new Date (2020, 7,8)
    },
    {
      id: 'e2',
      title: 'Tv',
      amount: '495.43',
      date: new Date (2020, 7,21)
    },
    {
      id: 'e3',
      title: 'Car Insurence',
      amount: '450.43',
      date: new Date (2020, 9,8)
    },
    {
      id: 'e4',
      title: 'Paper',
      amount: '4.43',
      date: new Date (2020, 7,18)
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
