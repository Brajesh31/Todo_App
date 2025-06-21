
import inquirer from "inquirer";
import { todo } from "node:test";
let todos:string[]=[];
let loop=true;

while(loop)                         
{const answer:{
  Todo:string,
    addmore:boolean   
  }=await inquirer.prompt([
    {
        type:"input",
        name:"Todo",
        message:"what you want to add in your todo list?"
    },
    {
        type:"confirm",
        name:"addmore",
        message:"do you want to add more todo?",
        default:false
    }
])
const {Todo,addmore} = answer;
loop = addmore
console.log(answer)
if(Todo){
   todos.push(Todo)
}
else{
    console.log("kindly add invalid input")
}
}
if (todos.length > 0){
   console.log("your todos list is")
   todos.forEach(todo=> {
    console.log(todo)
   });
}else{
  console.log("no todos found")
}
