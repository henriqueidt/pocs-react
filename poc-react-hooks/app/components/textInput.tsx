import { forwardRef, useImperativeHandle, useRef } from "react";

const TextInput = forwardRef<{ focus: () => void }, { label: string }>(
  ({ label }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

    return <input ref={inputRef} placeholder={label} />;
  },
);

export default TextInput;
