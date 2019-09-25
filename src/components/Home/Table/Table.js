import React from 'react';
import { connect } from 'react-redux';
import './Table.css';

import Row from '../../../components/Home/Table/Row/Row';

class Table extends React.Component {

  render(){
    return (
      <div className="table">
      <div className="table-row table-row--header">
        <div className="table-cell"></div>
        <div className="table-cell table-cell--title">Наименование</div>
        <div className="table-cell">Кол-во</div>
        <div className="table-cell">Цена за ед, ₽</div>
        <div className="table-cell">Стоимость, ₽</div>
        <div className="table-cell"></div>
      </div>

      {this.props.items.map((item, index) => {
        return <Row key={index} title={item.title} amount={item.amount} singleprice={item.singleprice} price={item.price} image={item.image} />
      })}
      
    </div>
    )
  }
}

const putStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(putStateToProps)(Table);