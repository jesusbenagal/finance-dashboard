import { useMemo } from "react";
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

  const pieColors = [palette.primary[800], palette.primary[300]];

  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price,
          expense,
        };
      })
    );
  }, [productData]);

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
