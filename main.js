window.onload = function () {
    let todoList = [];
    document.getElementById('add').onclick = function () {
        let  addcase = document.getElementById('form').value;
        let temp = {};
        temp.todo = addcase;
        temp.check = false;
        let i = todoList.length;
        todoList[i]= temp;
        console.log (todoList);
        out();
    }

    function out () {
        let out = '';
        for ( let key in todoList ) {

            if (todoList[key].check === true ) {
                out += '<input type="checkbox" chacked>';
            }

            else {
                out += '<input type="checkbox">';

            }

            out += todoList[key].todo + '</br>';

 
            }
        

        document.getElementById('out').innerHTML = out;

        }
    }

