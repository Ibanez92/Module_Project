import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "./user_card";

const UserFollowers = () => {
  const [followers, setFollowers] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);


  useEffect(() => {
    axios
      .get("https://api.github.com/users/Ibanez92/followers")
      .then((response) => {
        setFollowers(response.data);
      })
      .catch((error) => console.log(error));
    }, []);


  useEffect(() => {
    if (followers.length > 0) {
      followers.map((follower) => {
        return axios
      .get(`https://api.github.com/users/${follower.login}`)
      .then((response) => {
        setUserFollowers(response.data);
      })
      .catch((error) => console.log(error));
      })
    }
  }, [followers])

  return (
    <>
     {userFollowers ? userFollowers?.map(display => (
       <UserCard info={display}/>
     )):null}
    </>
  );
};
export default UserFollowers;
