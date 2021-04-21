import React, { useState } from "react"

import Chart from '../components/chart';
import Tab from '../components/tab';
import * as service from '../services/service';
import "../components/layout.css";
import "../components/index.css";

const IndexPage = () => {
  const [flowerIndex, setFlowerIndex] = useState(1);
  const [flowers, setFlowers] = useState([]);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    async function func() {
      await service.init();
      setData(service.getFlowerSeries(flowerIndex));
      setFlowers(service.getFlowersData());
    }
    func();

  }, [flowerIndex]);

  const changeFlower = (index) => {
    setFlowerIndex(index)
  }

  return (
    <div className="container">
      <div className="tabs">
        {flowers.map((flower, index) =>
          <Tab
            key={index}
            name={flower.name}
            humidity={flower.humidity}
            isSelected={flowerIndex === index+1}
            onClick={() => changeFlower(index+1)}
            />
        )}
      </div>
      <div className="chart">
        <Chart data={data} />
      </div>
    </div>);
  }

export default IndexPage;
