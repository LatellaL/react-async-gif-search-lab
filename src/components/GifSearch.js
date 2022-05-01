import React, {Component} from "react";

class GifSearch extends Component {

    state = {
        text: "search"
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.gifFetch(this.state.text)
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default GifSearch