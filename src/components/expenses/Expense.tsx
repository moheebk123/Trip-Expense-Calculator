import { useContext } from "react";

import { ExpenseContext } from "@/context/ExpenseContext";

import { Button } from "../ui/button";

import { Trash2 } from "lucide-react";

interface ExpenseInterface {
  id: number;
  title: string;
  amount: number;
  participants: number[];
}

function Expense({ expense }: { expense: ExpenseInterface }) {
  const { changeExpense } = useContext(ExpenseContext);

  const handleRemoveMeal = () => {
    changeExpense("remove", expense.id, undefined);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-base">
        {expense.title[0].toUpperCase() + expense.title.slice(1)} (₹
        {expense.amount})
      </span>

      {/* Delete */}
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-red-500/20 text-red-400"
        onClick={() => handleRemoveMeal()}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
}

export default Expense;
