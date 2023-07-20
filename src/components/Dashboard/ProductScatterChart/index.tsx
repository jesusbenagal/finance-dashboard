import { FC } from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Palette } from "@mui/material";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface ProductExpenseData {
  id: string;
  price: number;
  expense: number;
}

interface ProductScatterChartProps {
  productExpenseData: ProductExpenseData[];
  palette: Palette;
}

const tickFormatter = (value: number): string => {
  return `$${value}`;
};

const ProductScatterChart: FC<ProductScatterChartProps> = ({
  productExpenseData,
  palette,
}) => {
  return (
    <DashboardBox gridArea="f">
      <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis
            type="number"
            dataKey="price"
            name="price"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v: number) => tickFormatter(v)}
          />
          <YAxis
            type="number"
            dataKey="expense"
            name="expense"
            axisLine={false}
            tickLine={false}
            style={{ fontSize: "10px" }}
            tickFormatter={(v: number) => tickFormatter(v)}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v: number) => tickFormatter(v)} />
          <Scatter
            name="Product Expense Ratio"
            data={productExpenseData}
            fill={palette.tertiary[500]}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default ProductScatterChart;
