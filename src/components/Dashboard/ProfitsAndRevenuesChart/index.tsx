import { FC } from "react";
import {
  CartesianGrid,
  Legend,
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

interface RevenueProfits {
  name: string;
  revenue: number;
  profit: string;
}

interface ProfitsAndRevenuesProps {
  revenueProfits: RevenueProfits[];
  palette: Palette;
}

const ProfitsAndRevenuesChart: FC<ProfitsAndRevenuesProps> = ({
  revenueProfits,
  palette,
}) => {
  return (
    <DashboardBox gridArea="b">
      <BoxHeader
        title="Profits and Revenue"
        subtitle="Top line represents revenue, bottom line represent profits"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={revenueProfits}
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
          <Legend
            height={20}
            wrapperStyle={{
              margin: "0 0 10px 0",
            }}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke={palette.tertiary[500]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke={palette.primary.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default ProfitsAndRevenuesChart;
