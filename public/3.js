(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    userData: Object\n  },\n  data: function data() {\n    return {\n      loading: false,\n      status: null,\n      dialog: false\n    };\n  },\n  methods: {\n    remove: function remove() {\n      var _this = this;\n\n      this.$store.dispatch(\"removeProfile\", this.userData).then(function (response) {\n        _this.$router.push({\n          name: \"home\"\n        });\n      })[\"catch\"](function (error) {}).then(function () {\n        return _this.loading = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3VzZXIvUmVtb3ZlUHJvZmlsZS52dWU/MzMzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUEsTUFKQSxrQkFJQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEE7QUFLQSxHQVZBO0FBV0E7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0Esa0JBQ0EsUUFEQSxDQUNBLGVBREEsRUFDQSxhQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsT0FKQSxXQUtBLG1CQUxBLEVBTUEsSUFOQSxDQU1BO0FBQUE7QUFBQSxPQU5BO0FBT0E7QUFUQTtBQVhBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy91c2VyL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHBlcnNpc3RlbnQgbWF4LXdpZHRoPVwiMjkwXCI+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jYXJkLXRpdGxlIGNsYXNzPVwiaGVhZGxpbmVcIj5EbyB5b3UgcmVhbGx5IHdhbnQgcmVtb3ZlIHlvdXIgYWNjb3VudD88L3YtY2FyZC10aXRsZT5cbiAgICAgICAgPHYtY2FyZC10ZXh0PllvdXIgYWNjb3VudCdzIGRhdGEsIGRlY2tzIGFuZCBjYXJkcyB3aWxsIGJlIGRlbGV0ZWQuPC92LWNhcmQtdGV4dD5cbiAgICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWJ0biBjb2xvcj1cImdyZWVuIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJkaWFsb2cgPSBmYWxzZVwiPkRpc2FncmVlPC92LWJ0bj5cbiAgICAgICAgICA8di1idG4gY29sb3I9XCJncmVlbiBkYXJrZW4tMVwiIHRleHQgQGNsaWNrPVwicmVtb3ZlXCI+QWdyZWU8L3YtYnRuPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24gfVwiPlxuICAgICAgICA8di1idG4gY29sb3I9XCJwcmltYXJ5XCIgZGFyayB2LW9uPVwib25cIj5SZW1vdmUgYWNjb3VudDwvdi1idG4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1kaWFsb2c+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB1c2VyRGF0YTogT2JqZWN0XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgZGlhbG9nOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByZW1vdmUoKSB7XG4gICAgICB0aGlzLiRzdG9yZVxuICAgICAgICAuZGlzcGF0Y2goXCJyZW1vdmVQcm9maWxlXCIsIHRoaXMudXNlckRhdGEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IFwiaG9tZVwiIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge30pXG4gICAgICAgIC50aGVuKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxubGFiZWwge1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\nlabel[data-v-ce2af0c2] {\\n  font-size: 0.7em;\\n  text-transform: uppercase;\\n  color: green;\\n  font-weight: bolder;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT8wZDU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLHFCQUFxQiw4QkFBOEIsaUJBQWlCLHdCQUF3QixHQUFHO0FBQ25KO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5sYWJlbFtkYXRhLXYtY2UyYWYwYzJdIHtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\n");

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--6-0!./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT9kODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxjQUFjLG1CQUFPLENBQUMsNGtCQUFxVTs7QUFFM1YsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jZTJhZjBjMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"v-dialog\",\n        {\n          attrs: { persistent: \"\", \"max-width\": \"290\" },\n          scopedSlots: _vm._u([\n            {\n              key: \"activator\",\n              fn: function(ref) {\n                var on = ref.on\n                return [\n                  _c(\n                    \"v-btn\",\n                    _vm._g({ attrs: { color: \"primary\", dark: \"\" } }, on),\n                    [_vm._v(\"Remove account\")]\n                  )\n                ]\n              }\n            }\n          ]),\n          model: {\n            value: _vm.dialog,\n            callback: function($$v) {\n              _vm.dialog = $$v\n            },\n            expression: \"dialog\"\n          }\n        },\n        [\n          _c(\n            \"v-card\",\n            [\n              _c(\"v-card-title\", { staticClass: \"headline\" }, [\n                _vm._v(\"Do you really want remove your account?\")\n              ]),\n              _vm._v(\" \"),\n              _c(\"v-card-text\", [\n                _vm._v(\"Your account's data, decks and cards will be deleted.\")\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"v-card-actions\",\n                [\n                  _c(\"v-spacer\"),\n                  _vm._v(\" \"),\n                  _c(\n                    \"v-btn\",\n                    {\n                      attrs: { color: \"green darken-1\", text: \"\" },\n                      on: {\n                        click: function($event) {\n                          _vm.dialog = false\n                        }\n                      }\n                    },\n                    [_vm._v(\"Disagree\")]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"v-btn\",\n                    {\n                      attrs: { color: \"green darken-1\", text: \"\" },\n                      on: { click: _vm.remove }\n                    },\n                    [_vm._v(\"Agree\")]\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT80OGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVMsNkJBQTZCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywwQkFBMEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvQ0FBb0M7QUFDbEUsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy91c2VyL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcGVyc2lzdGVudDogXCJcIiwgXCJtYXgtd2lkdGhcIjogXCIyOTBcIiB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICB2YXIgb24gPSByZWYub25cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKHsgYXR0cnM6IHsgY29sb3I6IFwicHJpbWFyeVwiLCBkYXJrOiBcIlwiIH0gfSwgb24pLFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlIGFjY291bnRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSksXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkbGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJEbyB5b3UgcmVhbGx5IHdhbnQgcmVtb3ZlIHlvdXIgYWNjb3VudD9cIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIllvdXIgYWNjb3VudCdzIGRhdGEsIGRlY2tzIGFuZCBjYXJkcyB3aWxsIGJlIGRlbGV0ZWQuXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY2FyZC1hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRpc2FncmVlXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IFwiZ3JlZW4gZGFya2VuLTFcIiwgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucmVtb3ZlIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFncmVlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&\n");

/***/ }),

