import React, { Component } from 'react';

class App extends Component {

state={
  person_list:[]
};
async componentDidMount(){
  try{
      const res= await fetch("http://127.0.0.1:8000/person/person_list/");
      const person_list=await res.json();
      this.setState({
        person_list
      });
  }catch(e){
    console.log(e);
  }
}

  render() {
    //console.log(this.state.person_list[0].name);
    return (
      <div>
        {this.state.person_list.map(item => (
          <div >
            <h1>{item.name}</h1>
            <span>{item.age}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;