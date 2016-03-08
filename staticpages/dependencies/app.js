angular.module('reqtest', [])
	.controller('requestmaker', ['$scope', '$http', function($scope, $http){
		$scope.greeting = "Hello world"

		$scope.bodyData = {
							firstName: "Lui",
							lastName: "de la Parra",
							heroName: "Mr.X"
		}

		$scope.makeRequest = function (bodyData){
			$http.post('http://localhost:3000/api/heroes/', bodyData)
				.then(function(bodyData){
					console.log("Post request Sent") 
					console.log(bodyData)
				})
		}
		
	}])