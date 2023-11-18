//client ..Rightbar.jsx

import "./right.css"
import Online from "../../components/online/Online"; 
import {Users} from "../../dummyData"
import {useEffect,useState,useContext} from "react"
import axios from "axios"
import {AuthContext} from "../../context/AuthContext"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Rightbar({users}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(AuthContext);
  const [followed,setFollowed] =useState(false)
  
  useEffect(()=>{
    setFollowed(currentUser.followings.includes(users?._id))
  },[currentUser,users])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + users._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [users]);
  

  const handleClick = async () =>{
    try{
      if(followed){
        await axios.put("/users/"+users._id+"/follow",{userId:currentUser._id})
      }else{
        await axios.put("/users/"+users._id+"/unfollow",{userId:currentUser._id})
      }

    }catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }
  
  
  
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
     
      {users.usename!==currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "unfollow" : "Follow"}
          {followed ? <i><FontAwesomeIcon icon="fa-solid fa-xmark" /></i> : <i><FontAwesomeIcon icon="fa-solid fa-plus" /></i> }
          Follow <i><FontAwesomeIcon icon="fa-solid fa-plus" /></i>
        </button>
      )}
      <div className="rightbarDiv">
      <h4 className="rightbarTitle">User information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{users.city}</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{users.from}</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{users.relationship ===1 ? "Single" : users.relationship ===1 ? "Married " :"-" }</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      
      <div className="rightbarFollowings">
        {friends.map(friend =>(
        <Link to={"/profile/" + friend.userId} style={{textDecoration:"none"}}>
           <div className="rightbarFollowing">
           <img className="rightbarFollowingImg" src={friend.profilePicture ? PF+friend.profilePicture :PF+"/person/noavataar.png"} alt="" />
           <span className="rightbarFollowingName">{friend.username}</span>
              </div>
         </Link>


        ))}
        

      
      
      </div>
     </div> 

      </>

    );
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {users ? <ProfileRightbar/> :<HomeRightbar/>}
      </div>
    </div>
  )
}