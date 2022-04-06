import React,{Component} from "react";
import "./Usuario.css"
class Usuario extends Component{
    constructor(props){
        super(props);
        this.state = {
            age:props.age
        }
    }

    birthday = () => {
        let actualAge = this.state.age;
        actualAge++;
        this.setState({age:actualAge});
    }

    render(){
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className="card">
                <h1>{lastName}, {firstName}</h1>
                <div className="card-body">
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
                <button onClick={this.birthday}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default Usuario;