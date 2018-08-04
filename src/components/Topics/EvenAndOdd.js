import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.evOdParse = this.evOdParse.bind(this);
    }

        handleChange(val){
            this.setState({ userInput: val });
        }

        evOdParse(userInput){
           const arr = userInput.split('');
           const evens = [];
           const odds = [];

           for(let i = 0; i < arr.length; i++){
               if(arr[i]%2===0){
                   evens.push(parseInt(arr[i], 10) );
               } else if(arr[i] % 2 !==0){
                   odds.push(parseInt(arr[i], 10) );
               }
           }
           this.setState({evenArray: evens, oddArray: odds});
        }

    
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton' onClick={ () => {this.evOdParse(this.state.userInput)} } > Split </button>
                <span className='resultBox'>Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
                <span>{this.state.userInput}</span>
            </div>
        )
    }
}

export default EvenAndOdd;