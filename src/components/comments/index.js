import React from "react";
import { MyCoolButton } from "../MyCoolButton";
export class Comment extends React.Component{
    constructor(){
        super();

        this.state = {
            publisher: "",
            comment: ""
        };
    };

    bichih = (e) => {
        this.setState({comment: e.target.value});
    };

    render(){
        return (
            <div>
                <div>{this.state.comment}</div>
                <div>{this.props.zohiogch}</div>
                <br/>
                <input onChange={this.bichih} type="text" placeholder="write your comment" />
                <MyCoolButton 
                    comment = {this.state.comment}
                    tovchner = "comment button  "
                    text = "хадгалах"
                />
            </div>
            
        )
    }
}