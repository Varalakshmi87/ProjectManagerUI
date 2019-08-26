(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ErrorStateMatcher.ts":
/*!**************************************!*\
  !*** ./src/app/ErrorStateMatcher.ts ***!
  \**************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/FilterPipe.ts":
/*!*******************************!*\
  !*** ./src/app/FilterPipe.ts ***!
  \*******************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'FilterPipe'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/ParentTaskDialogData.ts":
/*!*****************************************!*\
  !*** ./src/app/ParentTaskDialogData.ts ***!
  \*****************************************/
/*! exports provided: ParentTaskDialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskDialogData", function() { return ParentTaskDialogData; });
var ParentTaskDialogData = /** @class */ (function () {
    function ParentTaskDialogData() {
    }
    return ParentTaskDialogData;
}());



/***/ }),

/***/ "./src/app/Project.ts":
/*!****************************!*\
  !*** ./src/app/Project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
        this.IsCreate = false;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/ProjectDialogData.ts":
/*!**************************************!*\
  !*** ./src/app/ProjectDialogData.ts ***!
  \**************************************/
/*! exports provided: ProjectDialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDialogData", function() { return ProjectDialogData; });
var ProjectDialogData = /** @class */ (function () {
    function ProjectDialogData() {
    }
    return ProjectDialogData;
}());



/***/ }),

/***/ "./src/app/Task.ts":
/*!*************************!*\
  !*** ./src/app/Task.ts ***!
  \*************************/
/*! exports provided: Task, ParentTask, SearchTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTask", function() { return ParentTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTask", function() { return SearchTask; });
var Task = /** @class */ (function () {
    function Task() {
        this.IsCreate = false;
    }
    return Task;
}());

var ParentTask = /** @class */ (function () {
    function ParentTask() {
    }
    return ParentTask;
}());

var SearchTask = /** @class */ (function () {
    function SearchTask() {
    }
    return SearchTask;
}());



/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.IsCreate = false;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/UserDialogData.ts":
/*!***********************************!*\
  !*** ./src/app/UserDialogData.ts ***!
  \***********************************/
/*! exports provided: UserDialogData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogData", function() { return UserDialogData; });
var UserDialogData = /** @class */ (function () {
    function UserDialogData() {
    }
    return UserDialogData;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-manager-home/task-manager-home.component */ "./src/app/task-manager-home/task-manager-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'ProjectManager', component: _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_2__["TaskManagerHomeComponent"]
    },
    {
        path: '', redirectTo: '/ProjectManager', pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlebar\r\n{\r\n    background-color: rgb(255, 196, 196);\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: 5mm;\r\n    background:   rgba(209, 127, 184, 0.842);\r\n    color: ivory;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"titlebar\">{{title}}</mat-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager Case Study';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parenttask-search/parenttask-search.component */ "./src/app/parenttask-search/parenttask-search.component.ts");
/* harmony import */ var _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-manager/user-manager.component */ "./src/app/user-manager/user-manager.component.ts");
/* harmony import */ var _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-search/project-search.component */ "./src/app/project-search/project-search.component.ts");
/* harmony import */ var _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-manager-home/task-manager-home.component */ "./src/app/task-manager-home/task-manager-home.component.ts");
/* harmony import */ var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-manager/project-manager.component */ "./src/app/project-manager/project-manager.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _FilterPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FilterPipe */ "./src/app/FilterPipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-service.service */ "./src/app/project-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_3__["UserSearchComponent"],
                _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_4__["ParenttaskSearchComponent"],
                _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_5__["UserManagerComponent"],
                _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_6__["ProjectSearchComponent"],
                _task_manager_home_task_manager_home_component__WEBPACK_IMPORTED_MODULE_7__["TaskManagerHomeComponent"],
                _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_8__["ProjectManagerComponent"],
                _FilterPipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
            ],
            providers: [_task_service_service__WEBPACK_IMPORTED_MODULE_16__["TaskServiceService"], _project_service_service__WEBPACK_IMPORTED_MODULE_18__["ProjectServiceService"], _user_service_service__WEBPACK_IMPORTED_MODULE_17__["UserServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_3__["UserSearchComponent"], _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_4__["ParenttaskSearchComponent"], _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_6__["ProjectSearchComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 250px;\r\n  font-family: 'Courier New', Courier, monospace !important;\r\n}\r\n\r\n.example-header {\r\n  min-height: 54px;\r\n  padding: 8px 20px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 12px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 450px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.html":
/*!********************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter ParentTask\">\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSourceParent\">\n\n      <ng-container matColumnDef=\"Parent_Id\">\n        <mat-header-cell *matHeaderCellDef> Parent_Id </mat-header-cell>\n        <mat-cell *matCellDef=\"let ParentTask\"> {{ParentTask.Parent_Id}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"Parent_Task\">\n        <mat-header-cell *matHeaderCellDef> Parent_Task </mat-header-cell>\n        <mat-cell *matCellDef=\"let ParentTask\"> {{ParentTask.Parent_Task}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef=\"let ParentTask\">\n          <div>\n            <button mat-button mat-raised-button class=\"mr-2\" value=\"ParentTask.Parent_Id\" [mat-dialog-close]=\"ParentTask\" color=\"primary\">\n              Select</button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/parenttask-search/parenttask-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/parenttask-search/parenttask-search.component.ts ***!
  \******************************************************************/
/*! exports provided: ParenttaskSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParenttaskSearchComponent", function() { return ParenttaskSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _ParentTaskDialogData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ParentTaskDialogData */ "./src/app/ParentTaskDialogData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ParenttaskSearchComponent = /** @class */ (function () {
    function ParenttaskSearchComponent(taskService, dialogRef, data) {
        this.taskService = taskService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Parent_Id', 'Parent_Task', 'Action'];
    }
    ParenttaskSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getParents().subscribe(function (a) { return _this.setData(a); });
    };
    ParenttaskSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSourceParent.filter = filterValue.trim().toLowerCase();
    };
    ParenttaskSearchComponent.prototype.setData = function (data) {
        this.dataSourceParent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        this.dataSourceParent.paginator = this.paginator;
    };
    ParenttaskSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ParenttaskSearchComponent.prototype, "paginator", void 0);
    ParenttaskSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parenttask-search',
            template: __webpack_require__(/*! ./parenttask-search.component.html */ "./src/app/parenttask-search/parenttask-search.component.html"),
            styles: [__webpack_require__(/*! ./parenttask-search.component.css */ "./src/app/parenttask-search/parenttask-search.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _ParentTaskDialogData__WEBPACK_IMPORTED_MODULE_3__["ParentTaskDialogData"]])
    ], ParenttaskSearchComponent);
    return ParenttaskSearchComponent;
}());



/***/ }),

/***/ "./src/app/project-manager/project-manager.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250px;\r\n    font-family: 'Courier New', Courier, monospace !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 54px;\r\n    padding: 8px 20px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 450px;\r\n  }\r\n  \r\n  .customMatError{\r\n    position: absolute;\r\n    top:30px;\r\n    font-size: 10px;\r\n    color: coral;\r\n}"

