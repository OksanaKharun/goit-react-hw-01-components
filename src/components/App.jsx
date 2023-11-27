
import React from 'react'
import Profile from './Profile'
import data from "./user.json";
import Statistics from './Statistics';
import stats from "./data.json";
import friends from "./friends.json"
import Friends from './Friends';
import transactions from './transactions';
import TransactionHistory from './TransactionHistory';

export function App() {
  return (
    <div>
      <Profile
        username={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics
        stats={stats} />
      <Friends
        friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}



