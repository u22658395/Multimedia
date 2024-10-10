"use strict";

var _express = _interopRequireDefault(require("express"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"]["static"]("frontend/public"));
app.listen(1337, function () {
  console.log("Listening on localhost:1337");
});
app.post("/login", function (req, res) {
  console.log(req.body);
  res.json("login in server returned this");
});
app.post("/register", function (req, res) {
  console.log(req);
  res.json("register in server returned this");
});