/***/ }),

/***/ "./src/app/project-manager/project-manager.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #contentCreateProject>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"creatingProjectForm.Project_Id\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Add Project</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"creatingProjectForm.Project_Id\" (click)=\"cancelUpdateProject();CreatingProjectForm.resetForm()\"\n    color=\"accent\">\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\n</ng-template>\n<ng-template #contentUpdateProject>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"creatingProjectForm.Project_Id\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Update Project</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"creatingProjectForm.Project_Id\" (click)=\"cancelUpdateProject();CreatingProjectForm.resetForm()\"\n    color=\"warn\">\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\n</ng-template>\n\n<div class=\"example-container col-md-4 offset-md-4 mt-4\">\n  <form #CreatingProjectForm=\"ngForm\" (ngSubmit)=\"OnProjectFormSubmit(CreatingProjectForm)\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Project Name\" required name=\"ProjectName\" [(ngModel)]=\"creatingProjectForm.ProjectName\" #ProjectName=\"ngModel\"\n      />\n      <input type=\"hidden\" [(ngModel)]=\"creatingProjectForm.Project_Id\" name=\"Project_Id\">\n      <mat-error>\n        Project Name is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <div class=\"example-full-width\">\n      <mat-checkbox [(ngModel)]=\"disabled\" (change)=\"onSetDateChange($event)\" [ngModelOptions]=\"{standalone: true}\">Set Start and End Date</mat-checkbox>\n    </div>\n    <mat-form-field class=\"example-full-width col-md-6\">\n      <input (dateChange)=\"CompareDates()\" [disabled]=\"!(disabled)\"  matInput [matDatepicker]=\"picker1\"\n        name=\"Start_Date\" placeholder=\"Start Date\" [(ngModel)]=\"creatingProjectForm.Start_Date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n      <mat-datepicker #picker1></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width col-md-6\">\n      <input (dateChange)=\"CompareDates()\" [disabled]=\"!(disabled)\"  matInput [matDatepicker]=\"picker2\"\n        name=\"End_Date\" placeholder=\"End Date\" [(ngModel)]=\"creatingProjectForm.End_Date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n      <div class=\"customMatError mat-form-field-subscript-wrapper\" *ngIf=\"isProjectEndDateLess\">\n        End Date is lesser than start date\n      </div>\n    </mat-form-field>\n    <div>\n      <label style=\"color:rgba(0, 0, 0, 0.53);\">Priority</label>\n      <mat-slider placeholder=\"Priority\" style=\"width:90%;\" [max]=\"30\" [min]=\"0\" [step]=\"1\" [thumbLabel]=\"true\" [tickInterval]=\"1\"\n        [vertical]=\"false\" [(ngModel)]=\"creatingProjectForm.Priority\" name=\"Priority\">\n      </mat-slider>\n      <span class=\"text-small\">30</span>\n    </div>\n    <mat-form-field class=\"example-full-width col-md-9\">\n      <input matInput placeholder=\"Manager\" [disabled]=\"true\" name=\"ManagerName\" [(ngModel)]=\"creatingProjectForm.ManagerName\"\n        value=\"{{SelectedManagerName}}\" />\n      <input type=\"hidden\" [(ngModel)]=\"creatingProjectForm.UserId\" name=\"UserId\"  />\n    </mat-form-field>\n    <button type=\"button\" mat-button mat-raised-button (click)=\"openDialog()\" class=\"mr-2\" value=\"creatingProjectForm.Project_Id\"\n      color=\"primary\">\n      <mat-icon>{{'search'}}</mat-icon>\n    </button>\n\n    <div *ngIf=\"creatingProjectForm.IsCreate;then contentCreateProject else contentUpdateProject\" color=\"primary\">\n    </div>\n  </form>\n</div>\n<hr/>\n<div class=\"col-md-8 offset-md-2 mt-4\">\n  <mat-form-field class=\"col-md-3\">\n    <input matInput placeholder=\"Search\" name=\"projectSearchValue\" [(ngModel)]=\"projectSearchValue\">\n  </mat-form-field>\n  <label>Sort By</label>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('StartDate')\" color=\"primary\">\n    StartDate</button>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EndDate')\" color=\"primary\">\n    EndDate</button>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Priority')\" color=\"primary\">\n    Priority</button>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Completed')\" color=\"primary\">\n    Completed</button>\n</div>\n<div class=\"col-md-8 offset-md-2 mt-4\">\n  <ul class=\"list-group list-group-flush\">\n    <li *ngFor=\"let projectitem of projectDataSource | FilterPipe: projectSearchValue; let i=index\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col col-md-8\">\n          <p><strong>Project: </strong> {{ projectitem.ProjectName }} </p>\n          <div class=\"row\">\n            <div class=\"col col-md-6\">\n              <p><strong>No of Tasks: </strong><span class=\"badge badge-info\"> {{ projectitem.TotalTaskCount }}</span></p>\n              <p><strong>Start Date: </strong> {{ projectitem.Start_Date| date: 'dd/MM/yyyy' }}</p>\n            </div>\n            <div class=\"col col-md-6\">\n              <p>\n                <strong>Completed: </strong>\n                <span class=\"badge badge-info\">{{ projectitem.CompletedTaskCount }}</span>\n              </p>\n              <p> <strong>End Date: </strong> {{ projectitem.End_Date | date: 'dd/MM/yyyy'}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-md-2\">\n          <p> <strong>Priority: </strong>\n            <span class=\"badge badge-info\">{{ projectitem.Priority }}</span></p>\n        </div>\n        <div class=\"col col-md-2\">\n          <div class=\"row\">\n            <div class=\"col col-12\">\n              <button mat-raised-button color=\"primary\" (click)=\"editProject(projectitem,projectitem.lstUsers[0])\">\n                <mat-icon>create</mat-icon> Update</button>\n              <br/>\n              <br/>\n              <button mat-raised-button color=\"warn\" (click)=\"deleteProject(projectitem)\">\n                <mat-icon item-width=\"20px\">delete</mat-icon> Suspend</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n\n    <li *ngIf=\"(projectDataSource| FilterPipe:projectSearchValue).length==0\" class=\"list-group-item\">\n      <div class=\"alert alert-info\">\n        There are no items to display.\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/project-manager/project-manager.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-manager/project-manager.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagerComponent", function() { return ProjectManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-service.service */ "./src/app/project-service.service.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Project */ "./src/app/Project.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectManagerComponent = /** @class */ (function () {
    function ProjectManagerComponent(projectService, userService, dialog) {
        this.projectService = projectService;
        this.userService = userService;
        this.dialog = dialog;
        this.projectDataSource = [];
        this.disabled = false;
        this.isProjectEndDateLess = false;
        this.projStartDateSort = true;
        this.projEndDateSort = true;
        this.projPrioritySort = true;
        this.projCompletedSort = true;
    }
    ProjectManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        this.creatingProjectForm.IsCreate = true;
        this.projectService.getprojects().subscribe(function (a) { return _this.projectDataSource = a; });
        this.projectSortElement = 'ProjectName';
        this.disabled = false;
        console.log(this.projectDataSource);
    };
    ProjectManagerComponent.prototype.cancelUpdateProject = function () {
        this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        this.creatingProjectForm.IsCreate = true;
        this.disabled = false;
    };
    ProjectManagerComponent.prototype.onSetDateChange = function (event) {
        console.log(event.checked);
        if (event.checked) {
            console.log(new Date());
            console.log(new Date().setDate(new Date().getDate() + 1));
            //this.selectedStartDate = new Date();
            this.creatingProjectForm.StartDate = new Date();
            var enddate = new Date();
            enddate.setDate(enddate.getDate() + 1);
            this.creatingProjectForm.EndDate = enddate;
        }
        else {
            this.creatingProjectForm.StartDate = null;
            this.creatingProjectForm.EndDate = null;
        }
    };
    ProjectManagerComponent.prototype.OnProjectFormSubmit = function (creatingProjectForm) {
        var _this = this;
        console.log(creatingProjectForm.value);
        this.CompareDates();
        if (creatingProjectForm.valid && !this.isProjectEndDateLess) {
            this.isProjectEndDateLess = false;
            var localProject = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
            localProject = creatingProjectForm.value;
            if (localProject.Project_ID != undefined && localProject.Project_ID > 0) {
                this.projectService.updateprojects(creatingProjectForm.value, localProject.Project_ID).subscribe(function (g) { return _this.projectService.getprojects().subscribe(function (a) { return _this.projectDataSource = a; }); });
                this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
                this.creatingProjectForm.IsCreate = true;
                console.log("project updated");
                creatingProjectForm.resetForm();
                this.disabled = false;
            }
            else {
                this.projectService.addprojects(creatingProjectForm.value).subscribe(function (g) { return _this.projectService.getprojects().subscribe(function (a) { return _this.projectDataSource = a; }); });
                this.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
                this.creatingProjectForm.IsCreate = true;
                console.log("project added");
                creatingProjectForm.resetForm();
                this.disabled = false;
            }
        }
    };
    ProjectManagerComponent.prototype.sort = function (sortElement) {
        var _this = this;
        console.log('calling sort' + sortElement);
        this.projectSortElement = sortElement;
        if (sortElement == 'StartDate') {
            if (this.projStartDateSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); }).reverse();
            }
            this.projStartDateSort = !this.projStartDateSort;
        }
        else if (sortElement == 'EndDate') {
            if (this.projEndDateSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); }).reverse();
            }
            this.projEndDateSort = !this.projEndDateSort;
        }
        else if (sortElement == 'Priority') {
            if (this.projPrioritySort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.Priority - b.Priority; });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.Priority - b.Priority; }).reverse();
            }
            this.projPrioritySort = !this.projPrioritySort;
        }
        else {
            if (this.projCompletedSort) {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.CompletedTaskCount - b.CompletedTaskCount; });
            }
            else {
                this.projectDataSource = this.projectDataSource.sort(function (a, b) { return a.CompletedTaskCount - b.CompletedTaskCount; }).reverse();
            }
            this.projCompletedSort = !this.projCompletedSort;
        }
    };
    ProjectManagerComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    ProjectManagerComponent.prototype.editProject = function (project, user) {
        // this.createUserForm = new User();
        console.log(user);
        var localProject = new _Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        localProject.Project_ID = project.Project_ID;
        localProject.IsCreate = false;
        localProject.EndDate = project.EndDate;
        localProject.StartDate = project.StartDate;
        localProject.Userid = project.Userid;
        localProject.Priority = project.Priority;
        localProject.ProjectName = project.ProjectName;
        if (user != undefined && user != null) {
            localProject.ManagerName = user.FirstName + " " + user.LastName;
            localProject.Userid = user.User_id;
        }
        if (localProject.StartDate != null && localProject.StartDate != undefined) {
            this.disabled = true;
        }
        console.log(localProject);
        this.creatingProjectForm = localProject;
    };
    ProjectManagerComponent.prototype.CompareDates = function () {
        console.log(this.creatingProjectForm.StartDate);
        console.log(this.creatingProjectForm.EndDate);
        if (this.creatingProjectForm.StartDate != null && this.creatingProjectForm.EndDate != null) {
            if (new Date(this.creatingProjectForm.EndDate) < new Date(this.creatingProjectForm.StartDate)) {
                console.log('isEndDateLess');
                this.isProjectEndDateLess = true;
            }
            else
                this.isProjectEndDateLess = false;
        }
    };
    ProjectManagerComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_5__["UserSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            _this.dialogDataSelected = result;
            _this.SelectedManagerName = _this.dialogDataSelected.FirstName + " " + _this.dialogDataSelected.LastName;
            _this.creatingProjectForm.Userid = _this.dialogDataSelected.User_id;
        });
    };
    ProjectManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-manager',
            template: __webpack_require__(/*! ./project-manager.component.html */ "./src/app/project-manager/project-manager.component.html"),
            styles: [__webpack_require__(/*! ./project-manager.component.css */ "./src/app/project-manager/project-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_project_service_service__WEBPACK_IMPORTED_MODULE_3__["ProjectServiceService"], _user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProjectManagerComponent);
    return ProjectManagerComponent;
}());



