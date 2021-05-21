import React, { setState } from 'react'
import CounterOutput, { ECounterHandlers } from './Components/CounterOutput/CounterOutput'

interface IAppProps {
    [propName: string]: any
}

interface IAppState {
    counterValue: number
}

class App extends React.Component<IAppProps, IAppState> {
    public state = {
        counterValue: 0
    }

    private counterHandler = (mode: ECounterHandlers) => {
        this.setState(prevState => {
            switch(mode) {
              case ECounterHandlers.Dec:
                return { counterValue: prevState.counterValue - 1 }
              case ECounterHandlers.Inc:
                return { counterValue: prevState.counterValue + 1 }
            }
          });
    }

    public render() {
        return(
            <div>
                <p>
                    <CounterOutput
                        counter={this.state.counterValue}
                        onClick={this.counterHandler}
                    />
                </p>
            </div>
        )
    }
}

export default App;