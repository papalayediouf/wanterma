import axios from "axios";

import { useEffect, useState } from "react";

export default function Api() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setDatas(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Une erreur est survenue", error);
      }
    };
    fetchData();
  },[]);

  return (
    <div>
      <ul>
        {datas.map((data)=>( 
            <li key={data.id}>
                {data.title}
            </li>
        ))}
      </ul>
      
    </div>
  );
}