/***/ }),

/***/ "./src/app/project-search/project-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-search/project-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250px;\r\n    font-family: 'Courier New', Courier, monospace !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 54px;\r\n    padding: 8px 20px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 450px;\r\n  }\r\n  \r\n  .customMatError{\r\n    position: absolute;\r\n    top:30px;\r\n    font-size: 10px;\r\n    color: coral;\r\n}"

/***/ }),

/***/ "./src/app/project-search/project-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-search/project-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter Projects\">\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSourceProject\">\n\n      <ng-container matColumnDef=\"Project_Id\">\n        <mat-header-cell *matHeaderCellDef> Project_Id </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\"> {{ParentTask.Project_Id}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ProjectName\">\n        <mat-header-cell *matHeaderCellDef> ProjectName </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\"> {{ParentTask.ProjectName}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef=\"let Project\">\n          <div>\n            <button mat-button mat-raised-button class=\"mr-2\" value=\"ParentTask.Project_Id\" [mat-dialog-close]=\"Project\" color=\"primary\">\n              Select</button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/project-search/project-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-search/project-search.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSearchComponent", function() { return ProjectSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _project_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-service.service */ "./src/app/project-service.service.ts");
/* harmony import */ var _ProjectDialogData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProjectDialogData */ "./src/app/ProjectDialogData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProjectSearchComponent = /** @class */ (function () {
    function ProjectSearchComponent(projectService, dialogRef, data) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Project_Id', 'ProjectName', 'Action'];
    }
    ProjectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getprojects().subscribe(function (a) { return _this.setData(a); });
    };
    ProjectSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSourceProject.filter = filterValue.trim().toLowerCase();
    };
    ProjectSearchComponent.prototype.setData = function (data) {
        this.dataSourceProject = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        this.dataSourceProject.paginator = this.paginator;
    };
    ProjectSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ProjectSearchComponent.prototype, "paginator", void 0);
    ProjectSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-search',
            template: __webpack_require__(/*! ./project-search.component.html */ "./src/app/project-search/project-search.component.html"),
            styles: [__webpack_require__(/*! ./project-search.component.css */ "./src/app/project-search/project-search.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_project_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _ProjectDialogData__WEBPACK_IMPORTED_MODULE_3__["ProjectDialogData"]])
    ], ProjectSearchComponent);
    return ProjectSearchComponent;
}());



