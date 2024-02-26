import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriednsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [openSplitBill, setOpenSplitBill] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({});

  function toggleAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          data={friends}
          openSplitBill={openSplitBill}
          setOpenSplitBill={setOpenSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
        <FormAddFriend
          setShowForm={setShowAddFriend}
          showForm={showAddFriend}
          setFriends={setFriends}
          friends={friends}
        />
        <Button handleClick={toggleAddFriend}>
          {!showAddFriend ? `Add Friend` : `Close`}
        </Button>
      </div>
      <FormSplitBill
        selectedFriend={selectedFriend}
        openSplitBill={openSplitBill}
        friends={friends}
        setFriends={setFriends}
      />
    </div>
  );
}
