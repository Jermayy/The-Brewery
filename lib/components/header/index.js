"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _AcUnit = _interopRequireDefault(require("@mui/icons-material/AcUnit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Header = function Header() {
  var Styles = {
    header: {
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      flex: 1,
      fontSize: '40px',
      marginLeft: '16px'
    },
    tempIcon: {
      border: 'solid',
      position: 'relative',
      right: '16px',
      cursor: 'pointer',
      height: 100,
      width: 100
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Styles.header
  }, /*#__PURE__*/React.createElement("h1", {
    style: Styles.title
  }, "The Brewery Transport"), /*#__PURE__*/React.createElement(_AcUnit.default, null), /*#__PURE__*/React.createElement("div", {
    style: Styles.tempIcon
  }, /*#__PURE__*/React.createElement(_AcUnit.default, null)));
};

var _default = Header;
exports.default = _default;