/***/ }),

/***/ "./src/app/project-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/project-service.service.ts ***!
  \********************************************/
/*! exports provided: ProjectServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServiceService", function() { return ProjectServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' })
};
var ProjectServiceService = /** @class */ (function () {
    function ProjectServiceService(http) {
        this.http = http;
        this.ProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project';
        this.ProjectByProjectidUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
        this.CreateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project';
        this.DeleteProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
        this.UpdateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
    }
    ProjectServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log('${operation} failed:${error.message}');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ProjectServiceService.prototype.getprojects = function () {
        console.log('Invoking GetProject................');
        return this.http.get(this.ProjectUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProject', [])));
    };
    ProjectServiceService.prototype.addprojects = function (project) {
        console.log('Invoking AddProject................');
        return this.http.post(this.CreateProjectUrl, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProject', [])));
    };
    ProjectServiceService.prototype.updateprojects = function (project, project_id) {
        console.log('Invoking UpdateProject................');
        return this.http.put(this.UpdateProjectUrl + project_id, project).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('UpdateProject', [])));
    };
    ProjectServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectServiceService);
    return ProjectServiceService;
}());



/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250px;\r\n    font-family: 'Courier New', Courier, monospace !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 54px;\r\n    padding: 8px 20px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 450px;\r\n  }\r\n  \r\n  .customMatError{\r\n    position: absolute;\r\n    top:30px;\r\n    font-size: 10px;\r\n    color: coral;\r\n}\r\n  \r\n  .mat-cell:nth-child(5),\r\n.mat-header-cell:nth-child(5)\r\n{\r\n    flex: 0 0 9%\r\n}\r\n  \r\n  .mat-cell:nth-child(6),\r\n.mat-header-cell:nth-child(6)\r\n{\r\n    flex: 0 0 9%\r\n}\r\n  \r\n  .mat-cell:nth-child(7),\r\n.mat-header-cell:nth-child(7)\r\n{\r\n    flex: 0 0 9%\r\n}\r\n  \r\n  .mat-elevation-z2\r\n{\r\n    box-shadow: none !important;\r\n    padding-top: 20px; \r\n}\r\n  \r\n  .mat-tab-label-active\r\n{\r\nbackground-color: rgb(red, green, blue)!important\r\n}\r\n  \r\n  .mat-header-row\r\n{\r\n    background-color: rgb(yellow, Purple, ORange)!important\r\n}\r\n  \r\n  .fontFamily{\r\n    font-family: 'Courier New', Courier, monospace !important\r\n}\r\n  \r\n  .mat-row:nth-child(odd)\r\n{\r\n    background-color: rgb(Pink, red, yellow)!important\r\n}\r\n  \r\n  .mat-header-cell{\r\n    font-size: 13p;\r\n    color: chartreuse;\r\n    font-weight: bold;\r\n}\r\n  \r\n  .example-small-box,\r\n.example-large-box\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 13px;\r\n    padding: 13px;\r\n    border-radius: 7cm;\r\n}\r\n  \r\n  .exampl-small-box{\r\n    height: 95px;\r\n    width: 95px\r\n}\r\n  \r\n  .exampl-large-box{\r\n    height: 295px;\r\n    width: 295px\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createTask.TaskId\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Add Task</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"createTask.TaskId\" (click)=\"Reset();CreateTask.resetForm()\" color=\"accent\">\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\n</ng-template>\n<ng-template #other_content>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createTask.TaskId\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Update Task</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"createTask.TaskId\" (click)=\"Reset();CreateTask.resetForm()\" color=\"warn\">\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\n</ng-template>\n<div class=\"example-container\">\n  <mat-tab-group class=\"\" [(selectedIndex)]=\"selectedTab\" (selectedTabChange)=\"onTabClick($event)\">\n    <mat-tab label=\"Add Project\">\n      <app-project-manager></app-project-manager>\n    </mat-tab>\n\n    <mat-tab label=\"Add Task\">\n      <div class=\"col-md-4 offset-md-4 mt-4\">\n        <form #CreateTask=\"ngForm\" (ngSubmit)=\"onSubmit(CreateTask)\">\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\n            <input required matInput #ProjectName=\"ngModel\" placeholder=\"Project\" [disabled]=\"true\" name=\"ProjectName\" [(ngModel)]=\"createTask.ProjectName\"\n              value=\"{{SelectedProjectName}}\" />\n            <input type=\"hidden\" [(ngModel)]=\"createTask.Project_Id\" name=\"Project_Id\" />\n            <div class=\"customMatError\" *ngIf=\"isProjectEmpty\">\n              Project is\n              <strong>required</strong>\n            </div>\n          </mat-form-field>\n          <button [disabled]=\"!createTask.IsCreate\" type=\"button\" mat-button mat-raised-button (click)=\"openProjectDialog()\" class=\"mr-2\" value=\"createTask.Project_Id\"\n            color=\"primary\">\n            <mat-icon>{{'search'}}</mat-icon>\n          </button>\n          <mat-form-field class=\"example-full-width\">\n            <input required matInput #Task=\"ngModel\" placeholder=\"Task Name\" name=\"Task\" [(ngModel)]=\"createTask.Task\">\n            <input type=\"hidden\" [(ngModel)]=\"createTask.TaskId\" name=\"TaskId\">\n            <mat-error>\n              Task Name is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"example-full-width\">\n            <mat-checkbox [disabled]=\"!(createTask.IsCreate)\" (change)=\"onSetParentChange($event)\" [(ngModel)]=\"createTask.IsParentTask\" name=\"IsParentTask\">Parent Task</mat-checkbox>\n          </div>\n          <div>\n            <label style=\"color:rgba(0, 0, 0, 0.53);\">Priority</label>\n            <mat-slider [disabled]=\"createTask.IsParentTask\" placeholder=\"Priority\" style=\"width:90%;\" [max]=\"30\" [min]=\"0\" [step]=\"1\"\n              [thumbLabel]=\"true\" [tickInterval]=\"1\" [vertical]=\"false\" [(ngModel)]=\"createTask.Priority\" name=\"Priority\">\n            </mat-slider>\n            <span class=\"text-small\">30</span>\n          </div>\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\n            <input matInput placeholder=\"Parent Task\" [disabled]=\"true\" name=\"ParentTaskName\" [(ngModel)]=\"createTask.ParentTaskName\"\n              value=\"{{SelectedParentName}}\" />\n            <input type=\"hidden\" [(ngModel)]=\"createTask.Parent_Id\" name=\"Parent_Id\" />\n          </mat-form-field>\n          <button [disabled]=\"createTask.IsParentTask\" type=\"button\" mat-button mat-raised-button (click)=\"openParentDialog()\" class=\"mr-2\"\n            value=\"createTask.Parent_Id\" color=\"primary\">\n            <mat-icon>{{'search'}}</mat-icon>\n          </button>\n          <div>\n            <mat-form-field class=\"example-full-width col-md-6 pl-0\">\n              <input (dateChange)=\"CompareDate()\" [disabled]=\"createTask.IsParentTask\" matInput [matDatepicker]=\"picker2\" name=\"StartDate\"\n                placeholder=\"Start Date\" [(ngModel)]=\"createTask.StartDate\" />\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n              <mat-datepicker #picker2></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width col-md-6\">\n              <input (dateChange)=\"CompareDate()\" [disabled]=\"createTask.IsParentTask\" matInput [matDatepicker]=\"picker3\" name=\"EndDate\"\n                placeholder=\"End Date\" [(ngModel)]=\"createTask.EndDate\" />\n              <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n              <mat-datepicker #picker3></mat-datepicker>\n              <div class=\"customMatError mat-form-field-subscript-wrapper\" *ngIf=\"isEndDateLess\">\n                End Date is lesser than start date\n              </div>\n            </mat-form-field>\n          </div>\n          <mat-form-field class=\"example-full-width col-md-9 pl-0\">\n            <input matInput placeholder=\"User\" [disabled]=\"true\" name=\"TaskUserName\" [(ngModel)]=\"createTask.TaskUserName\"\n              value=\"{{SelectedUserName}}\" />\n            <input type=\"hidden\" [(ngModel)]=\"createTask.UserId\" name=\"UserId\" />\n          </mat-form-field>\n          <button [disabled]=\"createTask.IsParentTask || !(createTask.IsCreate)\" type=\"button\" mat-button mat-raised-button (click)=\"openUserDialog()\" class=\"mr-2\"\n            value=\"createTask.UserId\" color=\"primary\">\n            <mat-icon>{{'search'}}</mat-icon>\n          </button>\n          <div *ngIf=\"createTask.IsCreate;then content else other_content\" color=\"primary\">\n          </div>\n        </form>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"View Task\">\n\n      <div class=\"col mt-3\">\n        <mat-form-field class=\"example-full-width col-md-4 pl-0\">\n          <input matInput placeholder=\"Project\" [disabled]=\"true\" name=\"CustomSearch\" [(ngModel)]=\"CustomSearch\" value=\"{{SelectedProjectName}}\"\n          />\n        </mat-form-field>\n        <button type=\"button\" mat-button mat-raised-button (click)=\"openProjectDialog()\" class=\"mr-2\" color=\"primary\">\n          <mat-icon>{{'search'}}</mat-icon>\n        </button>\n        <label>Sort By</label>\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('StartDate')\" color=\"primary\">\n          Start Date</button>\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EndDate')\" color=\"primary\">\n          End Date</button>\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Priority')\" color=\"primary\">\n          Priority</button>\n        <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('Completed')\" color=\"primary\">\n          Completed</button>\n      </div>\n\n      <div class=\"col-md-12 mt-4\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let taskitem of TaskListSource | FilterPipe: CustomSearch; let i=index\" class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"row col-md-8\">\n               <div class=\"col-md-2\">\n                  <strong> Task</strong>\n                  <br/> {{ taskitem.Task }} </div>\n                <div class=\"col-md-2\">\n                  <strong> Parent</strong>\n                  <br/> {{ taskitem.ParentDTOName }}</div>\n                <div class=\"col-md-2\">\n                  <strong> Priority</strong>\n                  <br/> {{ taskitem.Priority }}</div>\n                <div class=\"col-md-2\">\n                  <strong> Start</strong>\n                  <br/> {{ taskitem.StartDate| date: 'dd/MM/yyyy' }}</div>\n                <div class=\"col-md-2\">\n                  <strong> End</strong>\n                  <br/> {{ taskitem.EndDate| date: 'dd/MM/yyyy' }}</div>\n              </div>\n              <div class=\"col col-md-4\">\n                <div class=\"row\" *ngIf=\"!taskitem.IsTaskEnded\">\n                  <button mat-raised-button color=\"primary\" class=\"col-md-3\" (click)=\"editTask(taskitem,taskitem.ParentTask,taskitem.Project,taskitem.Users)\">\n                    <mat-icon>edit</mat-icon> Edit</button>\n                  <button mat-raised-button color=\"warn\" class=\"col-md-4 ml-1\" (click)=\"endTask(taskitem.TaskId)\">\n                    <mat-icon item-width=\"15px\">cancel</mat-icon> End Task</button>\n                </div>\n              </div>\n            </div>\n          </li>\n\n          <li *ngIf=\"(TaskListSource | FilterPipe:CustomSearch).length==0\" class=\"list-group-item\">\n            <div class=\"alert alert-info\">\n              There are no items to display.\n            </div>\n          </li>\n        </ul>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Add User\">\n      <app-user-manager></app-user-manager>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/task-manager-home/task-manager-home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/task-manager-home/task-manager-home.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskManagerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerHomeComponent", function() { return TaskManagerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Task */ "./src/app/Task.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorStateMatcher */ "./src/app/ErrorStateMatcher.ts");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _project_search_project_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-search/project-search.component */ "./src/app/project-search/project-search.component.ts");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Project */ "./src/app/Project.ts");
/* harmony import */ var _parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parenttask-search/parenttask-search.component */ "./src/app/parenttask-search/parenttask-search.component.ts");
/* harmony import */ var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-search/user-search.component */ "./src/app/user-search/user-search.component.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user-manager/user-manager.component */ "./src/app/user-manager/user-manager.component.ts");
/* harmony import */ var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../project-manager/project-manager.component */ "./src/app/project-manager/project-manager.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TaskManagerHomeComponent = /** @class */ (function () {
    function TaskManagerHomeComponent(taskService, dialog) {
        this.taskService = taskService;
        this.dialog = dialog;
        this.displayedColumns = ['Task', 'ParentTask', 'Priority', 'Start Date', 'End Date', 'Action'];
        this.isProjectEmpty = false;
        this.isEndDateLess = false;
        this.TaskListSource = [];
        this.taskStartDateSort = true;
        this.taskEndDateSort = true;
        this.taskPrioritySort = true;
        this.taskCompletedSort = true;
        this.TaskFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.PriorityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.StartFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.EndFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.matcher = new _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.createTask.IsCreate = true;
        this.selectedTab = 0;
        this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["SearchTask"]();
    }
    TaskManagerHomeComponent.prototype.ngAfterViewInit = function () {
        this.userManagerComp.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.userManagerComp.createUserForm.IsCreate = true;
        this.projManagerComp.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        this.projManagerComp.creatingProjectForm.IsCreate = true;
    };
    TaskManagerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.taskService.getParents().subscribe(a => this.parentTasks = a);
        this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); });
    };
    TaskManagerHomeComponent.prototype.sort = function (sortElement) {
        var _this = this;
        console.log('calling sort' + sortElement);
        //this.projectSortElement = sortElement;
        if (sortElement == 'StartDate') {
            if (this.taskStartDateSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.StartDate) - _this.getTime(b.StartDate); }).reverse();
            }
            this.taskStartDateSort = !this.taskStartDateSort;
        }
        else if (sortElement == 'EndDate') {
            if (this.taskEndDateSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return _this.getTime(a.EndDate) - _this.getTime(b.EndDate); }).reverse();
            }
            this.taskEndDateSort = !this.taskEndDateSort;
        }
        else if (sortElement == 'Priority') {
            if (this.taskPrioritySort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Priority - b.Priority; });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Priority - b.Priority; }).reverse();
            }
            this.taskPrioritySort = !this.taskPrioritySort;
        }
        else {
            if (this.taskCompletedSort) {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Status.toLocaleString().localeCompare(b.Status.toLocaleString()); });
            }
            else {
                this.TaskListSource = this.TaskListSource.sort(function (a, b) { return a.Status.toLocaleString().localeCompare(b.Status.toLocaleString()); }).reverse();
            }
            this.taskCompletedSort = !this.taskCompletedSort;
        }
    };
    TaskManagerHomeComponent.prototype.getTime = function (date) {
        return date != null ? new Date(date).getTime() : 0;
    };
    TaskManagerHomeComponent.prototype.setData = function (a) {
        this.TaskListSource = a;
    };
    TaskManagerHomeComponent.prototype.editTask = function (task, parent, project, users) {
        this.selectedTab = 1;
        //this.taskService.getTasksById(taskId).subscribe(a => this.createTask = a);
        this.createTask.IsCreate = false;
        console.log('task');
        console.log(task);
        console.log('taparentsk');
        console.log(parent);
        console.log('Project');
        console.log(project);
        console.log('users');
        console.log(users);
        var localTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        localTask.TaskId = task.TaskId;
        localTask.IsCreate = false;
        localTask.EndDate = task.EndDate;
        localTask.StartDate = task.StartDate;
        localTask.Task = task.Task;
        localTask.Priority = task.Priority;
        localTask.Status = task.Status;
        if (parent != undefined && parent != null) {
            localTask.ParentTaskName = parent.Parent_Task;
            localTask.Parent_Id = parent.Parent_Id;
        }
        if (project != undefined && project != null) {
            localTask.ProjectName = project.ProjectName;
            localTask.Project_Id = project.Project_ID;
        }
        if (users != undefined && users != null && users.length > 0) {
            if (users[0] != undefined && users[0] != null) {
                localTask.Userid = users[0].User_id;
                localTask.TaskUserName = users[0].FirstName + " " + users[0].LastName;
            }
        }
        console.log(localTask);
        this.createTask = localTask;
    };
    TaskManagerHomeComponent.prototype.endTask = function (taskId) {
        var _this = this;
        this.taskService.endTaskbyID(taskId).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
    };
    TaskManagerHomeComponent.prototype.Reset = function () {
        this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        this.createTask.IsCreate = true;
        this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["SearchTask"]();
        this.isProjectEmpty = false;
        this.isEndDateLess = false;
    };
    TaskManagerHomeComponent.prototype.onTabClick = function (event) {
        var _this = this;
        console.log('event => ', event);
        console.log('index => ', event.index);
        console.log('tab name=> ', event.tab.textLabel);
        this.userManagerComp.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.userManagerComp.createUserForm.IsCreate = true;
        this.projManagerComp.creatingProjectForm = new _Project__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        this.projManagerComp.creatingProjectForm.IsCreate = true;
        this.CustomSearch = '';
        if (event.index == 2) {
            this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
            this.createTask.IsCreate = true;
            this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); });
            this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["SearchTask"]();
            this.isEndDateLess = false;
            this.isProjectEmpty = false;
        }
    };
    TaskManagerHomeComponent.prototype.onSubmit = function (CreateTask) {
        var _this = this;
        console.log(CreateTask.value);
        this.CompareDate();
        var localTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        localTask = CreateTask.value;
        if (CreateTask.valid) {
            if (localTask.Project_Id == null || localTask.Project_Id == undefined) {
                this.isProjectEmpty = true;
            }
            else if (!this.isEndDateLess) {
                this.isProjectEmpty = false;
                this.isEndDateLess = false;
                if (localTask.TaskId != undefined && localTask.TaskId > 0) {
                    this.taskService.updateTaskbyID(CreateTask.value, localTask.TaskId).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
                    this.selectedTab = 2;
                    this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
                    this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["SearchTask"]();
                    this.createTask.IsCreate = true;
                    CreateTask.resetForm();
                }
                else {
                    this.taskService.addTaskby(CreateTask.value).subscribe(function (g) { return _this.taskService.getTasks().subscribe(function (a) { return _this.setData(a); }); });
                    this.selectedTab = 2;
                    this.createTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
                    this.searchTask = new _Task__WEBPACK_IMPORTED_MODULE_2__["SearchTask"]();
                    this.createTask.IsCreate = true;
                    CreateTask.resetForm();
                }
            }
        }
    };
    TaskManagerHomeComponent.prototype.openProjectDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_project_search_project_search_component__WEBPACK_IMPORTED_MODULE_6__["ProjectSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result != null && result != undefined) {
                _this.isProjectEmpty = false;
            }
            _this.projectDialogDataSelected = result;
            _this.SelectedProjectName = _this.projectDialogDataSelected.ProjectName;
            _this.createTask.Project_Id = _this.projectDialogDataSelected.Project_ID;
            _this.CustomSearch = _this.projectDialogDataSelected.ProjectName;
        });
    };
    TaskManagerHomeComponent.prototype.openParentDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_parenttask_search_parenttask_search_component__WEBPACK_IMPORTED_MODULE_8__["ParenttaskSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog ParenttaskSearchComponent was closed');
            console.log(result);
            _this.parentDialogSelectedData = result;
            _this.SelectedParentName = _this.parentDialogSelectedData.Parent_Task;
            _this.createTask.Parent_Id = _this.parentDialogSelectedData.Parent_Id;
        });
    };
    TaskManagerHomeComponent.prototype.openUserDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_9__["UserSearchComponent"], {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog UserSearchComponent was closed');
            console.log(result);
            _this.userDialogSelectedData = result;
            _this.SelectedUserName = _this.userDialogSelectedData.FirstName + " " + _this.userDialogSelectedData.LastName;
            _this.createTask.Userid = _this.userDialogSelectedData.User_id;
        });
    };
    TaskManagerHomeComponent.prototype.onSetParentChange = function (event) {
        this.createTask.Priority = 0;
        this.createTask.Parent_Id = null;
        this.createTask.ParentTaskName = null;
        this.createTask.StartDate = null;
        this.createTask.EndDate = null;
        this.createTask.Userid = null;
        this.createTask.TaskUserName = null;
    };
    TaskManagerHomeComponent.prototype.CompareDate = function () {
        console.log(this.createTask.StartDate);
        console.log(this.createTask.EndDate);
        if (this.createTask.StartDate != null && this.createTask.EndDate != null) {
            if (new Date(this.createTask.EndDate) < new Date(this.createTask.StartDate)) {
                console.log('isEndDateLess');
                this.isEndDateLess = true;
            }
            else
                this.isEndDateLess = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_11__["UserManagerComponent"]),
        __metadata("design:type", _user_manager_user_manager_component__WEBPACK_IMPORTED_MODULE_11__["UserManagerComponent"])
    ], TaskManagerHomeComponent.prototype, "userManagerComp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_12__["ProjectManagerComponent"]),
        __metadata("design:type", _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_12__["ProjectManagerComponent"])
    ], TaskManagerHomeComponent.prototype, "projManagerComp", void 0);
    TaskManagerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-manager-home',
            template: __webpack_require__(/*! ./task-manager-home.component.html */ "./src/app/task-manager-home/task-manager-home.component.html"),
            styles: [__webpack_require__(/*! ./task-manager-home.component.css */ "./src/app/task-manager-home/task-manager-home.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_5__["TaskServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TaskManagerHomeComponent);
    return TaskManagerHomeComponent;
}());



