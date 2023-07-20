import { FC } from "react";
import { Box, Palette } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface TransactionData {
  _id: string;
  buyer: string;
  amount: number;
}

interface OrdersDatagridProps {
  transactionData: TransactionData[];
  palette: Palette;
}

const transactionColumns = [
  {
    field: "_id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "buyer",
    headerName: "Buyer",
    flex: 0.67,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.35,
    renderCell: (params: GridCellParams) => `$${params.value as number}`,
  },
  {
    field: "productsIds",
    headerName: "Count",
    flex: 0.1,
    renderCell: (params: GridCellParams) =>
      (params.value as Array<string>).length,
  },
];

const OrdersDatagrid: FC<OrdersDatagridProps> = ({
  transactionData,
  palette,
}) => {
  return (
    <DashboardBox gridArea="h">
      <BoxHeader
        title="Recent Orders"
        sideText={`${transactionData?.length} latest transactions`}
      />
      <Box
        mt="1rem"
        p="0 0.5rem"
        height="80%"
        sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnsHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter
          rows={transactionData ?? []}
          columns={transactionColumns}
        />
      </Box>
    </DashboardBox>
  );
};

export default OrdersDatagrid;
