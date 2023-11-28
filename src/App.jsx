
import React from 'react'
import Profile from './components/Profile'
import data from "./information/user.json";
import Statistics from './components/Statistics';
import stats from "./information/data.json";
import friends from "./information/friends.json"
import Friends from './components/Friends';
import transactions from './information/transactions.json';
import TransactionHistory from './components/TransactionHistory';

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