/***/ }),

/***/ "./src/app/task-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-service.service.ts ***!
  \*****************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' })
};
var TaskServiceService = /** @class */ (function () {
    function TaskServiceService(http) {
        this.http = http;
        this.taskUrl = 'http://localhost/ProjectManagerAPI/api/task/getAll';
        this.taskbyIdUrl = 'http://localhost/ProjectManagerAPI/task/get/';
        this.taskCreateUrl = 'http://localhost/ProjectManagerAPI/task/create';
        this.taskendUrl = 'http://localhost/ProjectManagerAPI/task/end/';
        this.taskUpdateUrl = 'http://localhost/ProjectManagerAPI/task/update/';
        this.parenttaskUrl = 'http://localhost/ProjectManagerAPI/task/getParents';
    }
    TaskServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log('${operation} failed:${error.message}');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    TaskServiceService.prototype.getParents = function () {
        return this.http.get(this.parenttaskUrl);
    };
    TaskServiceService.prototype.getTasks = function () {
        console.log('Invoking Gettask................');
        return this.http.get(this.taskUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTask', [])));
    };
    TaskServiceService.prototype.getTaskbyID = function (task_id) {
        console.log('Invoking Gettaskbyid................');
        return this.http.get(this.taskbyIdUrl + task_id);
    };
    TaskServiceService.prototype.endTaskbyID = function (task_id) {
        console.log('Invoking endtaskbyid................' + task_id);
        return this.http.get(this.taskendUrl + task_id);
    };
    TaskServiceService.prototype.updateTaskbyID = function (task, task_id) {
        console.log('Invoking updatetask................' + task);
        return this.http.post(this.taskUpdateUrl + task_id, task);
    };
    TaskServiceService.prototype.addTaskby = function (task) {
        console.log('Invoking createtask................' + task);
        return this.http.post(this.taskCreateUrl, task);
    };
    TaskServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskServiceService);
    return TaskServiceService;
}());



