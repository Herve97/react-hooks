import { useRef, Ref, useImperativeHandle, forwardRef } from 'react'

export type TextInputRef = {
  reset: () => void
}

interface TextInputProps {}

const TextInput = (props: TextInputProps, ref: Ref<TextInputRef>) => {
  const localRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return

      localRef.current.value = ''
      localRef.current?.focus()
    }
  }))
  return <input ref={localRef} type='text' />
}

export default forwardRef(TextInput)
