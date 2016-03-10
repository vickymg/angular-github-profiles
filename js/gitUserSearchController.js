githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function (){
  // The get method takes an object and uses the key-value pairs as the URI parameter string - hence q.
      self.searchResult = searchResource.get(
        { q: self.searchTerm }
      );
    };
}]);
