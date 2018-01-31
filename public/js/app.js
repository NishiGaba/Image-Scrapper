var myApp = angular.module('imageApp', []);

myApp.controller('imageController', ['$scope',function($scope) {

	(function() {
  var cx = '014789268996448848800:t8sinqq1kjw'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

	$scope.imageSearch = function() {
		console.log($scope.image.key);

     


// <script>
//   (function() {
//     var cx = '014789268996448848800:t8sinqq1kjw';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
//   })();
// </script>
// <gcse:search></gcse:search>

	};
}])