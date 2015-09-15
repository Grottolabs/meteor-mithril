/**
 * Created by jakob on 13-09-2015.
 */
m.reactive = function(controller) {
  return function(options) {
    var instance = {};
    var tracker  = Deps.autorun(function() {
      m.startComputation();
      controller.call(instance, options);
      m.endComputation()
    });

    instance.onunload = function() {
      tracker.stop()
    };

    return instance
  }
};