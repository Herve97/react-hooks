/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import Demo from './useState-and-useEffect'
import DemoUseMemo from './useMemoHook'
import DemoUseCallBack from './useCallbackHook'
import DemoUseContext from './useContextHook'
import DemoUseRef from './useRefHook'
import DemoUseReducer from './useReducerHook'
import DemoUseImperativeHandle from './useImperativeHandleHook'
import DemoUseTransition from './useTransitionHook'
import DemoUseDefferedValue from './useDefferedValueHook'
import DemoUseLayout from './useLayoutHook'

function App () {
  return (
    <div>
      <DemoUseLayout />
      {/* <DemoUseDefferedValue /> */}
      {/* <DemoUseTransition /> */}
      {/* <DemoUseImperativeHandle /> */}
      {/* <DemoUseReducer /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoUseContext /> */}
      {/* <DemoUseCallBack /> */}
      {/* <DemoUseMemo /> */}
      {/* <Demo /> */}
    </div>
  )
}

export default App
