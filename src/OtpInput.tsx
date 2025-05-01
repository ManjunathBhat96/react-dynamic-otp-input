import React, { useRef, useReducer } from 'react';

export interface OtpInputProps {
    numberOfInputFields: number;
    inputBoxStyle?: React.CSSProperties;
    onchange?: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

interface InputFieldState {
    value: string;
    ref: React.RefObject<HTMLInputElement | null>;
}

type State = InputFieldState[];

type Action =
    | { type: 'onchange'; payload: { value: string; index: number } };

const OtpInput = ({
    numberOfInputFields = 4,
    inputBoxStyle,
    onchange = () => {}, // Default to a no-op function if not provided
}: OtpInputProps) => {
    const initialState: State = Array.from({ length: numberOfInputFields }, () => ({
        value: '',
        ref: React.createRef<HTMLInputElement>(), // Use React.createRef instead of useRef
    }));

    const reducer = (state: State, action: Action): State => {
        switch (action.type) {
            case 'onchange': {
                const newState = [...state];
                newState[action.payload.index].value = action.payload.value;

                // Move focus to the next input box
                if (action.payload.value && action.payload.index < numberOfInputFields - 1) {
                    newState[action.payload.index + 1].ref.current?.focus();
                }
                return newState;
            }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const InputBoxStyle: React.CSSProperties = {
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

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        dispatch({ type: 'onchange', payload: { value: e.target.value, index } });
        onchange(e, index);
    };

    return (
        <div>
            {state.map((input, index) => (
                <input
                    ref={input.ref}
                    maxLength={1}
                    style={{ ...InputBoxStyle, ...inputBoxStyle }}
                    key={index}
                    type="text"
                    value={input.value}
                    onChange={(e) => inputHandler(e, index)}
                />
            ))}
        </div>
    );
};

export { OtpInput };
export default OtpInput;