import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

// Placeholder data for now.
const data = [
  {
    name: 1, uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 2, uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 3, uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 4, uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 5, uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 6, uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 7, uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Graph extends React.Component {
  constructor(props){
    super();
    this.state = {
      data: data
    }
  }

  addRandomPoint() {
    var data = this.state.data.slice(1);
    data.push({
      name: this.state.data.slice(-1)[0].name + 1, uv: Math.round(Math.random() * 3000) + 1000,
      pv: Math.round(Math.random() * 3000) + 1000, amt: 0
    })
    this.setState({
      data: data
    });
    setTimeout(() => this.addRandomPoint(), 100);
  }

  componentDidMount() {
    this.addRandomPoint();
  }

  render() {
    return (
      <div>
        <h4><span style={{color: "#447387"}}>YOUR</span> <span style={{color: "#6ab457"}}>BRAIN</span></h4>
        <LineChart
          width={500}
          height={200}
          isAnimationActive={true}
          data={this.state.data}
          syncId="graph"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 4000]}/>
          <Tooltip />
          <Line type="natural" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} dot={false} />
        </LineChart>
        <br />
        <h4><span style={{color: "#447387"}}>EVERYBODY ELSE'S</span> <span style={{color: "#6ab457"}}>BRAIN</span></h4>
        <LineChart
          width={500}
          height={200}
          isAnimationActive={false}
          data={this.state.data}
          syncId="graph"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 4000]}/>
          <Tooltip />
          <Line type="natural" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} dot={false} />
        </LineChart>
      </div>
    );
  }
}