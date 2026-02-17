import { useRef } from "react";
import TextInput from "~/components/textInput";

export default function UseImperativeHandle() {
  const inputRef = useRef<{ focus: () => void }>(null);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">useImperativeHandle</h1>
      <p>
        This hook allows components that have refs into their elements to expose
        only wanted fields, instead of the whole DOM element
      </p>
      <TextInput ref={inputRef} label="custom input" />
      <button onClick={() => inputRef.current?.focus()}>
        click to focus on input
      </button>
    </main>
  );
}
