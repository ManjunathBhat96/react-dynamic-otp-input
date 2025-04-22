import './App.css';
import OtpInput from './OtpInput/OtpInput';
import { useState } from 'react';

function App() {
  
const [value, setValue] = useState<string>('')
const enteredValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  console.log('value', e.target.value);
  setValue(e.target.value);
}

  return (
      <OtpInput numberOfInputFields={6} onchange={enteredValue} />
  )
}

export default App
