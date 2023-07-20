import { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Palette } from "@mui/material";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface OperationalExpenses {
  name: string;
  "Operational Expenses": number;
  "Non Operational Expenses": number;
}

interface ExpensesChartProps {
  operationalExpenses: OperationalExpenses[];
  palette: Palette;
}

const ExpensesChart: FC<ExpensesChartProps> = ({
  operationalExpenses,
  palette,
}) => {
  return (
    <DashboardBox gridArea="d">
      <BoxHeader
        title="Operational vs Non Operational Expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={operationalExpenses}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Non Operational Expenses"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Operational Expenses"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default ExpensesChart;
