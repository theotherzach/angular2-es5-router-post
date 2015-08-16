function AppComponent(router, locationStrategy) {
  router.config([{
    path: '/',
    component: HomeComponent,
    as: 'home'
  }, {
    path: '/about',
    component: AboutComponent,
    as: 'about'
  }, {
    path: '/posts/:id',
    component: PostComponent,
    as: 'post'
  }])

}

AppComponent.parameters = [
  [ng.router.Router],
  [ng.router.LocationStrategy]
]

AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app',
    injectables: [ng.router.Router, ng.router.LocationStrategy]
  }),
  new ng.ViewAnnotation({
    templateUrl: '/app/app.html',
    directives: [
      ng.router.RouterLink,
      ng.router.RouterOutlet
    ]
  })
];
