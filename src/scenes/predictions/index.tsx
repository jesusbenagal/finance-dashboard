import { useMemo } from "react";
import { useTheme } from "@mui/material";
import regression, { DataPoint } from "regression";

import { useGetKpisQuery } from "@/state/api";

import PredictionsChart from "@/components/Predictions/PredictionsChart";

const Predictions = () => {
  const { palette } = useTheme();

  const { data: kpiData } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue];
      }
    );

    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [kpiData]);

  return <PredictionsChart palette={palette} formattedData={formattedData} />;
};

export default Predictions;
