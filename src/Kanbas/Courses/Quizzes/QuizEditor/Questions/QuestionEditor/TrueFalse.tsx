function TrueFalse() {
  let res = false;
  return (
    <div>
      <div>
        <input checked={res} type="radio" name="trueFalse" />
        <label>True</label>
      </div>
      <div>
        <input type="radio" name="trueFalse" checked={!res} />
        <label>False</label>
      </div>
    </div>
  );
}

export default TrueFalse;