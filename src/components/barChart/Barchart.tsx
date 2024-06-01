import './barchart.scss'
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
type Props= {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const Barchart = (props:Props) => {
    return (
    <div className='visits'>
        <h2>{props.title}</h2>
        <div className="bar-chart">
            <ResponsiveContainer width="99%" height="100%">
                <BarChart data={props.chartData}>
                    <Tooltip
                            contentStyle={{ background: '#2a3447', borderRadius: '5px',border:'none' }}
                            labelStyle={{ display: 'none' }}
                            cursor={{fill:'none'}}
                    />
        <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
)
}

export default Barchart
