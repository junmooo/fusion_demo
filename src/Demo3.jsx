import React, { Component } from "react";
import { getPr3wnfjf } from "./api/Api";
import "./App.css";
import Demo from "./Demo";
import { Button, Loading, Notification } from "@alifd/next";

export default class Demo3 extends Component {

  state = {
    isLoading: false,
  };
  openNotification = () => {
    Notification.open({
      title: "====巴拉巴拉===",
      content: this.state.error,
      type: "error",
      style: {
        width: 600,
        marginLeft: -225,
      },
    });
  };

  handleClick() {
    this.setState({ isLoading: true });

    const todayPromise = getPr3wnfjf("/hello/delay?ds=hi&type=" + 1800);
    const sevenPromise = getPr3wnfjf("/hello/delay?ds=hi&type=" + 800);
    const fourteenPromise = getPr3wnfjf("/hello/delay?ds=hi&type=" + 2800);
    const tweentyPromise = getPr3wnfjf("/hello/delay?ds=hi&type=" + 1000);

    Promise.all([todayPromise, sevenPromise, fourteenPromise, tweentyPromise])
      .then((res) => {
        this.setState({ isLoading: false, data: res });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        this.setState({ isLoading: false, content: "报错了!" });
      });
  }

  render() {
    return (
      <Loading tip="loading..." visible={this.state.isLoading}>
        <div>
          <div className="container">
            <h2>
              这是加载回来的数据:
              {this.state.isLoading ? null : JSON.stringify(this.state.data)}
            </h2>
            <h2>这是路由地址: {this.props.location.pathname}</h2>
            <Button
              type="primary"
              size="large"
              onClick={() => this.handleClick("ok")}
            >
              请求数据
            </Button>
            <br />
            <br />
            <br />
            <Button
              type="primary"
              size="large"
              onClick={() => this.handleClick("no")}
            >
              请求报错了
            </Button>
          </div>
          <Demo></Demo>
        </div>
      </Loading>
    );
  }
}
