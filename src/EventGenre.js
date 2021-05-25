
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

      const data = genres.map(genre => {
        const value = events.filter(({ summary }) => summary.split(' ').includes(genre)).length;
        return { name: genre, value };
      });
      return data.filter(data => data.value > 0);
    };
    setData(() => getData());
  }, [events]);
  const colours = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  console.log(events);
  return (
    <ResponsiveContainer height={200} >
      <PieChart height={200} >
        <Pie
          className="pie-chart"
          data={data}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          cx="47%" cy="50%"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colours[index % colours.length]}
              name={entry.name}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;