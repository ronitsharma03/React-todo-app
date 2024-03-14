// const todos = [
//     {
//         title: "Go to gym",
//         description: "Go to gym from 5 to 7 pm"
//     }
// ]

export function Todos({todos}) {
    return (
        <div>
            {todos.map(function(todo) {
                    return <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed == true ? "Done" : "Mark as Done"}</button>
                    </div>
                })}
        </div>
    );
}