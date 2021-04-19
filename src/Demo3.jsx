import React, { Component } from "react";
import { getPr3wnfjf } from "./api/Api";
import "./App.css";
import Demo from "./Demo";
import { Button, Loading, Notification } from "@alifd/next";

export default class Demo3 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
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

  handleClick(param) {
    this.setState({ isLoading: true });
    getPr3wnfjf("/hello/delay?ds=hi&type=" + param)
      .then((data) => {
        this.setState({ isLoading: false, data: data.data.data }, () => {
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false, error: "接口报错了!!!!" }, () => {
          this.openNotification();
        });
      });
  }

  render() {
    return (
      <Loading tip="loading..."  visible={this.state.isLoading}>
        <div>
          <div className="container">
            <h2>
              这是加载回来的数据:
              {this.state.isLoading ? null : this.state.data}
            </h2>
            <h2>
              这是路由地址: {this.props.location.pathname}
              {this.state.isLoading ? null : this.state.data}
            </h2>
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
