import { useMemo } from "react";
import { useTheme } from "@mui/material";

import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import ProductsDatagrid from "@/components/Dashboard/ProductsDatagrid";
import OrdersDatagrid from "@/components/Dashboard/OrdersDatagrid";
import ExpenseBreakdownChart from "@/components/Dashboard/ExpenseBreakdownChart";
import PercentBar from "@/components/Dashboard/PercentBar";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value as string,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  return (
    <>
      <ProductsDatagrid palette={palette} productData={productData ?? []} />
      <OrdersDatagrid
        palette={palette}
        transactionData={transactionData ?? []}
      />
      <ExpenseBreakdownChart
        pieChartData={pieChartData ?? []}
        pieColors={pieColors}
      />
      <PercentBar palette={palette} />
    </>
  );
};

export default Row3;
