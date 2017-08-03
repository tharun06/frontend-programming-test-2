/**
 * @fileOverview Provides stub for problem4
 * @copyright (C) RiskSense, Inc.
 * @license Proprietary
 */
import temperatureData from './temperatureData.js';

import {
  select as d3Select,
} from 'd3';

const runProblem4 = () => {
  const width = 512;
  const height = 512;
  const mountPoint = d3Select('#d3root');
  const svg = mountPoint.append('svg')
    .attr('width', width)
    .attr('height', height);

  // Remove this text element and put your code here
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', height / 2)
    .attr('text-anchor', 'middle')
    .text('Your solution goes here');

  // Use temperatureData imported above to plot your chart
};

export default runProblem4;
