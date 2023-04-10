import React from 'react';
import { useEffect } from 'react';

function Final(props) {
  async function fetchUsers(arr) {
    try {
      let user1 = await getUsername(arr[0].user);
      let user2 = await getUsername(arr[1].user);
      let user3 = await getUsername(arr[2].user);
      console.log('user here', user1);
      console.log('user here', user2);
      console.log('user here', user3);
      let allNames = [user1, user2, user3];
      setTopThreeUsers(allNames);
    } catch (error) {
      console.log('failed with', error);
    }
  }
  console.log('propsss', props);
  //   useEffect(() => {
  //     fetchUsers(topThree);
  //   });
  return <div>{props}</div>;
}
export default Final;
