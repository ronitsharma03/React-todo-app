import { useState } from "react";

export function CreateTodo(){
    const [title, setTitile] = useState([]);
    const [description, setDescription] = useState([]);
    return (
        <div>
            <input type="text" placeholder="Title" onChange={function(event){
                const title = event.target.value;
                setTitile(title);
            }}/><br /><br />
            <input type="text" placeholder="Description" onChange={function(event){
                const description = event.target.value;
                setDescription(description);
            }}/><br /><br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(response){
                  const json = await response.json();
                  // console.log(json);
                //   setTodos(json.todos);
                    alert("Todo Added");
                });
            }}>Add Todo</button><br />
        </div>
    );
}

// export default CreateTodo;