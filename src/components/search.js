import React, { Component } from 'react';
import axios from "axios";


class Search extends Component {

    state = {
        comment: "",
        url: "",
        term: ""
    };

    onInputChange(term) {
        this.setState({term});
        console.log({term});
    };

    hanleclick(term) {
        alert(term)
        let url = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats"
        return axios.get(url)
            .then(res => {
                return res.data.image_original_url;
                
            });
    }

    render() {
        return (
            <div className="App">


                <div>
                <input onChange={event => this.onInputChange(event.target.value)} />
                    <button onClick={this.hanleclick}> Submit </button>
                </div>


            </div>
        );
    }

}


export default Search;

