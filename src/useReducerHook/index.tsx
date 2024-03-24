/*
useReducer is a React hook that is used for managing complex state logic in components. It is an alternative to useState and is particularly useful when the component's state logic involves multiple sub-values or when the next state depends on the previous state.

With useReducer, you can define a reducer function that allows you to update the state based on the action dispatched to it. The reducer function takes the current state and an action as arguments and returns the new state based on the action type.
*/
import { useReducer } from 'react'

interface State {
  count: number
  error: string | null
}

interface Action {
  type: 'increment' | 'decrement'
}

function reducer (state: State, action: Action) {
  const { type } = action
  switch (type) {
    case 'increment':
      const newCount = state.count + 1
      const hasErrror = newCount > 5
      return {
        ...state,
        count: hasErrror ? state.count : newCount,
        error: hasErrror ? 'Maximum reached' : null
      }
    case 'decrement':
      const newCountDown = state.count - 1
      const hasErrorDown = newCountDown < 0
      return {
        ...state,
        count: hasErrorDown ? state.count : newCountDown,
        error: hasErrorDown ? 'Minimum reached' : null
      }
    default:
      return state
  }
}

const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null })
  return (
    <div
      style={{
        margin: '20px'
      }}
    >
      <div style={{ textAlign: 'center', margin: '20px' }}>
        Count: {state.count}
      </div>
      {state.error && (
        <div
          style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}
        >
          Error: {state.error}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '10px'
        }}
      >
        <button
          onClick={() => dispatch({ type: 'increment' })}
          style={{
            // margin: '30px',
            color: 'black',
            backgroundColor: 'goldenrod',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          style={{
            // margin: '30px',
            color: 'black',
            backgroundColor: '#45bce6',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
          // disabled={state.count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default DemoUseReducer
