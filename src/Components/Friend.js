import Button from "./Button";

export default function Friend({
  friend,
  setOpenSplitBill,
  setSelectedFriend,
}) {
  function onClickHandler() {
    setOpenSplitBill((cs) => !cs);
    setSelectedFriend(friend);
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p className="red">
          You owe {friend.name} {String(friend.balance).substr(1, 999)}$
        </p>
      )}
      <Button handleClick={onClickHandler}>Select</Button>
    </li>
  );
}
