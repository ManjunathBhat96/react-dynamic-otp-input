
## Features
Dynamic generation of OTP input fields

Customizable input styles

Automatic focus transition between inputs

Support for controlled and uncontrolled input modes

Accessible and keyboard-friendly

## Installation
Install the package using npm:

```bash
npm install react-dynamic-otp-inputs
```
# Usage
Here's a basic example of how to use the OtpInput component:

```js
import React from 'react';
import OtpInput from 'react-dynamic-otp-inputs';

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(`Input at index ${index} changed to ${e.target.value}`);
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <OtpInput
        numberOfInputFields={6}
        inputBoxStyle={{ border: '1px solid #ccc', padding: '10px', fontSize: '18px' }}
        onchange={handleChange}
      />
    </div>
  );
};

export default App;
```
## Props

| Prop Name             | Type                                                              | Default     | Description                                                                |
| --------------------- | ----------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `numberOfInputFields` | `number`                                                          | `4`         | Specifies how many OTP input boxes to render.                              |
| `inputBoxStyle`       | `React.CSSProperties`                                             |  | Optional inline styles to customize each input box.                        |
| `onchange`            | `(e: React.ChangeEvent<HTMLInputElement>, index: number) => void` | `() => {}`  | Callback function that triggers when the value in any input field changes. |

