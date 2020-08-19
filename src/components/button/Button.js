import React, { Component } from "react";
import style from "./button.module.css";

export default class Button extends Component {
  render() {
    const { loadMoreImages } = this.props;
    return (
      <div>
        <button type="button" className={style.Button} onClick={loadMoreImages}>
          Load more
        </button>
      </div>
    );
  }
}
