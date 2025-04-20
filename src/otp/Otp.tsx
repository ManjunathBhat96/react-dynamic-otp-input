import {useRef, useReducer } from 'react'

interface OtpProps {
    numberOfInputFields: number;
    inputBoxStyle?: React.CSSProperties;
};

interface initialStateType {
    value: string;  
    ref:  React.RefObject<HTMLInputElement> | null;
}
function Otp({ numberOfInputFields=4, inputBoxStyle }: OtpProps) {
    const initialState = Array.from({ length: numberOfInputFields }, () => ({
        value: '',
        ref: useRef<HTMLInputElement>(null),
    }));
    const reducer=(initialState: initialStateType, action: any)=>{
        console.log('12111', action.payload.index,  {...initialState[action.payload.index], ref: initialState[action.payload.index].ref.current?.focus()})
        switch (action.type) {
            case 'onchange': {
                const newState = [...initialState];
                newState[action.payload.index].value = action.payload.value;

                // Move focus to the next input box
                if (action.payload.value && action.payload.index < numberOfInputFields - 1) {
                    initialState[action.payload.index + 1].ref.current?.focus();
                }

                return newState;
            }
        default: return initialState;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const InputBoxStyle = {
        width: '50px',
        height: '50px',
        marginRight: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        textAlign: 'center',
        fontSize: '24px',
        color: 'black', 
        boxShadow: '0 0 3px #00f, 0 0 3px #00f, 0 0 3px #00f',
        animation: 'glow 1.5s infinite alternate',
        outline: 'none',
    };



    
   
      const inputHandler=(e: React.ChangeEvent<HTMLInputElement>, index: number)=>{
        dispatch({type:'onchange', payload: {value:e.target.value, index: index}})
      }
    return (
        <div>
{state.map((input, index: number) => (
                <input
                    ref={input.ref}
                    maxLength={1}
                    style={{...InputBoxStyle, ...inputBoxStyle}}
                    key={index}
                    type="text"
                    value={input.value}
                    onChange={(e) => inputHandler(e, index)}
                />
            ))}
        </div>
    )
}

export default Otp