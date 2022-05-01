import React, {Component} from "react";
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    gifFetch = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=nBiFnz3nLqf0FSbRqIONQlKvEvc8xfqJ&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            let gifs = []
            for (let i = 0; i < 3; i++) {
                gifs.push(data.data[i])
            }
            this.setState({
                gifs: gifs
            })
        })
    }

    componentDidMount() {
        this.gifFetch()
    }

    render() {
        return(
            <div>
                <GifSearch gifFetch={this.gifFetch} /> 
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer