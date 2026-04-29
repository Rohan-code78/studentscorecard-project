import Row from "./Row";

function Table({ students, updateScore }) {
  return (
    <div className="table">
      <div className="table-header">
        <span>NAME</span>
        <span>SCORE</span>
        <span>STATUS</span>
        <span>UPDATE</span>
      </div>

      {students.map((s) => (
        <Row key={s.id} student={s} updateScore={updateScore} />
      ))}
    </div>
  );
}

export default Table;