import React from 'react';
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationLegend, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationTooltip, Inject, PieSeries, ChartComponent, SeriesCollectionDirective, SeriesDirective, Legend, Tooltip, DataLabel, LineSeries, Category, BarSeries } from '@syncfusion/ej2-react-charts';
import { sampleData } from './data';
import './App.css';
function App() {

  let dataBarChart = [{ x: 'Jan', y: 50, color: '#c6e2b6', name: 'Chrome' }, { x: 'Feb', y: 57, color: '#99c4ff',name: 'UC Browser' }, { x: 'Mar', y: 48, color: '#a4f4d9', name: 'iPhone' }, { x: 'Apr', y: 60, color: '#99fffb', name: 'Others' }, { x: 'May', y: 70, color: '#ffaf99', name: 'Opera' }, { x: 'Jun', y: 48, color: '#ff99b0', name: 'Android' }];

  return (
  <div className='row'>
    <div className='col-md-6'>
      <AccumulationChartComponent title="Mobile Browser Statistics" 
        legendSettings={{position:"Bottom"}}
        tooltip={{enable: true}}>
        <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, PieSeries]}></Inject>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type="Pie" dataSource={sampleData} innerRadius="50%"
            xName="name" yName="value" dataLabel={{visible: true, name:"text", position:"Inside"}}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
    <div className='col-md-6'>
      <ChartComponent id='charts' width='80%' height='70%' primaryXAxis={{ valueType:'Category' }} title="Horizonal Bar Chart" legendSettings={{visible:true}} tooltip={{enable: true}}>
        <Inject services={[BarSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective pointColorMapping='color' dataSource={dataBarChart} xName='x' yName='y' type='Bar' name='name' marker={{ dataLabel:{visible: true, name:"name", position:"Inside" },visible:true}} >
          </SeriesDirective>
        </SeriesCollectionDirective >
      </ChartComponent>
    </div>
  </div>
  );
}

export default App;