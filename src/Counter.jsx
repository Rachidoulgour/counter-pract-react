import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: this.props.init || 1
        }
}
    
incrementar = () =>{ 
    if (this.state.count <3){
    this.setState({count: this.state.count+1})}
    // else{this.setState((prevState, props) => ({ count: prevState.count + 1 }))}
    else{this.setState({count: this.state.count+0})}
}
    
decrementar = () =>{
    if (this.state.count<=1){
        this.setState({count: this.state.count-0}) 
    }else{
    this.setState({count: this.state.count-1})}
};


render(){
    let countt = this.state.count
    
    return(

        <div>
            <button onClick={this.incrementar}>+</button>
            
            {this.state.count}
            {countt>1? (<div>adultos</div>):(<div>adulto</div>)}
            
            
            <button onClick={this.decrementar}>-</button>
            {/* <img src={process.env.PUBLIC_URL +"/mifoto.jpg"} alt="Mifoto"/> */}
        </div>

    )
}


}
Counter.propTypes={
    init: PropTypes.number
}
export default Counter;