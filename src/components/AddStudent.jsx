import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !score) return;
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form className="add-bar" onSubmit={submit}>
      <input
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Score (0-100)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button>+ ADD</button>
    </form>
  );
}

export default AddStudent;