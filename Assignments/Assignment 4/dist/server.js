"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var port = 3000;
//CREATE APP
//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(_express["default"]["static"]("public"));
//PORT TO LISTEN TO
app.listen(port, function () {
  console.log("Listening on localhost:".concat(port));
});