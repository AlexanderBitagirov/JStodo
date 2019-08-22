window.onload = function (){
    let todoList = [];
    document.getElementById('add').onclick = function () {
        let  addcase = document.getElementById('form').value;
        let temp = {};
        temp.todo = addcase;
        temp.check = false;
        let i = todoList.length;
        todoList[i]= temp;
        console.log (todoList);
    }
}
