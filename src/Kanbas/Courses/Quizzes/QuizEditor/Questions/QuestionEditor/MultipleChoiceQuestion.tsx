import { BsTrash3Fill } from "react-icons/bs";

const options = [
  {
    id: 1,
    text: "Option 1",
  },
  {
    id: 2,
    text: "Option 2",
  },
  {
    id: 3,
    text: "Option 3",
  },
];

function MultipleChoiceQuestion() {

  const deleteOption = (id: number) => {
    console.log("delete option", id);
  };

  return (
    <div>
      {options && (
        <div>
          {" "}
          <label> Correct Answer</label> <input type="text"></input>
        </div>
      )}
      {options.map(
        (option) =>
          option.id !== options[0].id && (
            <div key={option.id}>
              <label>Possible Answers</label>
              <input type="text" value={option.text} />
              <button className="btn"  onClick={() => deleteOption(option.id)}>
                <BsTrash3Fill />
              </button> 
            </div>
          )
      )}
    </div>
  );
}
export default MultipleChoiceQuestion;
