import { FC } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { Box, Typography, Palette } from "@mui/material";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";
import FlexBetween from "@/components/Global/FlexBetween";

interface PieData {
  name: string;
  value: number;
}

interface CampaingsChartProps {
  pieData: PieData[];
  pieColors: string[];
  palette: Palette;
}

const CampaingsChart: FC<CampaingsChartProps> = ({
  pieData,
  palette,
  pieColors,
}) => {
  return (
    <DashboardBox gridArea="e">
      <BoxHeader title="Campaigns and Targets" sideText="+4%" />
      <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
        <PieChart
          width={110}
          height={100}
          margin={{
            top: 0,
            right: -10,
            left: 10,
            bottom: 0,
          }}
        >
          <Pie
            stroke="none"
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
            83
          </Typography>
          <Typography variant="h6">
            Finance goals of the campaign that is desire
          </Typography>
        </Box>
        <Box flexBasis="40%">
          <Typography variant="h5">Loses in Revenue</Typography>
          <Typography variant="h6">Losses are down 25%</Typography>
          <Typography mt="0.4rem" variant="h5">
            Profit Margins
          </Typography>
          <Typography variant="h6">
            Margins are up by 30% from last month.
          </Typography>
        </Box>
      </FlexBetween>
    </DashboardBox>
  );
};

export default CampaingsChart;
