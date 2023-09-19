class StoreDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "This is from React implementation setState";
    }

    return <button onClick={()=>{
      this.setState({liked:true})
    }}>Click to try React inside AngularJS1.x</button>;
  }
}


setTimeout(() => {
  console.log("============================timedout===============")
  let domContainer = document.querySelector("#store");
  ReactDOM.render(<StoreDashboard />, domContainer);
}, 1000);
