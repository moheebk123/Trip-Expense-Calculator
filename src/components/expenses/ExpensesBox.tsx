import { useContext } from "react";
import { ExpenseContext } from "@/context/ExpenseContext";

import AddExpense from "./AddExpense";
import Expense from "./Expense";
import ExpenseMembers from "./ExpenseMembers";
import AddDay from "./AddDay";

import { Button } from "../ui/button";

import { Trash2 } from "lucide-react";

function ExpensesBox() {
  const { persons, expenses, days, changeDay } = useContext(ExpenseContext);

  const handleRemoveDay = (day: number) => {
    changeDay("remove", day)
  }

  return (
    <div className="space-y-8 my-3 border-t pt-5 w-full max-w-sm">
      {persons.length > 0 ? <AddDay /> : <></>}
      {days.length > 0 ? <AddExpense /> : <></>}

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg space-y-5">
        <h2 className="text-lg font-semibold mb-4">Days ({days.length})</h2>

        {days.length === 0 ? (
          <p className="text-sm text-slate-400">No day added yet</p>
        ) : (
          <div className="space-y-3">
            {days.map((day, index) => {
              const dayExpenses = expenses.filter(
                (expense) => expense.day === day,
              );

              let dayExpenseTotal = 0;
              for (const expense of dayExpenses) {
                dayExpenseTotal += expense.amount;
              }

              return (
                <div
                  key={day}
                  className="bg-slate-900/60 px-4 py-3 space-y-4 rounded-xl border border-white/5"
                >
                  <div className="flex justify-between gap-2">
                    <h2 className="font-semibold mb-4 flex">
                      Days {index + 1} (Expenses: {dayExpenses.length})
                    </h2>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-red-500/20 text-red-400"
                      onClick={() => handleRemoveDay(day)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  {dayExpenses.map((dayExpense) => (
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg space-y-5">
                      <Expense expense={dayExpense} />
                      <ExpenseMembers expense={dayExpense} />
                    </div>
                  ))}
                  {dayExpenses.length > 0 && (
                    <span>Total Expenses: ₹{dayExpenseTotal}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpensesBox;
