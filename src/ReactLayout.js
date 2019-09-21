import React,{Component} from 'react';

const items = ["A","B","C","D","E","F","G","H","I","J","K"]


class RectLayout extends Component {
  render(){
    const{item} = this.props
    return(
     <div className="container">
       {items.map((item) =>
        <div>
       <div className="rectangle row justify-content-center"key ={item} >
          <h2 className="display-4  text-center" >{item}</h2>

          </div>
          </div>
      
       )}
     </div>
    )
  }
}

export default RectLayout