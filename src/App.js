import React from 'react';
import {CardList} from './Component/card-list.component';
import './App.css';
import './Component/search-box/search-box.style.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            searchField:''
        };
    }
    componentDidMount(){
        fetch('your rest url')
        .then(response=>
            response.json()
        )
        .then(users=>
           this.setState({users:users}));
    }
    render(){
        const {users ,searchField}=this.state;
        const filteredMonsters = users.filter(function(user){
            return user.fname.toLowerCase().includes(searchField.toLowerCase());
        }
        );
       
  return (
    <div className='App'>
      <h1>Monster Horror</h1>
       <input type='search' className='search' onChange={event=> this.setState({searchField:event.target.value})} placeholder='Search Monster'/>
    <CardList users={filteredMonsters} />
    </div>
  );
}
}

export default App;
