function Stats({ students }) {
  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((a, b) => a + b.score, 0) / total
        );

  return (
    <div className="stats">
      <div className="card">
        <p>TOTAL</p>
        <h2>{total}</h2>
      </div>
      <div className="card">
        <p>PASSED</p>
        <h2>{passed}</h2>
      </div>
      <div className="card">
        <p>AVG SCORE</p>
        <h2>{avg}</h2>
      </div>
    </div>
  );
}
export default Stats;