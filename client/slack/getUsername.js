import retrieveUser from './slackUser';

const getUsername = async () => {
  let userId = 'U04P7NAM6BA';
  let token = '';
  let user = await retrieveUser(userId, token);
  return user;
};

export default getUsername;
