import React, { Component } from "react";
import "./Dome2.css";
import data from "./data.json"

export default class Demo2 extends Component {
  render() {
    // type:年、月或者日 Y M D 
    // data:日期 "" 空字符串就是今天 也可以  20210413 或者 2021-04-13
    // 加减量 需要加几天或者几个月 可以传负数 但是必须是整数
    function addOrReduceDate(type, date, num) {
      var nowDate = null;
      var strDate = "";
      num = parseInt(num); // 防止传入字符串报错
      if (date == "") {
        nowDate = new Date();
      } else if (date.length == 8 && date.indexOf("-") == -1) {
        date = date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6);
        nowDate = new Date(date);
      } else if (date.length == 10 && date.indexOf("-") != -1) {
        nowDate = new Date(date);
      } else {
        console.log(
          "输入的日期格式不对,可以输入'' 或者 yyyy-MM-dd 或者 yyyyMMdd"
        );
      }

      if (type === "Y") {
        nowDate.setFullYear(nowDate.getFullYear() + num);
      }
      if (type === "M") {
        nowDate.setMonth(nowDate.getMonth() + num);
      }
      if (type === "D") {
        nowDate.setDate(nowDate.getDate() + num);
      }
      var year = nowDate.getFullYear(); // 年
      var month = nowDate.getMonth() + 1; // 月
      strDate = nowDate.getDate(); //日
      var seconds = nowDate.getSeconds(); // 秒
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
      }
      var dateStr = year + month + strDate;
      return dateStr;
    }
    // console.log(addOrReduceDate("D", "", "-7"));
    console.log(data);
    var arr = data.data
    arr.sort((a, b) => a['fsp'] > b['fsp'] ? 1 : -1);

    console.log(arr)
    return <div className="container"></div>;
  }
}
