angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.login = function(user) {
    console.log('Login: ', user);
    $state.go('tab.map');
  };
})

.controller('MainCtrl', function($ionicPopup, $scope, $state) {
  $scope.triggerAlert = function() {
    console.log('triggering alert');
    var confirmPopup = $ionicPopup.confirm({
      title: 'Trigger Alert',
      template: 'Are you sure you want to trigger alert to these employees?'
      // buttons: [
      // { text: 'Cancel' },
      // {
      //   text: 'OK',
      //   type: 'button-assertive'
      // }
    // ]
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('alert triggered');
        $state.go('tab.map');
      } else {
        console.log('alert not triggered');
      }
    });
  }
})

.controller('MapCtrl', function($scope, $state, Map) {
  $scope.mapUrl = Map.getUrl();

  $scope.goHome = function() {
    console.log('going home');
    $state.go('alert');
  };
})

.controller('PersonnelCtrl', function($scope, $state, Personnel) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // $scope.personnel = Personnel.all();

  $scope.needAssistancePersonnel = Personnel.needAssistance();
  $scope.notCheckedInPersonnel = Personnel.notCheckedIn();
  $scope.checkedInPersonnel = Personnel.checkedIn();

  $scope.shownNeedAssistanceGroup = true;
  $scope.shownNotCheckedInGroup = true;
  $scope.shownCheckedInGroup = true;

  $scope.toggleNeedAssistanceGroup = function() {
    if ($scope.isNeedAssistanceGroupShown()) {
      $scope.shownNeedAssistanceGroup = false;
    } else {
      $scope.shownNeedAssistanceGroup = true;
    }
  };

  $scope.isNeedAssistanceGroupShown = function() {
    return $scope.shownNeedAssistanceGroup;
  };

  $scope.toggleNotCheckedInGroup = function() {
    if ($scope.isNotCheckedInGroupShown()) {
      $scope.shownNotCheckedInGroup = false;
    } else {
      $scope.shownNotCheckedInGroup = true;
    }
  };

  $scope.isNotCheckedInGroupShown = function() {
    return $scope.shownNotCheckedInGroup;
  };

  $scope.toggleCheckedInGroup = function() {
    if ($scope.isCheckedInGroupShown()) {
      $scope.shownCheckedInGroup = false;
    } else {
      $scope.shownCheckedInGroup = true;
    }
  };

  $scope.isCheckedInGroupShown = function() {
    return $scope.shownCheckedInGroup;
  };

  $scope.goHome = function() {
    console.log('going home');
    $state.go('alert');
  };

})

.controller('PersonnelDetailCtrl', function($scope, $stateParams, Personnel) {
  $scope.person = Personnel.get($stateParams.personId);
})

.controller('MessageCtrl', function($ionicPopup, $scope, $state) {
  $scope.sendMessage = function() {
    console.log('sending message');

    var alertPopup = $ionicPopup.alert({
        title: 'Message Sent!'
     });
     alertPopup.then(function(res) {
        console.log('message sent');
        document.getElementById('message_txtarea').value = '';
     });
  };

  $scope.goHome = function() {
    console.log('going home');
    $state.go('alert');
  };
});

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
