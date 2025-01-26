   var todoList = [];
   var idCounter = 1;

   document.querySelector('.add-task').onsubmit = function(event){
      event.preventDefault();
      var taskname = document.getElementById('name').value;

      const newToDo = {};
      newToDo.id = idCounter;
      newToDo.name = taskname;
      newToDo.status = 'pending';

      todoList.push(newToDo);
      idCounter++;

      alert(JSON.stringify(newToDo));
   }