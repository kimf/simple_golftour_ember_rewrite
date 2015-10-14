window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchMessage: "Usage of `Ember.merge` is deprecated, use `Ember.assign` instead." },
    // { handler: "log", matchMessage: "In Ember 2.0 component factories must have an `isComponentFactory` property set to true. You registered (subclass of Ember.GlimmerComponent) as a component factory. Either add the `isComponentFactory` property to this factory or extend from Ember.Component." }
  ]
};
