define(['exports', 'dispatcher'], function (exports, _dispatcher) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var RecipeActions = (function () {
		function RecipeActions() {
			_classCallCheck(this, RecipeActions);
		}

		_createClass(RecipeActions, [{
			key: 'initialize',
			value: function initialize() {
				this.dispatch();
			}
		}, {
			key: 'changeMapSize',
			value: function changeMapSize(size) {
				this.dispatch(size);
			}
		}]);

		return RecipeActions;
	})();

	var recipeActions = _dispatcher.dispatcher.createActions(RecipeActions);
	exports.recipeActions = recipeActions;
});
//# sourceMappingURL=actions.js.map