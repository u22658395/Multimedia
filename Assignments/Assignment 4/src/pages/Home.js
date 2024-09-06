import React from "react"
import { Link } from "react-router-dom"

export class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <>
                <h2>Hello Home Page!</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                </nav>
            </>
        )
    }
}
// u22658395 Katlego Mositi
