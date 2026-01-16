// Student To-Do List Program

const tasks: string[] = ["Math homework", "English reading", "Science study"];
const completed: boolean[] = [false, false, false];

console.log("My To-Do List:");

for (let i = 0; i < tasks.length; i++)
  if (completed[i] === true) {
    console.log((i + 1) + ". " + tasks[i] + " - Completed");
  } else {
    console.log((i + 1) + ". " + tasks[i] + " - Not Completed");
  }