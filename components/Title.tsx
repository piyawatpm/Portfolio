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
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
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
      <Link href={`/news/${id}`} passHref>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <h1>{process.env.RANDOM_NAME_API}</h1>
          <div className=" cursor-pointer  flex-none h-[256px]">
            <Image
              src={imageUrl}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              width="250"
              height="256"
              alt="image"
            ></Image>
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
