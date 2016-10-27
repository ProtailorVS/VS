'use strict';

angular.module('dashboard').
	component('dashboard',{
				//template: "	<div class=''> <h1 class='new-class'>{{title}}</h1> <button ng-click='someClickTest()'>Click me</button> </div>",
		templateUrl:'./templates/dashboard.html',
		controller: function($scope){

}
	});

	// controller('BlogListController', function($scope){
	// 	console.log("hello")
	// 	$scope.title ='Hi there'
	// 	$scope.someClickTest = function(){
	// 		console.log("clicked")
	// 		$scope.title ='Clicked'
	// 	}
	// });



/*'use strict';

angular.module('blogList').
	component('blogList',{
				//template: "	<div class=''> <h1 class='new-class'>{{title}}</h1> <button ng-click='someClickTest()'>Click me</button> </div>",
		templateUrl:'./templates/auftragerstellen.html',
		controller: function($scope){
			var blogItems = [
			{title: "Some Title", id: 1, descripton: "This is a book"},
			{title: "Some Tit", id: 2, descripton: "This is a boo"},
			{title: "Some T", id: 3, descripton: "This is a b"},
			]

			$scope.items = blogItems;

			$scope.title ='Hi there'
			$scope.clicks = 0
			$scope.someClickTest = function(){
			console.log("clicked")
			$scope.clicks += 1
			$scope.title ='Clicked' + $scope.clicks + ' times'
		}
		}
	});

	// controller('BlogListController', function($scope){
	// 	console.log("hello")
	// 	$scope.title ='Hi there'
	// 	$scope.someClickTest = function(){
	// 		console.log("clicked")
	// 		$scope.title ='Clicked'
	// 	}
	// });*/