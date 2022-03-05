import React, { useEffect, useState } from "react";
import New from "../../components/Title";
function NewsClient() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function TestCSR() {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles?_limit=50"
      );
      const data2 = await response.json();
      setData(data2)
      console.log(data);
    }
    TestCSR()
  }, []);
  console.log(data);
  return(
    <>
    <button onClick={()=>{console.log(data)}}>test</button>
     {data.map((each) => {
        return (
          <New
            key={each.id}
            title={each.title}
            url={each.url}
            imageUrl={each.imageUrl}
            summary={each.summary}
          />
        );
      })}
    </>
  )
}

export default NewsClient;
