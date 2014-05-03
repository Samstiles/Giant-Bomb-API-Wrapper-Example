productivityTime.directive("thing", function(){
  return {
    restrict: "EAC",
    scope: {
      thing: '=thing'
    },
    replace: true,
    templateUrl: "/templates/directives/thing.html",
    link: function(scope, element, attrs){

    }
  };
});