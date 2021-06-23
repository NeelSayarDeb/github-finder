import React from 'react';
import UserItem from './UserItem';

const User = ({ users, loading }) => {
  return (
    <div style={userStyle}>
      {!loading && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default User;
