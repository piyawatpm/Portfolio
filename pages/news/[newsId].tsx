import React from "react";
type Detail = {
  id: 0;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [
    {
      id: string;
      provider: string;
    }
  ];
  events: [
    {
      id: string;
      provider: string;
    }
  ];
};
function NewDetail({ details }: any) {
  return (
    <>
      <div>
        <h1>{details.title}</h1>
        <h2>summary</h2>
        <h2>{details.summary}</h2>
      </div>
    </>
  );
}
// export async function getStaticPaths() {
//     const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=50");
//     const data = await res.json();
//     const pahts = data.map((news:any)=>{
//         return{
//             params:{
//                 newsId:`${news.id}`
//             },
//         }
//     })
//   return {
//     paths:pahts,
//     fallback: false,
//   };
// }
export default NewDetail;
export async function getServerSideProps(context: any) {
  const { params } = context;
  const { newsId } = params;
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles/${newsId}`
  );
  const data = await response.json();
  return {
    props: {
      details: data,
    },
    // notFound:truef
  };
}
