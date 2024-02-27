import Friend from "./Friend";

export default function FriendsList({ data, onSelection, selectedFriend }) {
  const friends = data;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          onSelection={onSelection}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
