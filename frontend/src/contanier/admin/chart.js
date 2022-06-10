import {useState, useEffect} from 'react';

import { useFetch } from "use-http";
import {
  ResponsiveContainer, BarChart, Bar, XAxis,YAxis, Tooltip,Legend,CartesianGrid,} from "recharts";

function Chart() {
  
  const { get } = useFetch("http://localhost:7000");
  const fetchData = async () => {
    let data = await get("/api/annonce");
    return data;
  };
  
  const  [isLoading, setIsLoading]= useState(true);
  const [data, setData] =useState ([]);
    useEffect(() => {
      fetchData().then((data) => {
        
    console.log(data);
        setData([...data.filter(item=>item.dateCreation.slice(5,8) =="06" &&
          item.dateCreation.slice(0,4) ==
new Date().getFullYear() )])
        setIsLoading(false);
      });
    }, []);
  return (
    <ResponsiveContainer width="50%" height={400}>
      <BarChart data={data}>
        <Bar dataKey="score" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;