import inquirer from "inquirer";
const todos = [];
let AddMore = true;
while (AddMore) {
    const answer = await inquirer.prompt([
        {
            type: "string",
            name: "todo",
            message: "Enter a new TODO",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Enter your TODO",
            default: false,
        },
    ]);
    const { todo, addMore } = answer;
    AddMore = addMore;
    if (answer.todo) {
        todos.push(todo);
    }
    else {
        console.info(`Kindly write any input`);
    }
}
if (todos.length > 0) {
    console.info(`Your todo list:`);
    todos.forEach((t) => console.info(t));
}
else {
    console.info(`No todos in the list`);
}
