import { useContext } from "react";
import { ExpenseContext } from "@/context/ExpenseContext";

import AddExpense from "./AddExpense";
import Expense from "./Expense";
import ExpenseMembers from "./ExpenseMembers";

function ExpensesBox() {
  const { persons, expenses } = useContext(ExpenseContext);

  return (
    <div className="space-y-8 my-3 border-t pt-5 w-full max-w-sm">
      {persons.length > 0 ? <AddExpense /> : <></>}

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg space-y-5">
        <h2 className="text-lg font-semibold mb-4">
          Expenses ({expenses.length})
        </h2>

        {expenses.length === 0 ? (
          <p className="text-sm text-slate-400">No meals added yet</p>
        ) : (
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="bg-slate-900/60 hover:bg-slate-800/60 transition px-4 py-3 rounded-xl border border-white/5"
              >
                <Expense expense={expense} />
                <ExpenseMembers expense={expense} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpensesBox;
