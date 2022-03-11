import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "../../components/Title";

// be title, url, imageUrl, summary
function NewsPage({ article, pageNo }: any) {
  const router = useRouter();
  const [pages, setPages] = useState(pageNo);
  const [data, setData] = useState(article);
  const handleHome = () => {
    router.push("/");
    console.log(article);
  };
  console.log(article);
  useEffect(() => {
    router.push(`/news?pages=${pages}`, undefined, { shallow: true });
    console.log("useEffect");
  }, [pages]);

  const fetchNewData = async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${
        pages * 10 //do before state change because   *** page2 ==> start=1*10 ***
      }`
    );
    const data = await response.json();
    
    setData(data);
  };
  const handleNextPage =  () => {
    setPages((page: number) => page + 1);
     fetchNewData();
  };
  const handlePreviousPage =  () => {
    if(pages>1){setPages((page: number) => page - 1);
     fetchNewData();}
  };
  return (
    <div>
      <button onClick={handleHome} style={{ color: "red" }}>
        Home
      </button>
      <h1>NewsPage</h1>
      <div className="flex flex-row">
        <button onClick={handlePreviousPage}>{"<===="}</button>
        <h1>{pages}</h1>
        <button onClick={handleNextPage}>{"====>"}</button>
      </div>

      {data.map((each: any) => {
        return (
          <Title
            key={each.id}
            title={each.title}
            url={each.url}
            imageUrl={each.imageUrl}
            summary={each.summary}
            id={each.id}
          />
        );
      })}
    </div>
  );
}

export default NewsPage;

export async function getServerSideProps(context: any) {
  const { query,req,res } = context;
  const { pages } = query;
  const pageNo = pages ? pages : "1";
  const url = pages
    ? `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${
        (parseInt(pageNo) - 1) * 10 // 63*** page2 ==> start=1*10 ***
      }`
    : `https://api.spaceflightnewsapi.net/v3/articles?_limit=10`;
  // console.log(res);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  
  return {
    props: {
      article: data,
      pageNo: parseInt(pageNo),
    },
    // revalidate: 360 //should be regenerate every 1 hr for ISR
    notFound:(data.error)?true:false //show 404 if directly type wrongpageurl ex page=-0
  };
}
