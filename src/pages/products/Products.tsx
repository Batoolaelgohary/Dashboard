import Datatable from "../../components/dataTable/Datatable";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import { products } from "../../data";

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
    field: "title",
    headerName: "Title",
    width: 100,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    type: "string",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 100,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
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
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>products</h1>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          add new product
        </button>
      </div>
      <div className="product-data">
        <Datatable slug="products" columns={columns} rows={products} />
        {open ? <Add setOpen={setOpen} slug="Product" columns={columns} /> : ""}
      </div>
    </div>
  );
};

export default Products;
