import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  columns: GridColDef[];
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.setOpen(false);
  }
  return (
    <div className="add">
      <div className="modal">
        <span
          className="close"
          onClick={() => {
            props.setOpen(false);
          }}
        >
          X
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => {
              return (
                <div className="input">
                  <label htmlFor="">{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              );
            })}

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
