import React from 'react';

class Settings extends React.Component {
  constructor(props){
    super(props);

    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(e){
    const { name,value } = e.target;
    this.props.liftData(name,value);
  }

  render(){
    return (
      <div className="settings">
              <div className="form-group row">
                <div className="col-sm-2">
                  <select name="order" className="form-control" onChange={this.handleChange}>
                    <option value="no">Без</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
                <div className="col-sm-10">
                  <input type="text" placeholder="Поиск по имени" className="form-control" 
                  name="search" onChange={this.handleChange} />
                </div> 
              </div>
            </div>
      )
    }
}

export default Settings