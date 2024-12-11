const PersonForm = ({
  newName,
  newNumber,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={onNameChange} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>
          <p>debug name: {newName}</p>
        </div>
        <div>
          <p>debug number: {newNumber}</p>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
