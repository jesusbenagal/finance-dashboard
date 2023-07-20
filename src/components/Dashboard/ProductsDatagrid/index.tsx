import { FC } from "react";
import { Box, Palette } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface ProductData {
  _id: string;
  price: number;
  expense: number;
}

interface ProductsDatagridProps {
  productData: ProductData[];
  palette: Palette;
}

const productColumns = [
  {
    field: "_id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "expense",
    headerName: "Expense",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value as number}`,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value as number}`,
  },
];

const ProductsDatagrid: FC<ProductsDatagridProps> = ({
  productData,
  palette,
}) => {
  return (
    <DashboardBox gridArea="g">
      <BoxHeader
        title="List of Products"
        sideText={`${productData?.length} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="75%"
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
          rows={productData ?? []}
          columns={productColumns}
        />
      </Box>
    </DashboardBox>
  );
};

export default ProductsDatagrid;
