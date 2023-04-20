"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/commonFuntion.js":
/*!************************************!*\
  !*** ./pages/api/commonFuntion.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\nfunction sendMail(mailto, mailsubject, mailhtml, text, attachments) {\n    try {\n        var transporter = nodemailer.createTransport({\n            service: \"gmail\",\n            auth: {\n                user: \"zahid.rsldubai@gmail.com\",\n                pass: \"etqxlhzqhdoqnyrg\"\n            }\n        });\n        var mailOptions = {\n            from: \"ALT-Technologies\",\n            to: mailto,\n            subject: mailsubject,\n            html: mailhtml,\n            text: text,\n            replyTo: \"zahidkhanb9111@gmail.com\",\n            attachments: attachments\n        };\n        transporter.sendMail(mailOptions, function(error, info) {\n            if (error) {\n                console.log(error);\n            } else {\n                console.log(\"Email sent: \" + info.response);\n            }\n        });\n    } catch (err) {\n        console.log(err);\n    }\n}\n;\nmodule.exports = {\n    sendMail\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbW9uRnVudGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLGFBQWFDLG1CQUFPQSxDQUFDO0FBRzNCLFNBQVNDLFNBQVNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFO0lBQ2hFLElBQUk7UUFDQSxJQUFJQyxjQUFjUixXQUFXUyxlQUFlLENBQUM7WUFDekNDLFNBQVM7WUFDVEMsTUFBTTtnQkFDRkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNWO1FBQ0o7UUFDQSxJQUFJQyxjQUFjO1lBQ2RDLE1BQU07WUFDTkMsSUFBSWI7WUFDSmMsU0FBU2I7WUFDVGMsTUFBTWI7WUFDTkMsTUFBTUE7WUFDTmEsU0FBUztZQUNUWixhQUFhQTtRQUNqQjtRQUNBQyxZQUFZTixRQUFRLENBQUNZLGFBQWEsU0FBVU0sS0FBSyxFQUFFQyxJQUFJLEVBQUU7WUFDckQsSUFBSUQsT0FBTztnQkFDUEUsUUFBUUMsR0FBRyxDQUFDSDtZQUNoQixPQUFPO2dCQUNIRSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCRixLQUFLRyxRQUFRO1lBQzlDLENBQUM7UUFDTDtJQUNKLEVBQUUsT0FBT0MsS0FBSztRQUNWSCxRQUFRQyxHQUFHLENBQUNFO0lBQ2hCO0FBQ0o7O0FBRUFDLE9BQU9DLE9BQU8sR0FBRztJQUNiekI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2plZW5hLXJlYWN0Ly4vcGFnZXMvYXBpL2NvbW1vbkZ1bnRpb24uanM/ZjNhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlbWFpbGVyID0gcmVxdWlyZSgnbm9kZW1haWxlcicpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbmRNYWlsKG1haWx0bywgbWFpbHN1YmplY3QsIG1haWxodG1sLCB0ZXh0LCBhdHRhY2htZW50cykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgICAgICAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXHJcbiAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IFwiemFoaWQucnNsZHViYWlAZ21haWwuY29tXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzOiBcImV0cXhsaHpxaGRvcW55cmdcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZnJvbTogXCJBTFQtVGVjaG5vbG9naWVzXCIsXHJcbiAgICAgICAgICAgIHRvOiBtYWlsdG8sXHJcbiAgICAgICAgICAgIHN1YmplY3Q6IG1haWxzdWJqZWN0LFxyXG4gICAgICAgICAgICBodG1sOiBtYWlsaHRtbCxcclxuICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgcmVwbHlUbzogXCJ6YWhpZGtoYW5iOTExMUBnbWFpbC5jb21cIixcclxuICAgICAgICAgICAgYXR0YWNobWVudHM6IGF0dGFjaG1lbnRzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMsIGZ1bmN0aW9uIChlcnJvciwgaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBzZW50OiAnICsgaW5mby5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlbmRNYWlsXHJcbn07Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXF1aXJlIiwic2VuZE1haWwiLCJtYWlsdG8iLCJtYWlsc3ViamVjdCIsIm1haWxodG1sIiwidGV4dCIsImF0dGFjaG1lbnRzIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInJlcGx5VG8iLCJlcnJvciIsImluZm8iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJlcnIiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/commonFuntion.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commonFunction = __webpack_require__(/*! ./commonFuntion */ \"(api)/./pages/api/commonFuntion.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const reqBody = req.body;\n        var mailsubject = \"Contact Us\";\n        var attachments = null;\n        var text = null;\n        var toEmail = \"zahid.k@alt-technologies.ae\";\n        var mailhtml = '<table><tr><th style=\"text-align:left\">Name</th><th>:</th><td>' + reqBody.name + '</td></tr><tr><th style=\"text-align:left\">Mobile Number</th><th>:</th><td>' + reqBody.number + '</td></tr><tr><th style=\"text-align:left\">Email</th><th>:</th><td>' + reqBody.email + '</td></tr><tr><th style=\"text-align:left\">Subject</th><th>:</th><td>' + reqBody.subject + '</td></tr><tr><th style=\"text-align:left\">Message</th><th>:</th><td>' + reqBody.text + \"</td></tr></table>\";\n        commonFunction.sendMail(toEmail, mailsubject, mailhtml, text, attachments);\n        res.status(200).send(\"Email send successfully\");\n    } catch (error) {\n        console.log(error);\n        res.status(500).send(\"Error proccessing charge\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsaUJBQWlCQyxtQkFBT0EsQ0FBQywyREFBaUI7QUFFaEQsaUVBQWUsT0FBT0MsS0FBS0MsTUFBUTtJQUMvQixJQUFJO1FBQ0EsTUFBTUMsVUFBVUYsSUFBSUcsSUFBSTtRQUN4QixJQUFJQyxjQUFjO1FBQ2xCLElBQUlDLGNBQWMsSUFBSTtRQUN0QixJQUFJQyxPQUFPLElBQUk7UUFDZixJQUFJQyxVQUFVO1FBQ2QsSUFBSUMsV0FBVyxtRUFBbUVOLFFBQVFPLElBQUksR0FBRywrRUFBK0VQLFFBQVFRLE1BQU0sR0FBRyx1RUFBdUVSLFFBQVFTLEtBQUssR0FBRyx5RUFBeUVULFFBQVFVLE9BQU8sR0FBRyx5RUFBeUVWLFFBQVFJLElBQUksR0FBRztRQUMzY1IsZUFBZWUsUUFBUSxDQUFDTixTQUFTSCxhQUFhSSxVQUFVRixNQUFNRDtRQUM5REosSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN6QixFQUFFLE9BQU9DLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaZixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO0lBQ3pCO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2plZW5hLXJlYWN0Ly4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21tb25GdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2NvbW1vbkZ1bnRpb25cIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxQm9keSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIHZhciBtYWlsc3ViamVjdCA9IFwiQ29udGFjdCBVc1wiO1xyXG4gICAgICAgIHZhciBhdHRhY2htZW50cyA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRleHQgPSBudWxsO1xyXG4gICAgICAgIHZhciB0b0VtYWlsID0gXCJ6YWhpZC5rQGFsdC10ZWNobm9sb2dpZXMuYWVcIjtcclxuICAgICAgICB2YXIgbWFpbGh0bWwgPSAnPHRhYmxlPjx0cj48dGggc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj5OYW1lPC90aD48dGg+OjwvdGg+PHRkPicgKyByZXFCb2R5Lm5hbWUgKyAnPC90ZD48L3RyPjx0cj48dGggc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnRcIj5Nb2JpbGUgTnVtYmVyPC90aD48dGg+OjwvdGg+PHRkPicgKyByZXFCb2R5Lm51bWJlciArICc8L3RkPjwvdHI+PHRyPjx0aCBzdHlsZT1cInRleHQtYWxpZ246bGVmdFwiPkVtYWlsPC90aD48dGg+OjwvdGg+PHRkPicgKyByZXFCb2R5LmVtYWlsICsgJzwvdGQ+PC90cj48dHI+PHRoIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+U3ViamVjdDwvdGg+PHRoPjo8L3RoPjx0ZD4nICsgcmVxQm9keS5zdWJqZWN0ICsgJzwvdGQ+PC90cj48dHI+PHRoIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+TWVzc2FnZTwvdGg+PHRoPjo8L3RoPjx0ZD4nICsgcmVxQm9keS50ZXh0ICsgJzwvdGQ+PC90cj48L3RhYmxlPidcclxuICAgICAgICBjb21tb25GdW5jdGlvbi5zZW5kTWFpbCh0b0VtYWlsLCBtYWlsc3ViamVjdCwgbWFpbGh0bWwsIHRleHQsIGF0dGFjaG1lbnRzKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcIkVtYWlsIHNlbmQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJFcnJvciBwcm9jY2Vzc2luZyBjaGFyZ2VcIik7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjb21tb25GdW5jdGlvbiIsInJlcXVpcmUiLCJyZXEiLCJyZXMiLCJyZXFCb2R5IiwiYm9keSIsIm1haWxzdWJqZWN0IiwiYXR0YWNobWVudHMiLCJ0ZXh0IiwidG9FbWFpbCIsIm1haWxodG1sIiwibmFtZSIsIm51bWJlciIsImVtYWlsIiwic3ViamVjdCIsInNlbmRNYWlsIiwic3RhdHVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();