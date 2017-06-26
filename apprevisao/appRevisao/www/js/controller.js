app.controller('appController', function($scope, $ionicPlatform){
  $ionicPlatform.ready(function() {

    //seu código aqui

  });
});

app.controller('loginController', function($scope, $ionicPlatform, $state){
  $ionicPlatform.ready(function() {

    $scope.usuario = {};

    $scope.entrar = function(usuario) {
      if(usuario.email === "teste@teste" && usuario.senha === "123"){
        $state.go("listagem");
      }
      else{
        alert("Usuário ou senha inválidos!!!");
      }
      $scope.usuario = null;
    }

  });
});

app.controller('listagemController', function($scope, $ionicPlatform, $state){
  $ionicPlatform.ready(function() {

    $scope.lembrete = {};
    $scope.listagem = [];

    $scope.sair = function() {
      $state.go("login");
    }
  });
});
