import React from "react";
import { Slider, Step, Button, Loading, Box } from "@alifd/next";

const slides = [
  {
    url: "https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png",
    text: "Tape Player Skin Design Competition",
  },
  {
    url: "https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg",
    text: "Mobile Phone Taobao Skin Call",
  },
  {
    url: "https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg",
    text: "Design Enabling Public Welfare",
  },
  {
    url: "https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg",
    text: "Amoy Doll Design Competition",
  },
];

const itemNodes = slides.map((item, index) => (
  <div key={index} className="slider-img-wrapper">
    <img draggable={false} src={item.url} alt={item.text} />
  </div>
));

const steps = [
  ["Step 1", "Open the refrigerator door"],
  ["Step 2", "Put the elephant in the refrigerator"],
  ["Step 3", "Close the refrigerator door"],
].map((item, index) => (
  <Step.Item
    aria-current={index === 1 ? "step" : null}
    key={index}
    title={item[0]}
    content={item[1]}
  />
));

const Demo = () => {
  return (
      <div className="container">
        <div className="App">
          <Slider autoplay={true}>{itemNodes}</Slider>
          <Box spacing={100} margin={[100, 200]}>
            <Step current={1} stretch shape="dot" labelPlacement="ver">
              <Step.Item title="步骤1" />
              <Step.Item title="步骤2" />
              <Step.Item title="步骤3" />
            </Step>
          </Box>
          <Box spacing={100} margin={[100, 200]}>
            <Step current={1} shape="arrow">
              {steps}
            </Step>
          </Box>
        </div>
      </div>
  );
};

export default Demo;
