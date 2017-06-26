app.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller:"loginController"
    })

    .state('listagem', {
      url: "/listagem",
      templateUrl: "listagem.html",
      controller:"listagemController"
    })


    $urlRouterProvider
      .otherwise('listagem')
      .otherwise('login');


})
