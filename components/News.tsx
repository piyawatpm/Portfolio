import React from 'react'
// title, url, imageUrl, summary
type NewProps = {
    title:string
    url:string
    imageUrl:string
    summary:string
    key:string
}
function New({title,url,imageUrl,summary}:NewProps) {
  return (
    <>
    <h1>{title}</h1>
    <h2>{url}</h2>
    <img src={imageUrl}></img>
    <h3>{summary}</h3>
    <hr />
    </>
  )
}

export default New