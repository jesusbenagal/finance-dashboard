import { useTheme } from "@mui/material";

import { useGetKpisQuery } from "@/state/api";

import PredictionsChart from "@/components/Predictions/PredictionsChart";

const Predictions = () => {
  const { palette } = useTheme();

  const { data: kpiData } = useGetKpisQuery();

  const { predctionsData } = kpiData ?? {};

  return (
    <PredictionsChart palette={palette} formattedData={predctionsData ?? []} />
  );
};

export default Predictions;
