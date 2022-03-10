import Link from "next/link";
import Image from "next/image";
// title, url, imageUrl, summary
type TitleProps = {
  title: string;
  url: string;
  imageUrl: string;
  summary: string;
  key: string;
  id: number;
};
function Title({ title, url, imageUrl, summary, id }: TitleProps) {
  return (
    <div className="flex flex-row py-5">
      <img src={imageUrl}  width={500}
      height={500}></img>
      {/* <h1>id : {id}</h1> */}
      
      <div className="flex flex-col px-2 justify-center">
      <Link href={`/news/${id}`}>
        <a className="font-bold text-2xl py-2">{title}</a>
      </Link>
        <h1>{summary}</h1>
      </div>

      <hr />
    </div>
  );
}

export default Title;
