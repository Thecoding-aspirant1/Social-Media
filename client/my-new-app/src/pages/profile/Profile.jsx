import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {

   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
       <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
         <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileUserImg" src={`${PF}person/fourth.jpg`} alt=""/>  
            <img className="profileCoverImg" src={`${PF}post/mountains.jpeg`} alt=""/>
            
         </div>
         <div className="profileInfo">
            <h4 className="profileInfoName">Suhani Sahu</h4>
            <h4 className="profileInfoDesc">HELLO Friends</h4>
         
         </div>
         </div>
         <div className="profileRightBottom">

         <Feed username/>
        <Rightbar profile/>

         </div>
        
        </div>
        
        </div>

       
       </> 
  );
}
