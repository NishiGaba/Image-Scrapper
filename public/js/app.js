var myApp = angular.module('imageApp', []);

myApp.controller('imageController', ['$scope','$http',function($scope, $http) {


	//GETTING IMAGES OUTPUT THROUGH GOOGLE SEARCH ENGINE

 	(function() {
	  var cx = '014789268996448848800:t8sinqq1kjw'; // Insert your own Custom Search engine ID here
	  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
	  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx+'&searchType=image&imgcolor=black';
	  var s = document.getElementsByTagName('script')[0];
	  console.log(s.parentNode);
	  s.parentNode.insertBefore(gcse, s);

	  var checking = document.getElementsByTagName("img");
	  console.log(checking);

	  // $http.get('www.google.com/cse?cx=014789268996448848800:t8sinqq1kjw&q='++'&output=xml',function(response) {
	  // 	console.log(response);
	  // });
	})();

	$scope.imageSearch = function() {
		console.log($scope.image.key);

	};
}])