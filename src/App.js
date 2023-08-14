
import "./App.css";
import "./index.css";
import Profile from "./components/Profile/Profile";
import users from "./data/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "./data/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json"

function App() {
  return (
    <div className="style">
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      ></Profile>
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} ></FriendList>
      <TransactionHistory transaction={transactions}></TransactionHistory>
       
    </div>
  );
}

export default App;
