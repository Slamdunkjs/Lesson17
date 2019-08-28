import React from 'react';

import Form from './Form';
import PetsList from './PetsList';
import Settings from './Settings';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = { 
      pets: [],
      uniqueId: 1,
      search: '',
      order: 'no',
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.liftData = this.liftData.bind(this);
  }

  addNote(pet) {
    pet.id = this.state.uniqueId;
    const copy = [...this.state.pets, pet];
    this.setState({ pets: copy, uniqueId: this.state.uniqueId + 1 });
  }

  removeNote(id){
    const copy = this.state.pets.filter(pet=>pet.id!==id)
    this.setState({ pets: copy })
  }

  liftData(name, value){
    this.setState({ [name]:value }) 
  }

  render() {
    const {search,order} = this.state;

    let copy = [...this.state.pets];

    if (search){
      copy = copy.filter(pet=>pet.name.toLowerCase().includes(search.toLowerCase()));
    }
    
      // const flag = 1;

    if (['az','za'].includes(order)){
      if (order==='az'){
        copy.sort((a,b) => (a.name>b.name) ? 1 : -1)
      } else {
        copy.sort((a,b) => (a.name>b.name) ? -1 : 1)
      }
    }

    // if (order==='az'){
    //    copy.sort((a,b) => (a.name>b.name) ? 1 : -1)
    // }

    // if (order==='za'){
    //    copy.sort((a,b) => (a.name>b.name) ? -1 : 1)
    // }

    


    // if(order === 'az'){
    //   copy.sort(function(a,b){
    //     if (a.name>b.name){
    //       return 1;
    //     } 
    //     return -1        
    //   })
    // } else if (order === 'za'){
    //   copy.sort(function(a,b){
    //     if (a.name>b.name){
    //       return -1;
    //     } 
    //     return 1        
    //   })
    // }

    console.log(this.state.pets)
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-8 offset-2">
            <Form addNote={this.addNote} />
            <Settings liftData={this.liftData}/>
            <PetsList pets={copy} removeNote={this.removeNote}/>
           </div>
         </div>
      </div>
    )
  }
}


export default App