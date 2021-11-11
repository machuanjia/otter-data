"use strict";
/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-11-11 11:38:39
 * @FilePath: /otter-data/src/stores/app/index.ts
 * @Description:
 */
var _a;
exports.__esModule = true;
exports.selectAppStatus = exports.selectAppBread = exports.selectAppCurrentRoute = exports.selectAppRoutes = exports.selectAppPermissions = exports.setBread = exports.setCurrentRoute = exports.setRoutes = exports.appSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var otter_pro_1 = require("otter-pro");
var app_service_1 = require("./app.service");
var initialState = {
    value: 0,
    permissions: [],
    status: otter_pro_1.STATUS.LOADING,
    routes: [],
    currentRoute: null,
    bread: []
};
exports.appSlice = toolkit_1.createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setRoutes: function (state, action) {
            state.routes = action.payload;
        },
        setCurrentRoute: function (state, action) {
            state.currentRoute = action.payload;
        },
        setBread: function (state, action) {
            state.bread = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(app_service_1["default"].getInfo.pending, function (state) {
            state.status = otter_pro_1.STATUS.LOADING;
        })
            .addCase(app_service_1["default"].getInfo.fulfilled, function (state, action) {
            // @ts-ignore
            state.permissions = action.payload.permissions;
            state.routes = action.payload.routes;
            state.status = otter_pro_1.STATUS.IDLE;
        });
    }
});
exports.setRoutes = (_a = exports.appSlice.actions, _a.setRoutes), exports.setCurrentRoute = _a.setCurrentRoute, exports.setBread = _a.setBread;
exports.selectAppPermissions = function (state) { return state.app.permissions; };
exports.selectAppRoutes = function (state) { return state.app.routes; };
exports.selectAppCurrentRoute = function (state) { return state.app.currentRoute; };
exports.selectAppBread = function (state) { return state.app.bread; };
exports.selectAppStatus = function (state) { return state.app.status; };
exports["default"] = exports.appSlice.reducer;