/***/ }),

/***/ "./src/app/user-manager/user-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250px;\r\n    font-family: 'Courier New', Courier, monospace !important;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 54px;\r\n    padding: 8px 20px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 12px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 450px;\r\n  }\r\n  \r\n  .customMatError{\r\n    position: absolute;\r\n    top:30px;\r\n    font-size: 10px;\r\n    color: coral;\r\n}"

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #contentCreateUser>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createUserForm.User_Id\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Add User</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"createUserForm.User_Id\" (click)=\"cancelUpdateUser();CreatingUserForm.resetForm()\" color=\"accent\">\n    <mat-icon>{{'clear'}}</mat-icon>Reset</button>\n</ng-template>\n<ng-template #contentUpdateUser>\n  <button type=\"submit\" mat-button mat-raised-button class=\"mr-2\" value=\"createUserForm.User_Id\" color=\"primary\">\n    <mat-icon>{{'add'}}</mat-icon>Update User</button>\n  <button type=\"button\" mat-button mat-raised-button value=\"createUserForm.User_Id\" (click)=\"cancelUpdateUser();CreatingUserForm.resetForm()\" color=\"warn\">\n    <mat-icon>{{'cancel'}}</mat-icon>Cancel</button>\n</ng-template>\n<div class=\"example-container col-md-4 offset-md-4 mt-4\">\n  <form #CreatingUserForm=\"ngForm\" (ngSubmit)=\"OnUserFormSubmit(CreatingUserForm)\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First Name\" required name=\"FirstName\" [(ngModel)]=\"createUserForm.FirstName\" #FirstName=\"ngModel\"\n      />\n      <input type=\"hidden\" [(ngModel)]=\"createUserForm.User_Id\" name=\"User_Id\">\n      <mat-error>\n        First Name is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput required placeholder=\"Last Name\" name=\"LastName\" [(ngModel)]=\"createUserForm.LastName\" #LastName=\"ngModel\"\n      />\n      <mat-error>\n        Last Name is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" required placeholder=\"Employee Id\" name=\"Employee_Id\" [(ngModel)]=\"createUserForm.Employee_Id\" #Employee_Id=\"ngModel\"\n      />\n      <mat-error>\n        Employee Id is\n        <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <div *ngIf=\"createUserForm.IsCreate;then contentCreateUser else contentUpdateUser\" color=\"primary\">\n    </div>\n  </form>\n</div>\n<hr/>\n<div class=\"col-md-8 offset-md-2 mt-4\">\n  <mat-form-field class=\"col-md-3\">\n    <input matInput placeholder=\"Search\" name=\"SearchValue\" [(ngModel)]=\"SearchValue\">\n  </mat-form-field>\n  <label>Sort By</label>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2 ml-2\" value=\"\" (click)=\"sort('FirstName')\" color=\"primary\">\n    FirstName</button>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('LastName')\" color=\"primary\">\n    LastName</button>\n  <button type=\"button\" mat-button mat-raised-button class=\"mr-2\" value=\"\" (click)=\"sort('EmpId')\" color=\"primary\">\n    EmployeeId</button>\n</div>\n<div class=\"col-md-8 offset-md-2 mt-4\">\n  <ul class=\"list-group list-group-flush\">\n    <li *ngFor=\"let useritem of userDataSource | FilterPipe: SearchValue; let i=index\" class=\"list-group-item\">\n      <div class=\"row\">\n        <div class=\"col col-md-10\">\n          <p>\n            <strong> FirstName:</strong> {{ useritem.FirstName }} </p>\n          <p>\n            <strong>LastName:</strong> {{ useritem.LastName }}</p>\n          <p>\n            <strong>Employee_Id:</strong> {{ useritem.Employee_Id }}</p>\n        </div>\n        <div class=\"col col-md-2\">\n          <div class=\"row\">\n            <div class=\"col col-12\">\n              <button mat-raised-button color=\"primary\" (click)=\"editUser(useritem)\">\n                <mat-icon>create</mat-icon> Edit</button>\n              <br>\n              <br>\n              <button mat-raised-button color=\"warn\" (click)=\"deleteUser(useritem)\">\n                <mat-icon item-width=\"20px\">delete</mat-icon> Delete</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n\n    <li *ngIf=\"(userDataSource| FilterPipe:SearchValue).length==0\" class=\"list-group-item\">\n      <div class=\"alert alert-info\">\n        There are no items to display.\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/user-manager/user-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-manager/user-manager.component.ts ***!
  \********************************************************/
