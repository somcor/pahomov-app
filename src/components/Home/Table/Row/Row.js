import React from 'react';

class Row extends React.Component {
  state = {
    removed: false
  }

  handleAdd = () => {
    let { removed } = this.state;
    removed = !removed;
    this.setState({ removed });
  }

  handleDelete = () => {
    let { removed } = this.state;
    removed = !removed;
    this.setState({ removed });
  }

  render(){
    return (
      <div className={"table-row " + (this.state.removed ? "table-row--add" : "")}>
        <div className="table-cell table-cell--image"><div className="table-cell__image" style={{'backgroundImage': `url(${this.props.image})`}}></div></div>
        <div className="table-cell table-cell--mobile">Наименование</div>
        <div className="table-cell table-cell--title">{this.props.title}</div>
        <div className="table-cell table-cell--mobile">Кол-во</div>
        <div className="table-cell">{this.props.amount}</div>
        <div className="table-cell table-cell--mobile">Цена за ед, ₽</div>
        <div className="table-cell">{this.props.singleprice}</div>
        <div className="table-cell table-cell--mobile">Стоимость, ₽</div>
        <div className="table-cell">{this.props.price}</div>
        <div className="table-cell table-cell--btn">
          {this.state.removed ? <div className="table-cell__btn table-cell__btn--add" onClick={this.handleAdd}></div> : <div className="table-cell__btn table-cell__btn--remove" onClick={this.handleDelete}></div> }
        </div>
      </div>
    )
  }
}
export default Row;