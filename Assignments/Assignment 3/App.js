// Event Component
class Event extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h6>{this.props.date}</h6>
        <p>{this.props.description}</p>  
      </div>
    )
  }
}      
      
      
// EventFeed Component

// Search Component

// App Component


// render here
const root = ReactDOM.createRoot(document.getElementById("root"));

// complete this code