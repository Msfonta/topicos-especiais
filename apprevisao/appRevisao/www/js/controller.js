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


    $scope.listar = function(){
      return $scope.listagem;
    }

    $scope.listar();

    $scope.salvar = function(lembrete) {
      $scope.listagem.push(angular.copy(lembrete));
      $scope.lembrete = null;
      $scope.listar();
    }

    $scope.excluir = function(index) {
      $scope.listagem.splice(index, 1);
      $scope.listar();
    }

    $scope.editar = function(lembrete, index) {
      $scope.lembrete = lembrete;
      $scope.excluir(index);
      $scope.listar();
    }

    $scope.sair = function() {
      $state.go("login");
    }
  });
});
