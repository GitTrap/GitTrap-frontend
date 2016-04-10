import './styles/DashCharts.scss';
import React, { Component } from 'react';

import {
  AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area,
  RadialBarChart, RadialBar, Legend,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, LineChart, Line
 } from 'recharts';

export default class DashCharts extends Component {
  render () {
    const data = [
          {name: 'Page A', uv: 4000},
          {name: 'Page B', uv: 3000},
          {name: 'Page C', uv: 2000},
          {name: 'Page D', uv: 2780},
          {name: 'Page E', uv: 1890},
          {name: 'Page F', uv: 2390},
          {name: 'Page G', uv: 3490},
    ];
    const data2= [
          {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
          {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
          {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
          {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
          {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
        ];
     const data3 = [
        { subject: 'Math', A: 120, fullMark: 150 },
        { subject: 'Chinese', A: 98, fullMark: 150 },
        { subject: 'English', A: 86, fullMark: 150 },
        { subject: 'Geography', A: 99, fullMark: 150 },
        { subject: 'Physics', A: 85, fullMark: 150 },
        { subject: 'History', A: 65, fullMark: 150 },
    ];

    const style = {
      top: "20%",
      width: '100% !important',
      right: 0,
      transform: "translate(0, -50%)",
      lineHeight: '24px'
    };
    return (
      <div className="DashCharts">
        <ResponsiveContainer  width='100%' height='72%'>
          <LineChart className="area" data={data}
                margin={{top: 100, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Line type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <RadialBarChart className="radial" cx="50%" cy="70%" innerRadius="80%" outerRadius="50%" data={data2}>
            <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
            <Legend iconSize={10} width={400} height={10} layout='horizontal' verticalAlign='bottom' wrapperStyle={style}/>
          </RadialBarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart className="radar" cx="50%" cy="50%" outerRadius="50%" data={data3}>
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]}/>
            </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default DashCharts;
