"use client";
import React, { useState } from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import "./style.css";

const Home = () => {
  const [english, setEnglish] = useState(0);
  const [math, setMath] = useState(0);
  const [filipino, setFilipino] = useState(0);
  const [pe, setPe] = useState(0);
  const [average, setAverage] = useState(0);

  const calculateAverage = () => {
    const total =
      parseFloat(english) +
      parseFloat(math) +
      parseFloat(filipino) +
      parseFloat(pe);
    setAverage(total / 4);
  };

  return (
    <div className="flex justify-center">
      <Col xs={12} md={6} className="border border-solid rounded-3xl ">
        <div className="px-[10vw] py-[5vw] md:px-[5vw] p-10">
          <h1 className="calc">CALCULATOR</h1>
          <Col>
            <span> English:</span>
            <input
              type="number"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
          </Col>
          <br />
          <label>
            Math:
            <input
              type="number"
              value={math}
              onChange={(e) => setMath(e.target.value)}
            />
          </label>
          <br />
          <label>
            Filipino:
            <input
              type="number"
              value={filipino}
              onChange={(e) => setFilipino(e.target.value)}
            />
          </label>
          <br />
          <label>
            PE:
            <input
              type="number"
              value={pe}
              onChange={(e) => setPe(e.target.value)}
            />
          </label>
          <br />

          <h2>
            Average:{" "}
            <span className={average >= 50 ? "pass" : "fail"}>{average}</span>
          </h2>
          {average >= 50 ? (
            <Image
              src="/assets/images/hap.jpg"
              alt="Result"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/assets/images/sad.jpg"
              alt="Result"
              width={100}
              height={100}
            />
          )}

          <br />
          <button onClick={calculateAverage}>Compute</button>
        </div>
      </Col>
    </div>
  );
};

export default Home;
