import { useRouter } from "next/router";
import New from "../../components/News";

// be title, url, imageUrl, summary
function NewsPage({article}:any) {
  const router = useRouter()
  const handleHome = ()=>{
      router.push("/")
      console.log("test");
      console.log(article);
      
  }
  console.log(article);
  
  return (
    <div>
      <button onClick={handleHome} style={{color:'red'}}>Home</button>
      <h1>NewsPage</h1>
      {
        article.map((each:any)=>{
          return(<New key={each.id} title={each.title} url={each.url} imageUrl={each.imageUrl} summary={each.summary} />)
        })
      }
    </div>
  );
}

export default NewsPage;

export async function getServerSideProps(){
  const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
  const data = await response.json();
  return {
    props:{
      article: data,
    },
  }
  
}
