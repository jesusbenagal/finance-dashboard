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

  const { expenseBreakDownData } = kpiData ?? {};
  const { products } = productData ?? {};

  return (
    <>
      <ProductsDatagrid palette={palette} productData={products ?? []} />
      <OrdersDatagrid
        palette={palette}
        transactionData={transactionData ?? []}
      />
      <ExpenseBreakdownChart
        pieChartData={expenseBreakDownData ?? []}
        pieColors={pieColors}
      />
      <PercentBar palette={palette} />
    </>
  );
};

export default Row3;
