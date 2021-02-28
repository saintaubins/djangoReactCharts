import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  AreaChart,
  Area,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Pie,
  PieChart,
  ComposedChart,
  Line,
} from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data01 = {
    "Meta Data": {
      "1. Information":
        "Intraday (5min) open, high, low, close prices and volume",
      "2. Symbol": "IBM",
      "3. Last Refreshed": "2021-02-19 18:45:00",
      "4. Interval": "5min",
      "5. Output Size": "Compact",
      "6. Time Zone": "US/Eastern",
    },
    "Time Series (5min)": {
      "2021-02-19 18:45:00": {
        "1. open": "119.1800",
        "2. high": "119.1800",
        "3. low": "119.1800",
        "4. close": "119.1800",
        "5. volume": "1250",
      },
      "2021-02-19 18:25:00": {
        "1. open": "119.1000",
        "2. high": "119.1000",
        "3. low": "119.1000",
        "4. close": "119.1000",
        "5. volume": "701",
      },
      "2021-02-19 18:20:00": {
        "1. open": "119.0000",
        "2. high": "119.0000",
        "3. low": "119.0000",
        "4. close": "119.0000",
        "5. volume": "490",
      },
      "2021-02-19 18:05:00": {
        "1. open": "119.1500",
        "2. high": "119.1500",
        "3. low": "119.1500",
        "4. close": "119.1500",
        "5. volume": "353",
      },
      "2021-02-19 18:00:00": {
        "1. open": "119.0500",
        "2. high": "119.0500",
        "3. low": "119.0500",
        "4. close": "119.0500",
        "5. volume": "556",
      },
      "2021-02-19 17:35:00": {
        "1. open": "119.0400",
        "2. high": "119.0400",
        "3. low": "119.0000",
        "4. close": "119.0000",
        "5. volume": "706",
      },
    },
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [xVal, setXVal] = useState([]);
  const [yVal, setYVal] = useState([]);
  var xArr = [];
  var yArr = [];
  var xArrs = [];
  var yArrs = [];
  var myKeys = [];

  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&interval=15min&apikey=MA5K7ARUS689CHHY"
      )
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          //console.log(items);
          for (var key in items["Time Series (Daily)"]) {
            xArr.push(key);
            myKeys.push(key);
            //console.log(xArr);
            yArr.push(items["Time Series (Daily)"][key]["1. open"]);
            //console.log(yArr);
          }
          setXVal(xArr);
          setYVal(yArr);
          //console.log("myKeys :", myKeys);
          [xArrs, yArrs] = [
            items["Time Series (Daily)"][myKeys],
            items["Meta Data"],
          ];
          console.log(xArrs);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {/* {xVal.map((val) => {
          <div>{val}</div>;
        })} */}

        <h1 style={{ textAlign: "center", marginTop: "1.4rem" }}>
          Dashboard for this User
        </h1>
        <br />
        <center>
          <div className="grid-container">
            <div className="grid-item">
              <AreaChart
                width={400}
                height={250}
                data={items["Time Series (Daily)"]}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient> */}
                </defs>
                <XAxis dataKey={xVal} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="xVal"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                {/* <Area
                  type="monotone"
                  dataKey="3. low"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                /> */}
              </AreaChart>
            </div>
            <div className="grid-item">
              <BarChart
                width={400}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="grid-item">
              <ComposedChart width={400} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </div>
            <div className="grid-item">
              <PieChart width={400} height={250}>
                <Pie
                  data={data}
                  dataKey="uv"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                />
                <Pie
                  data={data}
                  dataKey="pv"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </center>
      </>
    );
  }
}
