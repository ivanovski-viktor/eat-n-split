import Friend from "./Friend";

export default function FriendsList({
  data,
  openSplitBill,
  setOpenSplitBill,
  setSelectedFriend,
}) {
  const friends = data;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          setOpenSplitBill={setOpenSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
      ))}
    </ul>
  );
}
