import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";
import FlexBetween from "@/components/Global/FlexBetween";

interface PieChartData {
  name: string;
  value: number | string;
}

interface ExpenseBreakdownChartProps {
  pieChartData: PieChartData[][];
  pieColors: string[];
}

const ExpenseBreakdownChart: FC<ExpenseBreakdownChartProps> = ({
  pieChartData,
  pieColors,
}) => {
  return (
    <DashboardBox gridArea="i">
      <BoxHeader title="Expense Breakdown by Category" sideText="+4%" />
      <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
        {pieChartData &&
          pieChartData.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={75}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
      </FlexBetween>
    </DashboardBox>
  );
};

export default ExpenseBreakdownChart;
