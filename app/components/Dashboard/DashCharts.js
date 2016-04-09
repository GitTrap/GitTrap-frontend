import './styles/DashCharts.scss';
import React from 'react';
import {
  AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area,
  RadialBarChart, RadialBar, Legend,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
 } from 'recharts';

function DashCharts(props){
  const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const data2= [
        {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
        {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
        {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
        {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
        {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
        {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
        {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
      ];
   const data3 = [
      { subject: 'Math', A: 120, B: 110, fullMark: 150 },
      { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
      { subject: 'English', A: 86, B: 130, fullMark: 150 },
      { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
      { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
      { subject: 'History', A: 65, B: 85, fullMark: 150 },
  ];

  const style = {
  	top: "50%",
  	right: 0,
    transform: "translate(0, -50%)",
  	lineHeight: '24px'
  };
  return (
    <div className="DashCharts">
      <ResponsiveContainer  width='100%' height='72%'>
        <AreaChart className="area" data={data}
              margin={{top: 100, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
      </ResponsiveContainer>

      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart className="radial" cx="50%" cy="70%" innerRadius="80%" outerRadius="50%" data={data2}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
          <Legend iconSize={10} width={400} height={10} layout='horizontal' verticalAlign='top' wrapperStyle={style}/>
        </RadialBarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart className="radar" cx="50%" cy="50%" outerRadius="50%" data={data3}>
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
            <PolarGrid />
            <Legend />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]}/>
          </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashCharts;
