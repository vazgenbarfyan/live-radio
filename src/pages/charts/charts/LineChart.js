import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';

class SimpleLineChart extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      man: PropTypes.number,
      woman: PropTypes.number,
    })).isRequired,
  }

	render () {
  	return (
      <ResponsiveContainer height={300} width='100%'>
        <LineChart 
          data={this.props.data}
          margin={{top: 20, left: -10}}
        >
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="man" stroke="#5d80f9" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="woman" stroke="#f3c363" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;
