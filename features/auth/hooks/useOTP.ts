import {
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export function useOTP(otpLength: number) {
  const [inputArr, setInputArr] = useState<string[]>(
    new Array(otpLength).fill(""),
  );
  const refArr = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  function handleInputChange(input: string, index: number): void {
    if (input && (input < "0" || input > "9")) return;

    const newArr = [...inputArr];
    newArr[index] = input.slice(-1);
    setInputArr(newArr);

    if (newArr[index] && index < otpLength - 1) {
      focusOnInput(refArr, index + 1);
    }
  }

  function focusOnInput(
    refArr: React.RefObject<HTMLInputElement[]>,
    index: number,
  ): void {
    refArr.current[index]?.focus();
  }

  function handleInputKeyDown(
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      focusOnInput(refArr, index - 1);
    }
  }

  function handleInputPaste(e: ClipboardEvent<HTMLInputElement>): void {
    e.preventDefault();

    const clipBoardData = e.clipboardData?.getData("text");
    let numericChars = "";

    for (let i = 0; i < clipBoardData.length; i++) {
      const char = clipBoardData[i];
      if (char >= "0" && char <= "9") {
        numericChars += char;
      }
    }

    const digitsToPaste = numericChars.slice(0, otpLength);
    const newArr = new Array(otpLength).fill("");

    for (let i = 0; i < digitsToPaste.length; i++) {
      newArr[i] = digitsToPaste[i];
    }

    setInputArr(newArr);
    focusOnInput(refArr, Math.min(digitsToPaste.length, otpLength - 1));
  }

  return {
    refArr,
    inputArr,
    handleInputChange,
    handleInputKeyDown,
    handleInputPaste,
  };
}
