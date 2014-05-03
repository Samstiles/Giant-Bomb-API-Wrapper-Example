productivityTime.directive("taskwrapper", function(){
  return {
    restrict: "EAC",
    scope: {
      task: '=taskdata'
    },
    replace: true,
    templateUrl: "/templates/directives/taskwrapper.html",
    link: function(scope, element, attrs){
      console.log('Heres the task data that made it into the directive!');
      console.log(JSON.stringify(scope.task, null, 4));
    }
  };
});