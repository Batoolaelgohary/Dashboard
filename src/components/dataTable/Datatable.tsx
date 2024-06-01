import "./dataTable.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const Datatable = (props: Props) => {
  function handleDelete(id: number) {
    console.log(props.rows[id]);
  }
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="./view.svg" alt="View" />
          </Link>
          <button
            className="delete"
            onClick={() => {
              handleDelete(params.row.id);
            }}
          >
            <img src="./delete.svg" alt="Delete" />
          </button>
        </div>
      );
    },
    width: 100,
  };

  return (
    <div className="data-table">
      <Box sx={{ height: "100%", width: "99%" }}>
        <DataGrid
          className="data-grid"
          rows={props.rows}
          columns={[...props.columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          disableColumnFilter
          disableDensitySelector
          disableColumnSelector
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Datatable;
