import './pieChart.scss'
import { PieChart, Pie,  Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Mobile', value: 400, color: '#0088FE' },
    { name: 'Desktop', value: 300, color: '#00C49F' },
    { name: 'Laptop', value: 300, color: '#FFBB28' },
    { name: 'Tablet', value: 200, color: '#FF8042' },
];

const Piechart = () => {
return (
    <div className='pie-chart'>
        <h1>leads by source</h1>
        <div className="chart">
            <ResponsiveContainer width='99%' height={300}>
                <PieChart >
                    <Tooltip
                    contentStyle={{background:'#fff',borderRadius:'5px'}}/>
        <Pie
          data={data}
          innerRadius={'70%'}
          outerRadius={'90%'}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
        
      </PieChart>
            </ResponsiveContainer>
        </div>
            <div className="options">
            {data.map(data => (
                <div className='option' key={data.name}>
                    <div className="title">
                        <div className="dot" style={{backgroundColor:data.color}} />
                        <span>
                            {data.name}
                        </span>
                    </div>
                    <span>{data.value }</span>
                    </div>
                ))}
            </div>
    
    </div>
)
}

export default Piechart
