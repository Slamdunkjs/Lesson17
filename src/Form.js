import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChance = this.handleChance.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChance(e){
    const { name, value } = e.target;
    var object = {};
    object[name] = value;
    this.setState(object);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {id, name, owner, date, time, content } = this.state;
    const objectNew = { id, name, owner, date, time, content };
    this.props.addNote(objectNew);
    e.target.reset();
    this.state.id= '';
    this.state.name= '';
    this.state.owner= '';
    this.state.date= '';
    this.state.time= '';
    this.state.content= '';
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Имя животного</label>
              <div className="col-sm-10">
                <input type="text" placeholder="Имя" className="form-control" name="name" onChange={this.handleChance}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Владелец</label>
              <div className="col-sm-10">
                <input type="text" placeholder="Владелец" className="form-control" name="owner" onChange={this.handleChance}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Дата</label>
              <div className="col-sm-10">
                <input type="date" className="form-control" name="date" onChange={this.handleChance}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Время</label>
              <div className="col-sm-10">
                <input type="time" className="form-control" name="time" onChange={this.handleChance}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Заметки</label>
              <div className="col-sm-10">
                <textarea placeholder="Заметки" name="content" className="form-control" onChange={this.handleChance}></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10">
                <input type="submit" className="btn btn-primary" value="Добавить"/>
              </div>
            </div>
          </form>
      </div>
    )
  }
}

export default Form
