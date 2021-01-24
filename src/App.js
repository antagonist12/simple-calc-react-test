import "./App.css";
import { useState } from "react";

function App() {
  const [input1, setInput1] = useState({
    value: "0",
    status: false,
  });

  const [input2, setInput2] = useState({
    value: "0",
    status: false,
  });

  const [input3, setInput3] = useState({
    value: "0",
    status: false,
  });

  // const [check1, setCheck1] = useState({
  //   status: false,
  // });

  function onChangeValue(e, target) {
    if (target == "input1") {
      let value = e.target.value;
      setInput1({
        ...input1,
        value: value,
      });
    } else if (target == "input2") {
      let value = e.target.value;
      setInput2({
        ...input2,
        value: value,
      });
    } else if (target == "input3") {
      let value = e.target.value;
      setInput3({
        ...input3,
        value: value,
      });
    }
  }

  function onChangeCheckBox(e, target) {
    if (target == "input1") {
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setInput1({
        ...input1,
        status: value,
      });
    } else if (target == "input2") {
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setInput2({
        ...input2,
        status: value,
      });
    } else if (target == "input3") {
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setInput3({
        ...input3,
        status: value,
      });
    }
  }

  // function onChangeValue1(e) {
  //   let value = e.target.value;
  //   setInput1({
  //     ...input1,
  //     value: value,
  //   });
  // }

  // function onCheck1(e) {
  //   let value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   // setCheck1({
  //   //   ...check1,
  //   //   status: value,
  //   // });

  //   setInput1({
  //     ...input1,
  //     status: value,
  //   });
  // }

  // function onChangeValue2(e) {
  //   let value = e.target.value;
  //   setInput2({
  //     ...input2,
  //     value: value,
  //   });
  // }

  // function onCheck2(e) {
  //   let value =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //   // setCheck1({
  //   //   ...check1,
  //   //   status: value,
  //   // });

  //   setInput2({
  //     ...input2,
  //     status: value,
  //   });
  // }

  const [result, setResult] = useState(0);

  function sum(e) {
    e.preventDefault();

    let status1 = input1.status;
    let status2 = input2.status;
    let status3 = input3.status;

    if (status1 && status2 && status3 === true) {
      setResult(
        parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value)
      );
    } else if (status1 && status2 === true) {
      setResult(parseInt(input1.value) + parseInt(input2.value));
    } else if (status1 && status3 === true) {
      setResult(parseInt(input1.value) + parseInt(input3.value));
    } else if (status2 && status3 === true) {
      setResult(parseInt(input2.value) + parseInt(input3.value));
    } else {
      alert("error");
    }
  }

  function min(e) {
    e.preventDefault();
    let status1 = input1.status;
    let status2 = input2.status;
    let status3 = input3.status;

    if (status1 && status2 && status3 === true) {
      setResult(
        parseInt(input1.value) - parseInt(input2.value) - parseInt(input3.value)
      );
    } else if (status1 && status2 === true) {
      setResult(parseInt(input1.value) - parseInt(input2.value));
    } else if (status1 && status3 === true) {
      setResult(parseInt(input1.value) - parseInt(input3.value));
    } else if (status2 && status3 === true) {
      setResult(parseInt(input2.value) - parseInt(input3.value));
    } else {
      alert("error");
    }
  }

  function division(e) {
    e.preventDefault();
    let status1 = input1.status;
    let status2 = input2.status;
    let status3 = input3.status;

    if (status1 && status2 && status3 === true) {
      setResult(
        parseInt(input1.value) / parseInt(input2.value) / parseInt(input3.value)
      );
    } else if (status1 && status2 === true) {
      setResult(parseInt(input1.value) / parseInt(input2.value));
    } else if (status1 && status3 === true) {
      setResult(parseInt(input1.value) / parseInt(input3.value));
    } else if (status2 && status3 === true) {
      setResult(parseInt(input2.value) / parseInt(input3.value));
    } else {
      alert("error");
    }
  }
  function multiplication(e) {
    e.preventDefault();
    let status1 = input1.status;
    let status2 = input2.status;
    let status3 = input3.status;

    if (status1 && status2 && status3 === true) {
      setResult(
        parseInt(input1.value) * parseInt(input2.value) * parseInt(input3.value)
      );
    } else if (status1 && status2 === true) {
      setResult(parseInt(input1.value) * parseInt(input2.value));
    } else if (status1 && status3 === true) {
      setResult(parseInt(input1.value) * parseInt(input3.value));
    } else if (status2 && status3 === true) {
      setResult(parseInt(input2.value) * parseInt(input3.value));
    } else {
      alert("error");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="num1"
          id="num1"
          value={input1.value}
          onChange={(e) => onChangeValue(e, "input1")}
        />
        <input
          type="checkbox"
          name="status"
          id="status"
          value={input1.status}
          onChange={(e) => onChangeCheckBox(e, "input1")}
        />
        <br />

        <input
          type="number"
          name="num2"
          id="num2"
          value={input2.value}
          onChange={(e) => onChangeValue(e, "input2")}
        />
        <input
          type="checkbox"
          name="checked2"
          id="checked2"
          value={input2.status}
          onChange={(e) => onChangeCheckBox(e, "input2")}
        />
        <br />

        <input
          type="number"
          name="num3"
          id="num3"
          value={input3.value}
          onChange={(e) => onChangeValue(e, "input3")}
        />
        <input
          type="checkbox"
          name="checked3"
          id="checked3"
          value={input3.status}
          onChange={(e) => onChangeCheckBox(e, "input3")}
        />
        <br />

        <button onClick={sum}>+</button>
        <button onClick={min}>-</button>
        <button onClick={division}>/</button>
        <button onClick={multiplication}>x</button>
        <hr />
        <h1>Hasil : {result}</h1>
      </form>
    </div>
  );
}

export default App;
