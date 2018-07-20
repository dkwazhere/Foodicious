import React, { Component } from 'react';


class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
          term: '',
          drinks: ''
        };
      }


      onChange = (event) => {
        this.setState({ term: event.target.value });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const api_key = '1';
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.term}&api_key=${api_key}`;
        fetch(url)
          .then(response => response.json())
          .then(data => this.setState({ term:'', drinks: data }))
          .catch(e => console.log('error', e));
      }

    render() {
        console.log(this.state.drinks)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
          </form>


          <div>
              {this.state.drinks.map(( drink => 
              <p> {drink} </p>
            ))}
              </div>

          {/* <React.Fragment>
              {this.state.drinks.map( drink => (
                  <React.Fragment key={drinks.id}>
                  <p>{drinks} </p>
                  </React.Fragment>
              ))}
              </React.Fragment> */}
          </div>
        )
    }
}

export default Input;