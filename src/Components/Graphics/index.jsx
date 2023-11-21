import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graphics = () => {
  const [data, setData] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [countValue, setCountValue] = useState(0); 
  const [countValueEqp, setCountValueEqp] = useState(0); 

  useEffect(() => {
    axios.get('https://localhost:7279/api/Equipament')
      .then(response => {
        const formattedData = response.data.map((item, index) => ({
          id: index + 1,
          Equipamentos: Math.floor(Math.random() * 100) + 1
        }))
        setData(formattedData)
        let count = 0
        const interval = setInterval(() => {
          if (count <= formattedData.length) {
            setCountValue(count)
            count++
          } else {
            clearInterval(interval);
          }
        }, 200)
      })
      .catch(error => {
        console.log(error);
      })

    axios.get('https://localhost:7279/api/Monitoring')
      .then(response => {
        setMonitoring(response.data)
        setCountValueEqp(response.data.length)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white shadow-2xl h-60 flex flex-col justify-center items-center m-4">
        <h1 className="text-8xl font-bold text-slate-800">{countValue}</h1>
        <p className="mt-2 text-sm text-gray-500">Equipamentos Total</p>
      </div>
      <div className="bg-white shadow-2xl h-60 flex flex-col justify-center items-center m-4">
        <h1 className="text-8xl font-bold text-slate-800">{countValueEqp}</h1>
        <p className="mt-2 text-sm text-gray-500">Equipamentos sendo monitorados</p>
      </div>
      <div className="bg-white shadow-2xl col-span-2 flex flex-col justify-center items-center m-4">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Equipamentos" fill="#1E293B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};

export default Graphics;
