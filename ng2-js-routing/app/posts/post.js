function PostComponent(routeParams) {
  console.log(routeParams.params)
}


PostComponent.parameters = [[ng.router.RouteParams]]

PostComponent.annotations = [
  new ng.ComponentAnnotation({
    injectables: [ng.router.RouteParams]
  }),
  new ng.ViewAnnotation({
    template: ''
  })
]
