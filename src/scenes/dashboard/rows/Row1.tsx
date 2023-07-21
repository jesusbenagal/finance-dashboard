import { useTheme } from "@mui/material";

import { useGetKpisQuery } from "@/state/api";

import RevenueAndExpensesChart from "@/components/Dashboard/RevenueAndExpensesChart";
import ProfitsAndRevenuesChart from "@/components/Dashboard/ProfitsAndRevenuesChart";
import RevenueByMonthChart from "@/components/Dashboard/RevenueByMonthChart";

const Row1 = () => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();

  const { revenue, revenueExpenses, revenueProfits } = data ?? {};

  return (
    <>
      <RevenueAndExpensesChart
        revenuesExpenses={revenueExpenses ?? []}
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
