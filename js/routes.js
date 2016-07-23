angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/ontap',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.onTap', {
    url: '/ontap',
    views: {
      'tab4': {
        templateUrl: 'templates/onTap.html',
        controller: 'onTapCtrl'
      }
    }
  })

  .state('tabsController.history', {
    url: '/history',
    views: {
      'tab3': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('tabsController.manage', {
    url: '/manage',
    views: {
      'tab5': {
        templateUrl: 'templates/manage.html',
        controller: 'manageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.kegInfo'
      2) Using $state.go programatically:
        $state.go('tabsController.kegInfo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /ontap/tab4/keg/{id}
      /ontap/tab3/keg/{id}
  */
  .state('tabsController.kegInfo', {
    url: '/keg/{id}',
    views: {
      'tab4': {
        templateUrl: 'templates/kegInfo.html',
        controller: 'kegInfoCtrl'
      },
      'tab3': {
        templateUrl: 'templates/kegInfo.html',
        controller: 'kegInfoCtrl'
      }
    }
  })

  .state('tabsController.changeKeg', {
    url: '/keg/change',
    views: {
      'tab5': {
        templateUrl: 'templates/changeKeg.html',
        controller: 'changeKegCtrl'
      }
    }
  })

  .state('tabsController.kegWeights', {
    url: '/keg/weights',
    views: {
      'tab5': {
        templateUrl: 'templates/kegWeights.html',
        controller: 'kegWeightsCtrl'
      }
    }
  })

  .state('tabsController.beers', {
    url: '/beer/list',
    views: {
      'tab5': {
        templateUrl: 'templates/beers.html',
        controller: 'beersCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/ontap/keg/change')

  

});