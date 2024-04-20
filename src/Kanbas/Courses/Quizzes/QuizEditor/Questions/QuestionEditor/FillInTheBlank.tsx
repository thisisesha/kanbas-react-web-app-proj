import { BsTrash3Fill } from "react-icons/bs";

function FillInTheBlank() {
    let arr = [
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
    ]


    const deleteOption = (id: number) => {
      console.log("delete option", id);
    };
  return (
    <div>
        {arr.map((option) => (
            <div key={option.id}>
                <label>Possible Answer</label>
                <input type="text" value={option.text}/>
                <button className="btn"  onClick={() => deleteOption(option.id)}>
                <BsTrash3Fill />
              </button> 
            </div>
        ))}
      
    </div>
  );
}

export default FillInTheBlank;
