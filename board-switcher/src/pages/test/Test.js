import React, { Component } from "react";
import "./style.css";

class Test extends Component {

boardRender() {
    var className = "board";
    if(this.props.selected) {
        className += " selected";
    }
    return (
        <div className={className}>
            {this.props.index+1}
        </div>
    );
}
    //побробовать метод выше описать в отдельном компоненте и экспортировать сюда
render() {
    var boards = [];
    //
    for (var ii = 0; ii < 4; ii++ ) {
        boards.push(
            <div className="board" key={ii}>
                <p>{ii}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="boards">{boards}</div>
        </div>
    )
}

}

export default Test;