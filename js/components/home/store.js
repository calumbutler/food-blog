define(['exports', 'components/home/actions', 'dispatcher', 'config'], function (exports, _componentsHomeActions, _dispatcher, _config) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Store = (function () {
		function Store() {
			_classCallCheck(this, Store);

			this.pageName = 'home';
			this.newRecipes = _config.Config.newRecipes;

			this.bindListeners({
				initialize: _componentsHomeActions.actions.initialize,
				currentPage: _componentsHomeActions.actions.currentPage,
				updateNewRecipes: _componentsHomeActions.actions.updateNewRecipes
			});
		}

		_createClass(Store, [{
			key: 'initialize',
			value: function initialize() {}
		}, {
			key: 'currentPage',
			value: function currentPage(pageName) {
				this.currentPage = pageName;
			}
		}, {
			key: 'updateNewRecipes',
			value: function updateNewRecipes(newRecipes) {
				this.newRecipes = newRecipes;
			}
		}]);

		return Store;
	})();

	var homeStore = _dispatcher.dispatcher.createStore(Store, 'Store');
	exports.homeStore = homeStore;
});
//# sourceMappingURL=store.js.map