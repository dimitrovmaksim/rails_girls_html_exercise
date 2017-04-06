(function(){

  let app = angular.module('blogApp', []);

  app.controller('BlogController', [ '$http', function($http){
    let self = this;
    self.articles = [
    {
      "img": "resources/lorem-ipsum.jpg",
      "body": "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.",
      "title": "Lorem Ipsum Title 1",
      "author" : "Cicero"
    },
    {
      "img": "resources/lorem-ipsum.jpg",
      "body": "t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?",
      "title": "Lorem Ipsum Title 2",
      "author" : "Cicero"
    },
    {
      "img": "resources/lorem-ipsum.jpg",
      "body": "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      "title": "Lorem Ipsum Title 3",
      "author" : "Cicero"
    },
    {
      "img": "resources/lorem-ipsum.jpg",
      "body": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.",
      "title": "Lorem Ipsum Title 4",
      "author" : "Cicero"
    },
    {
      "img": "resources/lorem-ipsum.jpg",
      "body": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
      "title": "Lorem Ipsum Title 5",
      "author" : "Cicero"
    }
  ];

   //  $http({
   //    method: 'GET',
   //    url: '/articles.json'
   // }).then(function(data) {
   //     self.articles = data;
   //     console.log(self.articles);
   //  });

  }]);
})();
