import React from 'react';

import Header from '../../components/Home/Header/Header';
import Table from '../../components/Home/Table/Table';

class Basket extends React.Component {

  render() {
    return (
      <div className="container">
        <Header title="Результаты расчёта" />
        <Table/>
      </div>
    )
  }
}

export default Basket;