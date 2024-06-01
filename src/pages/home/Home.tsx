import TopDeal from "../../components/TopDeal/TopDeal";
import Charts from "../../components/charts/Charts";
import Visits from "../../components/barChart/Barchart";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import Piechart from "../../components/pieChart/Piechart";
import Areachart from "../../components/areaChart/Areachart";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDeal />
      </div>
      <div className="box box2">
        <Charts {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Charts {...chartBoxRevenue} />
      </div>
      <div className="box box4">
        <Piechart />
      </div>
      <div className="box box5">
        <Charts {...chartBoxProduct} />
      </div>
      <div className="box box6">
        <Charts {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <Areachart />
      </div>
      <div className="box box8">
        <Visits {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <Visits {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