/*! exports provided: UserManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerComponent", function() { return UserManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ErrorStateMatcher */ "./src/app/ErrorStateMatcher.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagerComponent = /** @class */ (function () {
    function UserManagerComponent(userService) {
        this.userService = userService;
        this.userDataSource = [];
        this.userFirstNameSort = true;
        this.userLastNameSort = true;
        this.userEmpIdSort = true;
        this.FNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.EmpIdFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.LNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.matcher = new _ErrorStateMatcher__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        // this.createUserForm = new User();
        // this.createUserForm.IsCreate = true;
        console.log("constructor");
    }
    UserManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.createUserForm.IsCreate = true;
        this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; });
        this.SortElement = 'FirstName';
    };
    UserManagerComponent.prototype.sort = function (sortElement) {
        console.log('calling sort' + sortElement);
        this.SortElement = sortElement;
        if (sortElement == 'FirstName') {
            if (this.userFirstNameSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); }).reverse();
            }
            this.userFirstNameSort = !this.userFirstNameSort;
        }
        else if (sortElement == 'LastName') {
            if (this.userLastNameSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); }).reverse();
            }
            this.userLastNameSort = !this.userLastNameSort;
        }
        else {
            if (this.userEmpIdSort) {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.Employee_ID - b.Employee_ID; });
            }
            else {
                this.userDataSource = this.userDataSource.sort(function (a, b) { return a.Employee_ID - b.Employee_ID; }).reverse();
            }
            this.userEmpIdSort = !this.userEmpIdSort;
        }
    };
    UserManagerComponent.prototype.editUser = function (user) {
        // this.createUserForm = new User();
        var localUser = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        localUser.Employee_ID = user.Employee_ID;
        localUser.IsCreate = false;
        localUser.FirstName = user.FirstName;
        localUser.LastName = user.LastName;
        localUser.User_id = user.User_id;
        console.log(user);
        this.createUserForm = localUser;
        //this.setTextValue = this.userDataSource[user].FirstName;
    };
    UserManagerComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUsers(user.User_id).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
    };
    UserManagerComponent.prototype.cancelUpdateUser = function () {
        this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.createUserForm.IsCreate = true;
    };
    UserManagerComponent.prototype.OnUserFormSubmit = function (CreateUserForm) {
        var _this = this;
        console.log(CreateUserForm.value);
        if (CreateUserForm.valid) {
            var localUser = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
            localUser = CreateUserForm.value;
            if (localUser.User_id != undefined && localUser.User_id > 0) {
                this.userService.updateUsers(CreateUserForm.value, localUser.User_id).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
                this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
                this.createUserForm.IsCreate = true;
                console.log("user updated");
                CreateUserForm.resetForm();
            }
            else {
                this.userService.addUsers(CreateUserForm.value).subscribe(function (g) { return _this.userService.getUsers().subscribe(function (a) { return _this.userDataSource = a; }); });
                this.createUserForm = new _User__WEBPACK_IMPORTED_MODULE_4__["User"]();
                this.createUserForm.IsCreate = true;
                console.log("user added");
                console.log(this.userDataSource);
                CreateUserForm.resetForm();
            }
        }
    };
    UserManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-manager',
            template: __webpack_require__(/*! ./user-manager.component.html */ "./src/app/user-manager/user-manager.component.html"),
            styles: [__webpack_require__(/*! ./user-manager.component.css */ "./src/app/user-manager/user-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"]])
    ], UserManagerComponent);
    return UserManagerComponent;
}());



