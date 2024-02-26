import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ showForm, setFriends, setShowForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleSetImgUrl(e) {
    setImage(e.target.value);
  }
  function handleAddFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    setImage("https://i.pravatar.cc/48");
    setName("");
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };
    console.log(newFriend);
    //Adding the friend in memmory(state)
    setFriends((cs) => [...cs, newFriend]);
    setShowForm(false);
  }
  return (
    <>
      {showForm ? (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <label>👯Friend name</label>
          <input value={name} onChange={(e) => handleSetName(e)} type="text" />

          <label>🖼️Image URL</label>
          <input
            value={image}
            onChange={(e) => handleSetImgUrl(e)}
            type="text"
          />

          <Button>Add</Button>
        </form>
      ) : null}
    </>
  );
}
