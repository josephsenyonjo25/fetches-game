import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    data: []
    };
}
componentDidMount() {
  let request1 ="http://www.anapioficeandfire.com/api/characters/16";
  let request2 ="http://www.anapioficeandfire.com/api/houses/378";
  let request3 ="http://www.anapioficeandfire.com/api/houses/229";
  let request4 ="http://www.anapioficeandfire.com/api/houses/17";
  let request5 ="http://www.anapioficeandfire.com/api/characters/901";
  let request6 ="http://www.anapioficeandfire.com/api/houses/362";
  let request7 ="http://www.anapioficeandfire.com/api/characters/232";

  let promise1 = axios.get(request1);
  let promise2 = axios.get(request2);
  let promise3 = axios.get(request3);
  let promise4 = axios.get(request4);
  let promise5 = axios.get(request5);
  let promise6 = axios.get(request6);
  let promise7 = axios.get(request7);

  axios
    .all([promise1, promise2, promise3, promise4, promise5, promise6, promise7])
    .then(axios.spread((...response) => {
      let answers =[];
      answers.push(response[0].data.born);
      answers.push(response[1].data.region);
      answers.push(response[2].data.coatOfArms);
      answers.push(response[3].data.seats[1]);
      answers.push(response[4].data.aliases[2]);
      answers.push(response[5].data.words);
      answers.push(response[6].data.books);
     
      
      this.setState({data: answers});
      console.log(answers);
    }));
      
      

  //axios
  //.get('http://anapioficeandfire.com/api/characters/16')
  //.then(response => this.setState({data: res})) 
    //console.log(response.data)
  
  //.catch(error => {
   // console.log(error);
 // });
}
  


render() {
  return(
    <div>
    <h1>Where was Margaery Tyrell born?</h1>
    {this.state.data[0]}
    </div>
  )
}
}

export default App;