import { Link } from 'react-router-dom'
import './charts.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'

type Props = {
    color: string;
    icon: string;
    title: string;
    number: number | string;
    dataKey: string;
    percentage: number;
    chartData: object[];
}
const Charts = (props:Props) => {


    return (
    <div className='chart'>
        <div className="box-info">
            <div className="title">
                  <img src={props.icon} alt={props.title} />
                    <span>{props.title}</span>
            </div>
                <h1>{ props.number}</h1>
            <Link to={'#'} style={{color:props.color}}>
                View All
            </Link>

        </div>
        <div className="chart-info">
            <div className="chart-img">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart
                            data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: 'transparent', border: 'none' }}
                                labelStyle={{ display: 'none' }}
                                position={{x:10,y:60}}/>
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <span className='percentage' style={{color: props.percentage<0?"tomato":'limegreen'}}>{props.percentage }%</span>
                <span className='duration'>this month</span>
            
        </div>
    </div>
    )
}

export default Charts
