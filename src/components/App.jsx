import { Profile } from "components/Profile/Profile";
import { Statistics }  from "components/Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
  <>
  <Profile {...user}/>
  <Statistics title="Upload stats" stats={data}/>
  <FriendList friends={friends}/>
  <TransactionHistory transactions={transactions}/>
  </>
  )
};

export default App;