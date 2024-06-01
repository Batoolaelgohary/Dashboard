import "./topDeal.scss";
import { topDealUsers } from "../../data.ts";
const TopDeal = () => {
  return (
    <div className="top-deal">
      <h1>top deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user-data">
              <div className="user-img">
                <img src={user.img} alt={user.username} />
              </div>
              <div className="user-info">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <div className="amount">
              <span>${user.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeal;
