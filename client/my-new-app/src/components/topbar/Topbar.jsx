import "./top.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Socialbook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <i><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="searchIcon"/></i>
            <input className="searchInput" placeholder="Search for friend,post or video"/>
            
            </div>
        </div>
        <div className="topbarRight"></div>
        <div className="topbarlinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
           <i><FontAwesomeIcon icon="fa-solid fa-user" clasName="user"/></i>
           
          </div>

          <div className="topbarIconItem">
           <i><FontAwesomeIcon icon="fa-solid fa-message" /></i>
           
          </div>

          <div className="topbarIconItem">
           <i><FontAwesomeIcon icon="fa-solid fa-bell" /></i>
           
          </div>
          
          <div>
            <img src="data:image/jpeg;base64,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" alt="" className="topBarImg" />
          </div>
        </div>
      </div>
    </div>
  )
}
