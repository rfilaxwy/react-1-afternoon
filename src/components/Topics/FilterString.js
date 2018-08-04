import React, {Component} from 'react';

class FilterString extends Component {
    constructor(props){
        super(props);
        this.state = {
            unfilteredArray:['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput:'',
            filteredArray:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterString = this.filterString.bind(this);
    
    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterString(prop){
        
        const names = this.state.unfilteredArray;
        const filteredAr = names.filter((x) =>{
            return x.includes(prop)
        })
        this.setState({filteredArray: filteredAr});
    
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Filter String </h4>
                <span className='puzzleText'> UnfilteredArray: { JSON.stringify(this.state.unfilteredArray, 10, null) } </span>
                <input className='inputLine'onChange={ (e) => this.handleChange(e.target.value) } ></input>
                <button className='confirmationButton' onClick={ () => {this.filterString(this.state.userInput)}} > Filter  </button>
                <span className='resultBox filterStringRB'>FilteredArray: { JSON.stringify(this.state.filteredArray, 10, null) } </span>
            </div>
        )
    }
}

export default FilterString