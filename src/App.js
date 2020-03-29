import React from 'react';
import {CardList} from './Component/card-list.component';
import './App.css'
import './Component/search-box/search-box.style.css'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            users:[

            ],
            searchField:''
        };
    }
    componentDidMount(){
        fetch('http://localhost/demo1/php/users.php')
        .then(response=>
            response.json()
        )
        .then(user=>
           this.setState({users:user}));
    }
    render(){
        const {users ,searchField}=this.state;
        const filteredMonsters = users.filter(function(user){
            return user.fname.toLowerCase().includes(searchField.toLowerCase());
        }
        );
       
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
       <input type='search' className='search' onChange={e=> this.setState({searchField:e.target.value})} placeholder='Search Monster'/>
    <CardList users={filteredMonsters} />
    </div>
  );
}
}

export default App;
