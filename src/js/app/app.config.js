'use strict';

angular.module('vs').

			$routeProvider.
			when("/", {
				templateUrl: "/VS/src/templates/dashboard.html"
			}).

			when("/dashboard", {
				templateUrl: "/VS/src/templates/dashboard.html"
			}).

			when("/auftragdetails", {
				templateUrl: "/VS/src/templates/auftragdetails.html"
			}).
			when("/auftragerstellen", {
				templateUrl: "/VS/src/templates/auftragerstellen.html"
			}).
			when("/mitarbeiteruebersicht", {
				templateUrl: "/VS/src/templates/mitarbeiteruebersicht.html"
			}).
			when("/mitarbeiterdetails", {
				templateUrl: "/VS/src/templates/mitarbeiterdetails.html"
			}).
			otherwise({
				template:"Page not Found"
			})

	});