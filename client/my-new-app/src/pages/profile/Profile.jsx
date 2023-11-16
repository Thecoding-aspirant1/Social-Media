import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useState,useEffect} from "react";
import axios from "axios"

export default function Profile() {

   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   
   const [users,setUser] = useState({});
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/users?username=jane`);
        console.log("Response Data:", res.data); // Log the response data
        console.log("Full Response Object:", res); // Log the entire response object
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchUser();
  }, []);
  



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
            <h4 className="profileInfoName">{users.username}</h4>
            <h4 className="profileInfoDesc">{users.desc}</h4>
         
         </div>
         </div>
         <div className="profileRightBottom">

         <Feed username="jane"/>
        <Rightbar users={users}/>

         </div>
        
        </div>
        
        </div>

       
       </> 
  );
}