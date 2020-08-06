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
async componentDidMount() {
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

  await Promise
    .all([promise1, promise2, promise3, promise4, promise5, promise6, promise7])
    .then(axios.spread((...response) => {
      let answers =[];
      answers.push(response[0].data.born);
      answers.push(response[1].data.region);
      answers.push(response[2].data.coatOfArms);
      answers.push(response[3].data.seats[1]);
      answers.push(response[4].data.aliases[2]);
      answers.push(response[5].data.words);
      let books = response[6].data.povBooks;
      let booksresult = books.map(b=>{
        return axios.get(b);
      });
      console.log(booksresult);
      Promise
        .all(booksresult)
        .then(axios.spread((...res)=>{
         // let ans =[];
          answers.push(res[0].data.name);
          answers.push(res[1].data.name);
          answers.push(res[2].data.name);
          //answers.push(ans);
          //console.log(ans);
          this.setState({data: answers});
          console.log(answers);
        }));
      
      //this.setState({data: answers});
      //console.log(answers);
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
    <h1>What region is House Targaryen in?</h1>
    {this.state.data[1]}
    <h1>What's the coat of arms of House Lannister?</h1>
    {this.state.data[2]}
    <h1>What is the second seat of House Baratheon?</h1>
    {this.state.data[3]}
    <h1>What is Robert Baratheon's second alias?</h1>
    {this.state.data[4]}
    <h1>What's the name of the founder of House Stark?</h1>
    {this.state.data[5]}
    <h1>What are the titles of Catelyn Stark's three POV books?</h1>
    {this.state.data[6]}<br />
    {this.state.data[7]}<br />
    {this.state.data[8]}<br />
    
    </div>
  )
}
}

export default App;