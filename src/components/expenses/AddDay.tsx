import { useContext } from "react";

import { ExpenseContext } from "@/context/ExpenseContext";

import { Button } from "../ui/button";

import { Plus } from "lucide-react";

function AddDay() {
  const { changeDay } = useContext(ExpenseContext);

  return (
    <Button
      className="h-12 px-6 text-base rounded-xl flex items-center gap-2 w-full"
      variant="secondary"
      onClick={() => changeDay("add")}
    >
      <Plus size={18} />
      Add Day
    </Button>
  );
}

export default AddDay;
