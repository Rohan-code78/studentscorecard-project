function Row({ student, updateScore }) {
  const pass = student.score >= 40;

  return (
    <div className={`row ${pass ? "row-pass" : "row-fail"}`}>
      <span>{student.name}</span>

      <span className="score-text">{student.score}</span>

      <span className={pass ? "badge pass" : "badge fail"}>
        ● {pass ? "PASS" : "FAIL"}
      </span>

      <span className="update-box">
        <span className="score-value">{student.score}</span>

        <div className="arrows">
          <button onClick={() => updateScore(student.id, student.score + 1)}>▲</button>
          <button onClick={() => updateScore(student.id, student.score - 1)}>▼</button>
        </div>

        <button className="save-btn">SAVE</button>
      </span>
    </div>
  );
}

export default Row;