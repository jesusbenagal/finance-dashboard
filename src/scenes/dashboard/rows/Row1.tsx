import { useMemo } from "react";
import { useTheme } from "@mui/material";

import { useGetKpisQuery } from "@/state/api";

import RevenueAndExpensesChart from "@/components/Dashboard/RevenueAndExpensesChart";
import ProfitsAndRevenuesChart from "@/components/Dashboard/ProfitsAndRevenuesChart";
import RevenueByMonthChart from "@/components/Dashboard/RevenueByMonthChart";

const Row1 = () => {
  const { palette } = useTheme();

  const { data: kpisData } = useGetKpisQuery();

  const revenuesExpenses = useMemo(() => {
    return (
      kpisData &&
      kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          expenses,
        };
      })
    );
  }, [kpisData]);

  const revenueProfits = useMemo(() => {
    return (
      kpisData &&
      kpisData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [kpisData]);

  const revenue = useMemo(() => {
    return (
      kpisData &&
      kpisData[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue,
        };
      })
    );
  }, [kpisData]);

  return (
    <>
      <RevenueAndExpensesChart
        revenuesExpenses={revenuesExpenses ?? []}
        palette={palette}
      />
      <ProfitsAndRevenuesChart
        revenueProfits={revenueProfits ?? []}
        palette={palette}
      />
      <RevenueByMonthChart revenue={revenue ?? []} palette={palette} />
    </>
  );
};

export default Row1;
