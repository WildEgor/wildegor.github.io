export enum ECounterHandlers {
    Inc,
    Dec
}

interface ICounterOutputProps {
    counter: number;
    onClick: (mode: ECounterHandlers) => void;
}

const CounterOutput = (props: ICounterOutputProps) => {
    return (
        <div>
        <p>{props.counter}</p>
        <button onClick={() => props.onClick(ECounterHandlers.Dec)}>Decrement</button>
        <button onClick={() => props.onClick(ECounterHandlers.Inc)}>Increment</button>
        </div>
    );
}

export default CounterOutput;