import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import { GetServerSidePropsContext } from "next";
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

  async function fetchNewData(): Promise<void> {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${pages * 10 //fetch data before state changed because   *** page2 ==> start=1*10 ***
      }`
    );
    const data = await response.json();
    setData(data);
  }
  const handleNextPage = () => {
    setPages((page: number) => page + 1);
    fetchNewData();
  };
  const handlePreviousPage = () => {
    setPages((page: number) => page - 1);
    fetchNewData();
  };

  return (
    <div>
      <div className="inline-flex justify-center items-center w-full py-8 ">
        <button
          onClick={handlePreviousPage}
          disabled={pages <= 1}
          className=" disabled:bg-red-500 mx-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <input
          className="  font-bold  h-full rounded-r text-center text-xl invalid:border-pink-500 invalid:text-pink-600"
          // for="forms-validationInputCode_error"
          value={pages}
          type="number"
          onChange={(e) => {
            setPages(parseInt(e.target.value));
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              // if(typeof pages ==="number")
              fetchNewData();
              // else  setValidInput(e=>!e)
            }
          }}
        />
        <button
          onClick={handleNextPage}
          className=" mx-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <div className="max-w-6xl min-w-6xl items-center justify-center mx-auto">
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
    </div>
  );
}

export default NewsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req, res } = context;
  const pages = query.pages as string;
  const pageNo = pages ? pages : "1";
  const url = pages
    ? `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_start=${
        (parseInt(pageNo) - 1) * 10 // *** page2 ==> start=1*10 ***
      }`
    : `https://api.spaceflightnewsapi.net/v3/articles?_limit=10`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      article: data,
      pageNo: parseInt(pageNo),
    },
    // revalidate: 360 //should be regenerate every 1 hr for ISR
    notFound: data.error ? true : false, //show 404 if directly type wrongpageurl ex page=-0
  };
}
