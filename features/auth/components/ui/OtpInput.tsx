import { ChangeEvent, ClipboardEvent, KeyboardEvent, RefObject } from "react";

interface OtpInputProps {
  inputArr: string[];
  refArr: RefObject<(HTMLInputElement | null)[]>;
  otpLength: number;

  handleOnChange: (input: string, index: number) => void;
  handleEnterKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
}

export function OtpInput({
  inputArr,
  refArr,
  otpLength,
  handleOnChange,
  handleEnterKeyDown,
  handlePaste,
}: OtpInputProps) {
  return (
    <div className="flex gap-2 justify-center">
      {inputArr.map((val, idx) => (
        <input
          ref={(el) => {
            if (el) refArr.current[idx] = el;
          }}
          key={idx}
          pattern="[0-9]"
          maxLength={1}
          placeholder="0"
          inputMode="numeric"
          aria-label={`Digit ${idx + 1} of ${otpLength}`}
          className=" w-[45px] h-[45px] bg-transparent text-[20px] dark:bg-input/30 border border-[var(--color-border-light)] border-solid rounded-[10px] transition-all focus:outline-primary px-[13px]"
          type="text"
          value={val}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e.target.value, idx)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleEnterKeyDown(e, idx)}
          onPaste={(e: ClipboardEvent<HTMLInputElement>) => handlePaste(e)}
        />
      ))}
    </div>
  );
}
