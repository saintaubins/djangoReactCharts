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
  const symbol = "IBM";
  const interval = "15min";
  const secret = "MA5K7ARUS689CHHY";
  const url = "https://www.alphavantage.co/query?";
  const theFunction = "TIME_SERIES_DAILY_ADJUSTED";

  const [error, setError] = useState(null);
  const [thisData, setThisData] = useState({ hits: [] });

  useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        `${url}function=${theFunction}&symbol=${symbol}&interval=${interval}&apikey=${secret}`
      );

      setThisData(Object.values(result.data));
    };

    fetchData();
  }, []);

  // converted raw data
  const convertData = (myData) => {
    let myArr = [];

    for (let name in myData[1]) {
      myArr.push({
        name: name.toString(),
        open: parseFloat(myData[1][name]["1. open"]),
        high: parseFloat(myData[1][name]["2. high"]),
        low: parseFloat(myData[1][name]["3. low"]),
        close: parseFloat(myData[1][name]["4. close"]),
      });
    }
    return myArr;
  };

  // converted Header
  const convertHeader = (myData) => {
    let myArr = [];

    for (let name in myData[0]) {
      myArr.push({
        header: myData[0][name].toString(),
      });
    }
    return myArr;
  };

  // have to run these assignments after function definitions above

  const convertedData = convertData(thisData);
  const convertedHeader = convertHeader(thisData);

  console.log(convertedData);
  // if (convertedHeader.length > 0) {
  //   console.log(convertedHeader[1]["header"]);
  // }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (convertedData.length > 0 && convertedHeader.length > 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "1.4rem" }}>
          {convertedHeader[0]["header"]}
        </h1>
        <h2 style={{ textAlign: "center", marginTop: "1.4rem" }}>
          Stock : {convertedHeader[1]["header"]}
        </h2>

        <br />
        <center>
          <div className="grid-container">
            <div className="grid-item">
              <AreaChart
                width={400}
                height={250}
                data={convertedData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="high"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="low"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
            <div className="grid-item">
              <BarChart
                width={400}
                height={250}
                data={convertedData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="high" fill="#8884d8" />
                <Bar dataKey="low" fill="#82ca9d" />
              </BarChart>
            </div>
            <div className="grid-item">
              <ComposedChart width={400} height={250} data={convertedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area
                  type="monotone"
                  dataKey="open"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="low" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="high" stroke="#ff7300" />
              </ComposedChart>
            </div>
            <div className="grid-item">
              <PieChart width={400} height={250}>
                <Pie
                  data={convertedData}
                  dataKey="high"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                />
                <Pie
                  data={convertedData}
                  dataKey="low"
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
      </div>
    );
  } else return <div className="my-center">Still loading data</div>;
}
