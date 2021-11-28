import React,{Component} from "react";

//class App extends Component {
  //render(){
    //return (
  //  <React.Fragment>
  //  <label htmlFor="bar">bar</label>
  ///  <input type = "text" onChange = {()=>{console.log("I am clicked !")}}/>
  ///  </React.Fragment>
//  )
//  }
//}

const User = (props)=>{
  return (
    <div>
    Hi, I am {props.name}! an {props.age} years old!
    </div>
  )
}

User.defaultProps = {
  age:1
}

const App = ()=>{
  const profiles = [
    {name: "Taro",age:10},
    {name: "Hanko",age:6},
    {name:"Noname",}
  ]
  return (
    <div>
    {
    profiles.map((profile,index) => {
      return <User name={profile.name} age =  {profile.age} key = {index}/>
})}
  </div>
  )
}
export default App;
