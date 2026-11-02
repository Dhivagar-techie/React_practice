function Comp(props) {
  if (props.loggedin) {
    return <h2>Welcome {props.userName}</h2>;
  }
  else{
    return <h2>{props.userName} is not logged in</h2>
  }
}

export default Comp
