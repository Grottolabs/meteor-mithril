/**
 * Created by jakob on 13-09-2015.
 */

/**
 * Make a controller reactive
 * @param controller
 * @returns {Function}
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

/**
 * Wrapper for Deps.autorun that runs m.redraw() on updates
 * @param target
 * @param reactiveFunction
 */
m.autoRedraw = function (target, reactiveFunction) {
  var tracker = Deps.autorun(function () {
    reactiveFunction.bind(target)();
    m.redraw();
  });
  target.onunload = function () {
    tracker.stop()
  };
};