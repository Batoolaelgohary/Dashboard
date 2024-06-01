import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <ul className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((itemList) => {
              return (
                <li key={itemList.id}>
                  <Link className="list-item" to={itemList.url}>
                    <img src={itemList.icon} alt={itemList.title} />
                    <span>{itemList.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      })}{" "}
    </div>
  );
};

export default Menu;
