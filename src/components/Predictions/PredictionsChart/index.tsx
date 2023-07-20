import { FC, useState } from "react";
import {
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Box, Button, Typography, Palette } from "@mui/material";

import DashboardBox from "@/components/Global/DashboardBox";
import FlexBetween from "@/components/Global/FlexBetween";

interface PredictionsData {
  name: string;
  "Actual Revenue": number;
  "Regression Line": number;
  "Predicted Revenue": number;
}

interface PredictionsChartsProps {
  palette: Palette;
  formattedData: PredictionsData[];
}

const PredictionsChart: FC<PredictionsChartsProps> = ({
  palette,
  formattedData,
}) => {
  const [isPredictions, setIsPredictions] = useState(false);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            Charted revenue and predicted revenued based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, .4)",
          }}
        >
          Show predicted revenue for next year
        </Button>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{
              fontSize: "10px",
            }}
          >
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: "0" }}
            style={{
              fontSize: "10px",
            }}
            tickFormatter={(v: number) => `$${v}`}
          >
            <Label
              value="Revenue in USD"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{
              strokeWidth: 5,
            }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke={"#8884d8"}
            dot={false}
          />
          {isPredictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default PredictionsChart;
