document.addEventListener('DOMContentLoaded', function() {
  window.app = ng.bootstrap(AppComponent, [
    ng.router.routerInjectables,
    ng.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy)
  ]);
});
