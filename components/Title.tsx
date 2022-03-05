import Link from "next/link"

// title, url, imageUrl, summary
type TitleProps = {
    title:string
    url:string
    imageUrl:string
    summary:string
    key:string
    id:number
}
function Title({title,url,imageUrl,summary,id}:TitleProps) {
  
  return (
    <>
    <h1>id : {id}</h1>
    <Link href={`/news/${id}`}>
    <a>{title}</a>
    {/* <h2>{url}</h2>
    <img src={imageUrl}></img>
    <h3>{summary}</h3> */}
    {/* <hr /> */}
    
    </Link>
   <hr />
    </>
  )
}

export default Title