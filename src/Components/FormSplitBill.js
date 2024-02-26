import Button from "./Button";
import { useState } from "react";

export default function FormSplitBill({
  openSplitBill,
  selectedFriend,
  friends,
}) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);

  function handleBillValue(e) {
    setBillValue(e.target.value);
  }
  function handleYourExpense(e) {
    setYourExpense(e.target.value);
  }
  function calculateBalance(e) {
    console.log(e);
    const updatedFriends = [...friends];
    let filteredFriend;
    e.target.value === "you"
      ? (filteredFriend = updatedFriends.filter(
          (friend) => selectedFriend.id === friend.id
        ))
      : console.log(updatedFriends);
    console.log(filteredFriend);
  }
  return (
    <>
      {openSplitBill ? (
        <form className="form-split-bill" onSubmit={(e) => calculateBalance(e)}>
          <h2>Split a bill with {selectedFriend.name}</h2>

          <label>💰Bill Value</label>
          <input
            onChange={(e) => handleBillValue(e)}
            value={billValue}
            type="text"
          />

          <label>🤑Your expense</label>
          <input
            onChange={(e) => handleYourExpense(e)}
            value={yourExpense}
            type="text"
          />

          <label>👯Friend Expense</label>
          <input value={billValue - yourExpense} type="text" disabled />

          <label>💸Who is paying the bill?</label>
          <select>
            <option value="you">You</option>
            <option value="friend">{selectedFriend.name}</option>
          </select>

          <Button>Split</Button>
        </form>
      ) : null}
    </>
  );
}
