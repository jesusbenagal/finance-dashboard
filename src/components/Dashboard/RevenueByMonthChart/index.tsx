import { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Palette } from "@mui/material";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface Revenue {
  name: string;
  revenue: number;
}

interface RevenueByMonthProps {
  revenue: Revenue[];
  palette: Palette;
}

const RevenueByMonthChart: FC<RevenueByMonthProps> = ({ revenue, palette }) => {
  return (
    <DashboardBox gridArea="c">
      <BoxHeader
        title="Revenue Month by Month"
        subtitle="Graph representing the revenue month by month"
        sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#colorRevenue)" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default RevenueByMonthChart;
