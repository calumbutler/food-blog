define(['exports', 'components/recipe/actions', 'dispatcher'], function (exports, _componentsRecipeActions, _dispatcher) {
	/*eslint-disable */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var RecipeStore = (function () {
		function RecipeStore() {
			_classCallCheck(this, RecipeStore);

			this.map = {};
			this.bindListeners({
				initialize: _componentsRecipeActions.recipeActions.initialize
			});
		}

		_createClass(RecipeStore, [{
			key: 'initialize',
			value: function initialize() {}
		}]);

		return RecipeStore;
	})();

	var recipeStore = _dispatcher.dispatcher.createStore(RecipeStore, 'RecipeStore');
	exports.recipeStore = recipeStore;
});
//# sourceMappingURL=store.js.map