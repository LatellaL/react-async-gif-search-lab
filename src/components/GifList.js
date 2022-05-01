import React, { Component } from "react";

class GifList extends Component {

    list = () => {
        return this.props.gifs.map(gif => {
            return <li key={gif.images.original.url}><img src={gif.images.original.url} alt=""></img></li>
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {this.list()}
                </ul>
            </div>
        )
    }
}

export default GifList