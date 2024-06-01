import Datatable from "../../components/dataTable/Datatable";
import "./users.scss";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    renderCell: (img) => {
      return <img src={img.row.img || "/noavatar.png"} alt="Avatar" />;
    },
    width: 100,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    width: 100,
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>users</h1>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          add new user
        </button>
      </div>
      <div className="user-data">
        <Datatable slug="users" columns={columns} rows={userRows} />
        {open ? <Add setOpen={setOpen} slug="User" columns={columns} /> : ""}
      </div>
    </div>
  );
};

export default Users;
