$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    var taskList = [];
    event.preventDefault()
    var inputTask = $("input#new-task").val();
    var newTask = {task: inputTask};
    taskList.push(newTask);
    $("h2#show-list").show();
    taskList.forEach(function(task) {
      $("select#task-list").append('<option value = ' + task.task + '>' + task.task + '</option>')
    });
  });

    $("form#complete-tasks").submit(function() {
      event.preventDefault();
      $("h2#show-list").show();
      var completeTask = $('#task-list').val()
    $("ul#completed-list").append('<div class="new-task">'+ completeTask + '</div>');
    $('option:selected', this).remove();    
    });
  });
