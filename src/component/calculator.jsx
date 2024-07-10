import { useState } from "react";
import { buttons, maindiv } from "./calculator-style";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handlebtn = (e) => {
    const value = e.target.value;
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      if (input.trim() === "") {
        setResult("Error");
      } else {
        // setResult(eval(input));
        setResult(new Function("return " + input)());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  return (
    <div style={maindiv}>
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div style={{ margin: "10px" }}>{result}</div>
      <div>
        <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
          <button style={buttons} value="7" onClick={handlebtn}>
            7
          </button>
          <button style={buttons} value="8" onClick={handlebtn}>
            8
          </button>
          <button style={buttons} value="9" onClick={handlebtn}>
            9
          </button>
          <button style={buttons} value="+" onClick={handlebtn}>
            +
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
          <button style={buttons} value="4" onClick={handlebtn}>
            4
          </button>
          <button style={buttons} value="5" onClick={handlebtn}>
            5
          </button>
          <button style={buttons} value="6" onClick={handlebtn}>
            6
          </button>
          <button style={buttons} value="-" onClick={handlebtn}>
            -
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
          <button style={buttons} value="1" onClick={handlebtn}>
            1
          </button>
          <button style={buttons} value="2" onClick={handlebtn}>
            2
          </button>
          <button style={buttons} value="3" onClick={handlebtn}>
            3
          </button>
          <button style={buttons} value="*" onClick={handlebtn}>
            *
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px", margin: "10px 0px" }}>
          <button style={buttons} onClick={clearInput}>
            C
          </button>
          <button style={buttons} value="0" onClick={handlebtn}>
            0
          </button>
          <button style={buttons} onClick={calculateResult}>
            =
          </button>
          <button style={buttons} value="/" onClick={handlebtn}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
