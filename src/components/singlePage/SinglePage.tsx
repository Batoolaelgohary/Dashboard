import "./singlePage.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: {
    time: string;
    text: string;
  }[];
};

const SinglePage = (props: Props) => {
  return (
    <div className="single-page">
      <div className="data">
        <div className="title">
          <img src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <button>Update</button>
        </div>

        {Object.entries(props.info).map((item) => {
          return (
            <ul className="info" key={item[0]}>
              <li>
                <span className="info-title">{item[0]} :</span>
                <span className="info-details">{item[1]}</span>
              </li>
            </ul>
          );
        })}
        <div className="chart">
          {props.chart && (
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                  }}
                  position={{ x: 10, y: 100 }}
                />
                <Legend />
                {props.chart.dataKeys.map((item) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={item.name}
                      stroke={item.color}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="last-activity">
        <h2>Latest Activities</h2>
        {props.activities.map((item) => {
          return (
            <ul>
              <li>
                <div>
                  <p>{item.text}</p>
                  <time>{item.time}</time>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePage;
