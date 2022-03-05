import { useRouter } from "next/router";
import Title from "../../components/Title";

// be title, url, imageUrl, summary
function NewsPage({ article }: any) {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
    console.log("test");
    console.log(article);
  };
  console.log(article);

  return (
    <div>
      <button onClick={handleHome} style={{ color: "red" }}>
        Home
      </button>
      <h1>NewsPage</h1>
      {article.map((each: any) => {
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

export async function getStaticProps() {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v3/articles?_limit=50"
  );
  const data = await response.json();
  return {
    props: {
      article: data,
    },
    revalidate: 360 //should be regenerate every 1 hr
    // notFound:true
  };
}
