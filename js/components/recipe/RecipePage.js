define(['exports', 'module', 'react', 'components/recipe/actions', 'components/recipe/store', 'components/home/store'], function (exports, module, _react, _componentsRecipeActions, _componentsRecipeStore, _componentsHomeStore) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = _interopRequireDefault(_react);

	var Recipe = (function (_React$Component) {
		_inherits(Recipe, _React$Component);

		function Recipe(props) {
			_classCallCheck(this, Recipe);

			_get(Object.getPrototypeOf(Recipe.prototype), 'constructor', this).call(this, props);
			this.state = _componentsRecipeStore.recipeStore.getState();
			_componentsRecipeStore.recipeStore.listen(this.storeUpdate.bind(this));
		}

		_createClass(Recipe, [{
			key: 'storeUpdate',
			value: function storeUpdate() {
				this.setState(_componentsRecipeStore.recipeStore.getState());
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				_componentsRecipeActions.recipeActions.initialize();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {}
		}, {
			key: 'render',
			value: function render() {
				console.log(_componentsHomeStore.homeStore.getState().newRecipes[this.props.params.recipeId - 1]);
				return _React['default'].createElement(
					'div',
					{ id: 'recipe-container', className: 'recipe--container', style: { backgroundImage: 'url(' + _componentsHomeStore.homeStore.getState().newRecipes[this.props.params.recipeId - 1].imgUrl + ')' } },
					_React['default'].createElement(
						'div',
						{ className: 'recipe--container__wrapper flex flex-column' },
						_React['default'].createElement(
							'div',
							{ className: 'text-center flex flex-row justify-center' },
							_React['default'].createElement(
								'div',
								{ className: 'text-center recipe--title__container' },
								_React['default'].createElement(
									'h2',
									null,
									_componentsHomeStore.homeStore.getState().newRecipes[this.props.params.recipeId - 1].title
								)
							)
						),
						_React['default'].createElement(
							'div',
							{ className: 'recipe--box flex flex-row flex-wrap justify-between' },
							_React['default'].createElement(
								'div',
								{ className: 'recipe--section' },
								_React['default'].createElement(
									'h3',
									{ className: 'text-center' },
									'Ingredients'
								),
								_React['default'].createElement(
									'ol',
									{ className: 'direction--list' },
									_componentsHomeStore.homeStore.getState().newRecipes[this.props.params.recipeId - 1].directions.map(function (item) {
										return _React['default'].createElement(
											'li',
											null,
											item
										);
									})
								)
							),
							_React['default'].createElement(
								'div',
								{ className: 'recipe--section' },
								_React['default'].createElement(
									'h3',
									{ className: 'text-center' },
									'Method'
								),
								_React['default'].createElement(
									'ol',
									{ className: 'direction--list' },
									_componentsHomeStore.homeStore.getState().newRecipes[this.props.params.recipeId - 1].directions.map(function (item) {
										return _React['default'].createElement(
											'li',
											null,
											item
										);
									})
								)
							)
						)
					)
				);
			}
		}]);

		return Recipe;
	})(_React['default'].Component);

	module.exports = Recipe;
});
//# sourceMappingURL=RecipePage.js.map