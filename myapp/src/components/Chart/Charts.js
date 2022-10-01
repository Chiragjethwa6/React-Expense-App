import './Charts.css';
import Chartbar from './ChartBar';

const Charts = props => {
    const dataPointvalues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...dataPointvalues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
            <Chartbar
             key={dataPoint.label} 
             value={dataPoint.value} 
             maxValue={totalMax} 
             label={dataPoint.label}
             />)}
        </div>
    )
    
}

export default Charts;