import { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import type { RootState } from "@/store";

import {
  Home,
  Support,
  Trips,
  Trip,
  NotFound,
  PrivacyPolicy,
  SecurityPolicy,
  TermsOfService,
} from "@/pages";

import { Loader } from "@/components";

import AppRoute from "@/routes/AppRoute";
import LayoutRoute from "@/routes/LayoutRoute";

import { expenseActions, loadActions, tripActions } from "./store";
import type { ExpenseDataInterface } from "./types";

function RouteHandler() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* App Route */}
        <Route path="/" element={<AppRoute />}>
          {/* General Route */}
          <Route index element={<Home />} />
          <Route path="support" element={<Support />} />
          {/* Error Page Route */}
          <Route path="*" element={<NotFound />} />
          {/*Trip Routes  */}
          <Route path="trips" element={<LayoutRoute />}>
            <Route index element={<Trips />} />
            <Route path=":tripId" element={<Trip />} />
          </Route>
          {/*Trip Routes  */}
          <Route path="legal" element={<LayoutRoute />}>
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="security-policy" element={<SecurityPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

const getInitialData = (): ExpenseDataInterface => {
  const storedData = localStorage.getItem("expenseData");

  if (!storedData) {
    return {
      expenses: [],
      trips: [],
    };
  }

  try {
    return JSON.parse(storedData) as ExpenseDataInterface;
  } catch (error) {
    console.error("Failed to parse expense data:", error);

    return {
      expenses: [],
      trips: [],
    };
  }
};

function App() {
  const initialData: ExpenseDataInterface = getInitialData();

  const { isLoading } = useSelector((store: RootState) => store.load);
  const expenses = useSelector((store: RootState) => store.expenses);
  const trips = useSelector((state: RootState) => state.trips);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tripActions.setTrips(initialData.trips));
    dispatch(expenseActions.setExpenses(initialData.expenses));

    const timer = setTimeout(() => {
      dispatch(loadActions.stopLoading());
    }, 1500);

    return () => clearTimeout(timer);
  }, [dispatch, initialData]);

  useEffect(() => {
    const expenseData: ExpenseDataInterface = {
      expenses,
      trips,
    };

    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenses, trips]);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <RouteHandler />
    </Router>
  );
}

export default App;
