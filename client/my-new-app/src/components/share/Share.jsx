import "./share.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img class="shareProfileImg" src="/assets/person/second.jpg" alt=""/>
             <input placeholder="What's in your mind?" className="shareInput" />
             
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
            <i><FontAwesomeIcon icon="fa-solid fa-film" htmlColor="red" className="shareIcon" /></i>
            <span className="shareOptionText">Photo or Video</span>
            </div>
    
            <div className="shareOption">
            <i><FontAwesomeIcon icon="fa-solid fa-tag" className="shareIcon" /></i>
            <span className="shareOptionText">Tag</span>
            </div>

            
            <div className="shareOption">
            <i><FontAwesomeIcon icon="fa-solid fa-location-dot"  className="shareIcon" /></i>
            <span className="shareOptionText">Locations</span>
            </div>

            <div className="shareOption">
            <i><FontAwesomeIcon icon="fa-solid fa-face-smile-beam" className="shareIcon" /></i>
            <span className="shareOptionText">Feelings</span>
            </div>






          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
