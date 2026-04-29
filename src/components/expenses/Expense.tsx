import { useContext, useState } from "react";

import { ExpenseContext } from "@/context/ExpenseContext";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Check, Pencil, Trash2 } from "lucide-react";

interface ExpenseInterface {
  id: number;
  title: string;
  amount: number;
  participants: number[];
  day: number;
}

function Expense({ expense }: { expense: ExpenseInterface }) {
  const { days, changeExpense } = useContext(ExpenseContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newExpense, setNewExpense] = useState<ExpenseInterface>(expense);

  const handleRemoveExpense = () => {
    changeExpense("remove", expense.id, undefined);
  };

  const handleEditExpense = () => {
    changeExpense("edit", expense.id, newExpense);
    setIsEditing(false);
  };

  const handleChange = (field: "amount" | "title" | "day", value: string | number) => {
    setNewExpense((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex items-center justify-between">
      {isEditing ? (
        <div className="space-y-2 py-2">
          <Select
            value={String(newExpense.day)}
            onValueChange={(e) => handleChange("day", Number(e))}
          >
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select expense day" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Day</SelectLabel>
                {days.map(
                  (day, index) => (
                    <SelectItem key={day} value={String(day)}>
                      Day {index + 1}
                    </SelectItem>
                  ),
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={newExpense.title}
            onValueChange={(e) => handleChange("title", e)}
          >
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Select an expense" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Expense</SelectLabel>
                {["Travel", "Breakfast", "Lunch", "Snack", "Dinner"].map(
                  (expense) => (
                    <SelectItem key={expense} value={expense}>
                      {expense}
                    </SelectItem>
                  ),
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className="h-8 text-base"
            placeholder="Enter expense amount..."
            type="text"
            value={newExpense.amount}
            onChange={(e) => handleChange("amount", Number(e.target.value))}
          />
        </div>
      ) : (
        <span className="text-base">
          {newExpense.title[0].toUpperCase() + newExpense.title.slice(1)} (₹
          {newExpense.amount})
        </span>
      )}

      <div className="flex items-center gap-2 ml-2">
        {/* Edit */}
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-slate-700"
          onClick={
            isEditing
              ? () => handleEditExpense()
              : () => setIsEditing(() => true)
          }
        >
          {isEditing ? <Check size={16} /> : <Pencil size={16} />}
        </Button>

        {/* Delete */}
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-red-500/20 text-red-400"
          onClick={handleRemoveExpense}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}

export default Expense;
