import "./right.css"
import Online from "../../components/online/Online"; 
import {Users} from "../../dummyData"

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
          <b>Priya</b> and <b>other friends</b> have a birthday today   
         </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

           {Users.map(u => (
            <Online key={u.id} user={u} />
           ))}
           </ul>


      </>
    );
  }

  const ProfileRightbar = ()=> {
    return(
      <>
      <div className="rightbarDiv">
      <h4 className="rightbarTitle">User information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/first.jpg`} alt="" />
          <span className="rightbarFollowingName">Sneha</span>
        </div>

        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/third.jpg`} alt="" />
          <span className="rightbarFollowingName">Megha</span>
        </div>

        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/second.jpg`} alt="" />
          <span className="rightbarFollowingName">Lisa</span>
        </div>

        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src={`${PF}person/fifth.jpg`} alt="" /><br/>
          <span className="rightbarFollowingName">Priya</span>
        </div>
      </div>
      
      </div>
      </>

    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> :<HomeRightbar/>}
      </div>
    </div>
  )
}