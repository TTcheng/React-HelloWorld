import React,{Component} from 'react'
import ReactDom from 'react-dom'

class MessageBox extends Component{
  alertMe(){
    alert('You just clicked me !!!!');
  }
  render(){
    return <h1 onClick = {this.alertMe}>Hello World!!! </h1>;
  }
}

ReactDom.render(
  <MessageBox />,
  document.getElementById('app')
)