/***/ }),

/***/ "./src/app/user-search/user-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-search/user-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 250;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.example-header{\r\n    min-height: 50px;\r\n    padding: 5px 15px 0;\r\n}\r\n\r\n.mat-form-field\r\n{\r\nfont-size: 13px;\r\nwidth: 90%;    \r\n}\r\n\r\n.mat-table{\r\n    overflow:auto;\r\n    max-height: 450px;\r\n}"

/***/ }),

/***/ "./src/app/user-search/user-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/user-search/user-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-dialog-content>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter Users\">\n    </mat-form-field>\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"User_Id\">\n        <mat-header-cell *matHeaderCellDef> User_Id </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.User_Id}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"FirstName\">\n        <mat-header-cell *matHeaderCellDef> FirstName </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.FirstName}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"LastName\">\n        <mat-header-cell *matHeaderCellDef> LastName </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\"> {{User.LastName}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef> </mat-header-cell>\n        <mat-cell *matCellDef=\"let User\">\n          <div>\n            <button mat-button mat-raised-button class=\"mr-2\" value=\"User.User_Id\" [mat-dialog-close]=\"User\" color=\"primary\">\n              Select</button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/user-search/user-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-search/user-search.component.ts ***!
  \******************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _UserDialogData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserDialogData */ "./src/app/UserDialogData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(userService, dialogRef, data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['User_Id', 'FirstName', 'LastName', 'Action'];
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (a) { return _this.setData(a); });
    };
    UserSearchComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserSearchComponent.prototype.setData = function (data) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
        this.dataSource.paginator = this.paginator;
    };
    UserSearchComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserSearchComponent.prototype, "paginator", void 0);
    UserSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-search/user-search.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _UserDialogData__WEBPACK_IMPORTED_MODULE_3__["UserDialogData"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./src/app/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' })
};
var UserServiceService = /** @class */ (function () {
    function UserServiceService(http) {
        this.http = http;
        this.UserUrl = 'http://localhost/ProjectManagerAPI/api/User';
        this.UserByUseridUrl = 'http://localhost/ProjectManagerAPI/api/User/';
        this.CreateUserUrl = 'http://localhost/ProjectManagerAPI/api/User';
        this.DeleteUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';
        this.UpdateUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';
    }
    UserServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log('${operation} failed:${error.message}');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    UserServiceService.prototype.getUsers = function () {
        console.log('Invoking GetUser................');
        return this.http.get(this.UserUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProject', [])));
    };
    UserServiceService.prototype.addUsers = function (user) {
        console.log('Invoking AddUser................');
        return this.http.post(this.CreateUserUrl, _User__WEBPACK_IMPORTED_MODULE_4__["User"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser', [])));
    };
    UserServiceService.prototype.updateUsers = function (user, user_id) {
        console.log('Invoking UpdateUser................');
        return this.http.put(this.UpdateUserUrl + user_id, _User__WEBPACK_IMPORTED_MODULE_4__["User"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('UpdateUser', [])));
    };
    UserServiceService.prototype.deleteUsers = function (user_id) {
        console.log('Invoking DeleteUser................');
        return this.http.delete(this.DeleteUserUrl + user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('DeleteUser', [])));
    };
    UserServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Final Certification\ProjectManagerUI-Final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map