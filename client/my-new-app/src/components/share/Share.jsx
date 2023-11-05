import "./share.css"

export default function Share() {
  return (
    <div>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg"src="/assets/post/books.jpg" alt="" width={500} height={300}/>
             <input placeholder="whats in your mind?" className="shareInput" />
        </div>
        <div className="shareButton"></div>
      </div>
    </div>
  )
}
