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
class EventFeed extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let events = this.props.events
    this.props.events.sort((a,b)=>{
      return new Date(b.date) - new Date(a.date)
    })    
    return(
      <>
        <h3>Feed</h3>
        {
          this.props.events.map(event=>{    
            return <Event name={event.name} date={event.date} description={event.description}/>
          })
        }
      </>
    )
  }
}

// Search Component

// App Component


// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// complete this code