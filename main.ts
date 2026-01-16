// Student To-Do List Program

var tasks = ["Math homework", "English reading", "Science study"];
var completed = [false, false, false];

console.log("My To-Do List:");

for (var i = 0; i < tasks.length; i++) {
  if (completed[i] == true) {
    console.log((i + 1) + ". " + tasks[i] + " - Completed");
  } else {
    console.log((i + 1) + ". " + tasks[i] + " - Not Completed");
  }
}