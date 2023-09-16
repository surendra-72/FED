import React,{Component} from 'react'
class Counter extends Component {
    state={count:0,};
    
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    };

    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    };

    render() {

        return (

            <div>
                <h1>Counter Program</h1>
                <button type="button"onClick={this.incrementHandler}>+</button>&nbsp; &nbsp;
                {this.state.count}&nbsp; &nbsp;
                <button type="button"onClick={this.decrementHandler}>-</button>
            </div>

        );
    }
}

export default Counter