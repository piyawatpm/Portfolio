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
  const a = "test";
  return (
    <div className="flex flex-row py-5">
      {/* <img src={imageUrl}  width={500}
      height={500}></img>
      
      <div className="flex flex-col px-2 justify-center">
      <Link href={`/news/${id}`}>
        <a className="font-bold text-2xl py-2">{title}</a>
      </Link>
        <h1>{summary}</h1>
      </div> */}
      <Link href={`/news/${id}`}>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className=" cursor-pointer  flex-none h-[256px]">
            <Image src={imageUrl} width="250" height="256"></Image>
          </div>
          <div className=" cursor-pointer hover:bg-[gainsboro] border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
            <div>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {title}
              </div>
              <p className="text-gray-700 text-base">{summary}</p>
            </div>
          </div>
        </div>
      </Link>
     
    </div>
  );
}

export default Title;
