import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props)
        this.state ={
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            
            userInput: '',
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.filtObj = this.filtObj.bind(this);
    }
    handleChange(val){
        this.setState({userInput:val})
    }

    filtObj(prop){
        
        const employee =this.state.employees; 
        const fArray=[];
        for(let i = 0 ; i < employee.length;i++){
            if(employee[i].hasOwnProperty(prop)){
                fArray.push(employee[i]);
            }
        }
        this.setState({filteredArray:fArray})
    }

    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object </h4>
                <span className='puzzleText' > Unfiltered Array: { JSON.stringify(this.state.employees, 10, null) } </span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className='confirmationButton' onClick={ () => this.filtObj(this.state.userInput)} > Filter </button>
                <span className='resultBox filterObjectRB'> Filtered Array { JSON.stringify(this.state.filteredArray,10,null) } </span>
            </div>
        )
    }
}

export default FilterObject;