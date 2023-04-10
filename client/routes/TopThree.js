import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { ChannelContext } from './Root';
import topMessages from '../slack/topMessages';
import getUsername from '../slack/getUsername';
import { useDispatch } from 'react-redux';
import Final from './final';
import { Link } from 'react-router-dom';

const TopThree = () => {
  //const dispatch = useDispatch()
  const [channel] = useContext(ChannelContext);
  const [topThree, setTopThree] = useState();
  async function fetchData(channel) {
    try {
      let channel = 'C04NDJL4TSL';
      let token = '';
      let messages = await topMessages(channel, token);
      setTopThree(messages);
    } catch (error) {
      console.log('failed with', error);
    }
  }
  console.log(topThree);
  useEffect(() => {
    fetchData(channel);
  }, []);
  function total(arr) {
    let total = 0;
    for (let i in arr) {
      total += i.count;
    }
    return total;
  }
  // user1total;

  if (topThree) {
    return (
      <div>
        <h1>HERE IS THIS WEEKS WINNER</h1>
        <div>------------------------</div>
        <h1>HERE IS FIRST PLACE</h1>
        <h2>{topThree[0].user}</h2>
        <h3>
          Message: {topThree[0].text} Reactions Count:{' '}
          {total(topThree[0].reactions)}
        </h3>
        <h1>HERE IS SECOND PLACE</h1>
        <h2>{topThree[1].user}</h2>
        <h1>HERE IS THIRD PLACE</h1>
        <h2>{topThree[2].user}</h2>
      </div>
    );
  } else {
    return <div> Loading ...</div>;
  }
};

export default TopThree;
