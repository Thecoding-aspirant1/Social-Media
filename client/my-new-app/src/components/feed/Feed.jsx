import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post.jsx"
export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </div>
    </div>
  )
}
