(function(){

  let app = angular.module('blogApp', []);

  app.controller('BlogController', [ '$http', function($http){
    let self = this;
    self.articles = [];

    $http({
      method: 'GET',
      url: 'articles.json'
    }).then(function(response) {
       self.articles = response.data.articles;
      });
  }]);
})();
