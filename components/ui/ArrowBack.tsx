import { CustomButton } from "@/components/ui/CustomButton";
import { MoveLeft } from "lucide-react";

interface ArrowBackProps {
  handleFunction: () => void;
}

export function ArrowBack({ handleFunction }: ArrowBackProps) {
  return (
    <CustomButton onClick={handleFunction} className="w-[45px] h-[45px] grid place-content-center">
      <MoveLeft size={18} />
    </CustomButton>
  );
}