/***/ "./resources/js/user/RemoveProfile.vue":
/*!*********************************************!*\
  !*** ./resources/js/user/RemoveProfile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true& */ \"./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&\");\n/* harmony import */ var _RemoveProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoveProfile.vue?vue&type=script&lang=js& */ \"./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& */ \"./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _RemoveProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"ce2af0c2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/user/RemoveProfile.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT8wMzVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR2pHO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0YiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2UyYWYwYzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2UyYWYwYzImc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNlMmFmMGMyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21udC9jL3Byb2plY3RzL2Zpc3prb21hdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjZTJhZjBjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjZTJhZjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjZTJhZjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2UyYWYwYzImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2UyYWYwYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy91c2VyL1JlbW92ZVByb2ZpbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/user/RemoveProfile.vue\n");

/***/ }),

/***/ "./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveProfile.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT84YjkzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBNkwsQ0FBZ0IseVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy91c2VyL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/user/RemoveProfile.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--6-0!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css& */ \"./node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_style_index_0_id_ce2af0c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT9kYjk3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZjLENBQWdCLGdlQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVtb3ZlUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jZTJhZjBjMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/user/RemoveProfile.vue?vue&type=style&index=0&id=ce2af0c2&scoped=true&lang=css&\n");

/***/ }),

/***/ "./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RemoveProfile_vue_vue_type_template_id_ce2af0c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlci9SZW1vdmVQcm9maWxlLnZ1ZT9iMmFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy91c2VyL1JlbW92ZVByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNlMmFmMGMyJnNjb3BlZD10cnVlJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZW1vdmVQcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZTJhZjBjMiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/user/RemoveProfile.vue?vue&type=template&id=ce2af0c2&scoped=true&\n");

/***/ })

}]);