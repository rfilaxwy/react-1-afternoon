import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props)
        this.state={
            userInput:'',
            palindrome:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.palindromed =  this.palindromed.bind(this);
    }
    handleChange(val){
        this.setState({userInput:val});
    }

    palindromed(prop){
        const reversed = this.state.userInput.split('').reverse().join('')
        if(this.state.userInput===reversed){
            this.setState({palindrome:'This is a palindrome.'})
        } else{
            this.setState({palindrome:'This is not a palindrome.'})
        }
    }

    render() {
        return (

            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome </h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => {this.palindromed(this.state.userInput)}}>Pally Tester</button>
                <span className='resultsBox'>{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;