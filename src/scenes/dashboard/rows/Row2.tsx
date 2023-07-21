import { useTheme } from "@mui/material";

import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";

import { pieData } from "@/constants/data";

import ExpensesChart from "@/components/Dashboard/ExpensesChart";
import CampaingsChart from "@/components/Dashboard/CampaignsChart";
import ProductScatterChart from "@/components/Dashboard/ProductScatterChart";

const Row2 = () => {
  const { palette } = useTheme();

  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();

  const { operationalExpenses } = operationalData ?? {};
  const { productExpenseData } = productData ?? {};

  const pieColors = [palette.primary[800], palette.primary[300]];

  return (
    <>
      <ExpensesChart
        operationalExpenses={operationalExpenses ?? []}
        palette={palette}
      />
      <CampaingsChart
        pieData={pieData}
        pieColors={pieColors}
        palette={palette}
      />
      <ProductScatterChart
        palette={palette}
        productExpenseData={productExpenseData ?? []}
      />
    </>
  );
};

export default Row2;
