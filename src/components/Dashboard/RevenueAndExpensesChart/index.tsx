import { FC } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";
import { Palette } from "@mui/material";

interface RevenueExpenses {
  name: string;
  revenue: number;
  expenses: number;
}

interface RevenueAndExpensesProps {
  revenuesExpenses: RevenueExpenses[];
  palette: Palette;
}

const RevenueAndExpensesChart: FC<RevenueAndExpensesProps> = ({
  revenuesExpenses,
  palette,
}) => {
  return (
    <DashboardBox gridArea="a">
      <BoxHeader
        title="Revenue and Expenses"
        subtitle="Top line represents revenue, bottom line represents expenses"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenuesExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[500]}
                stopOpacity={0.5}
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ strokeWidth: "0" }}
            domain={[8000, 23000]}
            style={{
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            dot={true}
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default RevenueAndExpensesChart;
