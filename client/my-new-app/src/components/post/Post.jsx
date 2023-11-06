import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Post() {
  return (
    <div className="post">
    <div className="postWrapping">
        <div className="postTop">
            <div className="postTopLeft">
            <img src="/assets/person/third.jpg" alt="" className="postProfileImg"/>    
            <span className="postUsername">Lisa</span>
            <span className="postDate">5 mins ago </span>
           
            </div>
            <div className="postTopRight">
                <i><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className="threeDots" /></i>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey it's my First Post :)</span>
            <img src="/assets/post/sunlight.jpg" alt="" className="postImg" width={700} height={700}/><br/>
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">

             <img className="likeIcon" src="/assets/like.png" alt=""  />
             <img  className="likeIcon" src="/assets/heart.png" alt=""   />
             <span className="postLikeCounter">liked by 32 people</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 Comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}
