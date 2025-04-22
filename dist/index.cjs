"use strict";

// src/index.tsx
var import_react3 = require("react");
var import_client = require("react-dom/client");

// src/otp/Otp.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Otp({ numberOfInputFields = 4, inputBoxStyle, onchange }) {
  const initialState = Array.from({ length: numberOfInputFields }, () => ({
    value: "",
    ref: (0, import_react.useRef)(null)
  }));
  const reducer = (initialState2, action) => {
    switch (action.type) {
      case "onchange": {
        const newState = [...initialState2];
        newState[action.payload.index].value = action.payload.value;
        if (action.payload.value && action.payload.index < numberOfInputFields - 1) {
          initialState2[action.payload.index + 1].ref.current?.focus();
        }
        return newState;
      }
      default:
        return initialState2;
    }
  };
  console.log("initialState", initialState[0], initialState[0].value === "");
  const [state, dispatch] = (0, import_react.useReducer)(reducer, initialState);
  const InputBoxStyle = {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
    fontSize: "24px",
    color: "black",
    boxShadow: "0 0 3px #00f, 0 0 3px #00f, 0 0 3px #00f",
    animation: "glow 1.5s infinite alternate",
    outline: "none"
  };
  const inputHandler = (e, index) => {
    dispatch({ type: "onchange", payload: { value: e.target.value, index } });
    onchange(e, index);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: state.map((input, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "input",
    {
      ref: input.ref,
      maxLength: 1,
      style: { ...InputBoxStyle, ...inputBoxStyle },
      type: "text",
      value: input.value,
      onChange: (e) => inputHandler(e, index)
    },
    index
  )) });
}
var Otp_default = Otp;

// src/App.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  const [value, setValue] = (0, import_react2.useState)("");
  const enteredValue = (e, index) => {
    console.log("value", e.target.value);
    setValue(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Otp_default, { numberOfInputFields: 6, onchange: enteredValue });
}
var App_default = App;

// src/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
(0, import_client.createRoot)(document.getElementById("root")).render(
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(App_default, {}) })
);
