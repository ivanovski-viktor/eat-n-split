import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    if (!name || !image) return;
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯Friend name</label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />

      <label>🖼️Image URL</label>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="text"
      />

      <Button>Add</Button>
    </form>
  );
}
