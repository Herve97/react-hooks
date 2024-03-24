/*
useImperativeHandle is a React hook that allows you to customize the instance value that is exposed when using React.forwardRef. It can be used to control what values are exposed to parent components when they are accessing the child component's ref.

When using useImperativeHandle, you can specify which values are exposed on the ref object that is passed to the parent component when using React.forwardRef. This can be useful for cases where you want to restrict the properties or methods that are accessible through the ref.
*/
import { useRef } from 'react'
import Counter, { CounterRef } from './Counter'
import TextInput, { TextInputRef } from './TextInput'

const DemoUseImperativeHandle = () => {
  const counterRef = useRef<CounterRef>(null)
  const textInputRef = useRef<TextInputRef>(null)

  return (
    <div>
      <div style={{ margin: '10px' }}>
        <Counter ref={counterRef} />
      </div>
      <button onClick={() => counterRef.current?.reset()}>
        Reset From Parent
      </button>
      <div>
        <TextInput ref={textInputRef} />
      </div>
      <button onClick={() => textInputRef.current?.reset()}>Reset Input</button>
    </div>
  )
}

export default DemoUseImperativeHandle
