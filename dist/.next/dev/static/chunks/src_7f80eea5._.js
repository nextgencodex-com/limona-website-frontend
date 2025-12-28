(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Admin/AdminLayout.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AdminLayout-module__1Wi4PG__active",
  "adminText": "AdminLayout-module__1Wi4PG__adminText",
  "backButton": "AdminLayout-module__1Wi4PG__backButton",
  "brandName": "AdminLayout-module__1Wi4PG__brandName",
  "content": "AdminLayout-module__1Wi4PG__content",
  "greeting": "AdminLayout-module__1Wi4PG__greeting",
  "header": "AdminLayout-module__1Wi4PG__header",
  "headerLeft": "AdminLayout-module__1Wi4PG__headerLeft",
  "headerRight": "AdminLayout-module__1Wi4PG__headerRight",
  "layout": "AdminLayout-module__1Wi4PG__layout",
  "logo": "AdminLayout-module__1Wi4PG__logo",
  "logoutButton": "AdminLayout-module__1Wi4PG__logoutButton",
  "main": "AdminLayout-module__1Wi4PG__main",
  "nav": "AdminLayout-module__1Wi4PG__nav",
  "navIcon": "AdminLayout-module__1Wi4PG__navIcon",
  "navItem": "AdminLayout-module__1Wi4PG__navItem",
  "sidebar": "AdminLayout-module__1Wi4PG__sidebar",
});
}),
"[project]/src/components/Admin/AdminLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Admin/AdminLayout.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminLayout({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [adminUser, setAdminUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "Admin"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLayout.useEffect": ()=>{
            // Load admin user from localStorage on client side only
            const storedAdmin = localStorage.getItem("admin");
            if (storedAdmin) {
                setAdminUser(JSON.parse(storedAdmin));
            }
        }
    }["AdminLayout.useEffect"], []);
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
                                children: "LIMONA"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminText,
                                children: "Admin Panel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/Admin/Dashboard",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${pathname === "/Admin/Dashboard" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    "Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 39,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/Admin/Categories",
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${pathname === "/Admin/Categories" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                        children: "📂"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this),
                                    "Categories"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLeft,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].greeting,
                                    children: [
                                        "Welcome back, ",
                                        adminUser.username,
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerRight,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                                        children: "← Back to Website"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutButton,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/AdminLayout.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Admin/AdminLayout.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(AdminLayout, "32sSEjXsFCjD0mWLU4WAEMlJ9Wk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminLayout;
var _c;
__turbopack_context__.k.register(_c, "AdminLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Admin/ProductForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addColorButton": "ProductForm-module__465awG__addColorButton",
  "cancelButton": "ProductForm-module__465awG__cancelButton",
  "checkbox": "ProductForm-module__465awG__checkbox",
  "checkboxGroup": "ProductForm-module__465awG__checkboxGroup",
  "checkboxLabel": "ProductForm-module__465awG__checkboxLabel",
  "checkmark": "ProductForm-module__465awG__checkmark",
  "closeButton": "ProductForm-module__465awG__closeButton",
  "colorButton": "ProductForm-module__465awG__colorButton",
  "colorButtonSelected": "ProductForm-module__465awG__colorButtonSelected",
  "colorPalette": "ProductForm-module__465awG__colorPalette",
  "colorPreview": "ProductForm-module__465awG__colorPreview",
  "customColorInput": "ProductForm-module__465awG__customColorInput",
  "error": "ProductForm-module__465awG__error",
  "form": "ProductForm-module__465awG__form",
  "formActions": "ProductForm-module__465awG__formActions",
  "formContainer": "ProductForm-module__465awG__formContainer",
  "formGroup": "ProductForm-module__465awG__formGroup",
  "formHeader": "ProductForm-module__465awG__formHeader",
  "formRow": "ProductForm-module__465awG__formRow",
  "formTitle": "ProductForm-module__465awG__formTitle",
  "helpText": "ProductForm-module__465awG__helpText",
  "input": "ProductForm-module__465awG__input",
  "label": "ProductForm-module__465awG__label",
  "select": "ProductForm-module__465awG__select",
  "sizeButton": "ProductForm-module__465awG__sizeButton",
  "sizeButtonSelected": "ProductForm-module__465awG__sizeButtonSelected",
  "sizeSelector": "ProductForm-module__465awG__sizeSelector",
  "submitButton": "ProductForm-module__465awG__submitButton",
  "textarea": "ProductForm-module__465awG__textarea",
});
}),
"[project]/src/components/Admin/ProductForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Admin/ProductForm.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const categories = [
    "Men",
    "Women",
    "Kids",
    "Accessories",
    "Limited Edition",
    "Gym wear"
];
const availableColors = [
    {
        name: "Black",
        hex: "#000000"
    },
    {
        name: "White",
        hex: "#FFFFFF"
    },
    {
        name: "Navy",
        hex: "#1E3A8A"
    },
    {
        name: "Red",
        hex: "#DC2626"
    },
    {
        name: "Blue",
        hex: "#3B82F6"
    },
    {
        name: "Green",
        hex: "#10B981"
    },
    {
        name: "Yellow",
        hex: "#FCD34D"
    },
    {
        name: "Purple",
        hex: "#8B5CF6"
    },
    {
        name: "Pink",
        hex: "#EC4899"
    },
    {
        name: "Orange",
        hex: "#F97316"
    },
    {
        name: "Gray",
        hex: "#6B7280"
    },
    {
        name: "Brown",
        hex: "#92400E"
    }
];
const availableSizes = [
    "S",
    "M",
    "L",
    "XL",
    "2XL"
];
function ProductForm({ product, onClose, onSuccess }) {
    _s();
    const [categorySubcategories, setCategorySubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        description: "",
        price: 0,
        category: "Men",
        subcategory: "",
        size: "",
        color: "",
        stock: 0,
        image_url: "",
        is_active: true,
        featured: false,
        latest_arrival: false
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedColors, setSelectedColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSizes, setSelectedSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customColor, setCustomColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Fetch all subcategories
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductForm.useEffect": ()=>{
            const fetchSubcategories = {
                "ProductForm.useEffect.fetchSubcategories": async ()=>{
                    try {
                        const response = await fetch("https://backend.srilankawildsafari.com/api/v1/categories");
                        const data = await response.json();
                        // The API returns { success: true, data: [...] }
                        const categories = data.success ? data.data : data;
                        if (categories && Array.isArray(categories)) {
                            // Group subcategories by category
                            const subsByCategory = {};
                            categories.forEach({
                                "ProductForm.useEffect.fetchSubcategories": (category)=>{
                                    if (category.subcategories && category.subcategories.length > 0) {
                                        // Filter only active subcategories that are not coming soon
                                        subsByCategory[category.name] = category.subcategories.filter({
                                            "ProductForm.useEffect.fetchSubcategories": (sub)=>sub.is_active && !sub.coming_soon
                                        }["ProductForm.useEffect.fetchSubcategories"]);
                                    }
                                }
                            }["ProductForm.useEffect.fetchSubcategories"]);
                            setCategorySubcategories(subsByCategory);
                        }
                    } catch (error) {
                        console.error("Failed to fetch subcategories:", error);
                    }
                }
            }["ProductForm.useEffect.fetchSubcategories"];
            fetchSubcategories();
        }
    }["ProductForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductForm.useEffect": ()=>{
            if (product) {
                setFormData({
                    ...product,
                    price: Number(product.price),
                    stock: Number(product.stock)
                });
                setImagePreview(product.image_url || "");
                // Parse existing colors and sizes
                if (product.color) {
                    setSelectedColors(product.color.split(',').map({
                        "ProductForm.useEffect": (c)=>c.trim()
                    }["ProductForm.useEffect"]));
                }
                if (product.size) {
                    setSelectedSizes(product.size.split(',').map({
                        "ProductForm.useEffect": (s)=>s.trim()
                    }["ProductForm.useEffect"]));
                }
            }
        }
    }["ProductForm.useEffect"], [
        product
    ]);
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = e.target.checked;
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (name === "price" || name === "stock") {
            // Allow empty string during typing, convert to number only if valid
            const numValue = value === '' ? '' : value;
            setFormData({
                ...formData,
                [name]: numValue
            });
        } else {
            // Reset subcategory when category changes
            if (name === "category") {
                setFormData({
                    ...formData,
                    [name]: value,
                    subcategory: ""
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        }
    };
    const toggleColor = (colorName)=>{
        setSelectedColors((prev)=>{
            const newColors = prev.includes(colorName) ? prev.filter((c)=>c !== colorName) : [
                ...prev,
                colorName
            ];
            setFormData({
                ...formData,
                color: newColors.join(', ')
            });
            return newColors;
        });
    };
    const toggleSize = (size)=>{
        setSelectedSizes((prev)=>{
            const newSizes = prev.includes(size) ? prev.filter((s)=>s !== size) : [
                ...prev,
                size
            ];
            setFormData({
                ...formData,
                size: newSizes.join(', ')
            });
            return newSizes;
        });
    };
    const addCustomColor = ()=>{
        if (customColor && !selectedColors.includes(customColor)) {
            const newColors = [
                ...selectedColors,
                customColor
            ];
            setSelectedColors(newColors);
            setFormData({
                ...formData,
                color: newColors.join(', ')
            });
            setCustomColor("");
        }
    };
    const handleImageChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const uploadImage = async ()=>{
        if (!imageFile) return formData.image_url || null;
        setUploading(true);
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("No authentication token found. Please login again.");
                // Redirect to login
                window.location.href = "/Admin/Login";
                throw new Error("No authentication token found");
            }
            const formDataUpload = new FormData();
            formDataUpload.append("image", imageFile);
            console.log("Uploading image:", imageFile.name);
            const response = await fetch("https://backend.srilankawildsafari.com/api/v1/upload/product-image", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formDataUpload
            });
            console.log("Upload response status:", response.status);
            if (response.status === 401 || response.status === 403) {
                // Token expired or invalid
                setError("Session expired. Please login again.");
                localStorage.removeItem("token");
                localStorage.removeItem("admin");
                window.location.href = "/Admin/Login";
                throw new Error("Invalid or expired token");
            }
            const data = await response.json();
            console.log("Upload response data:", data);
            if (!response.ok) {
                throw new Error(data.error || `Upload failed with status ${response.status}`);
            }
            if (!data.success || !data.data || !data.data.image_url) {
                throw new Error("Invalid response from server");
            }
            return data.data.image_url;
        } catch (err) {
            console.error("Upload error:", err);
            setError(`Image upload failed: ${err.message}`);
            return null;
        } finally{
            setUploading(false);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            // Upload image first if there's a new one
            let imageUrl = formData.image_url;
            if (imageFile) {
                const uploadedUrl = await uploadImage();
                if (!uploadedUrl) {
                    setLoading(false);
                    return; // Error already set in uploadImage
                }
                imageUrl = uploadedUrl;
            }
            const token = localStorage.getItem("token");
            const url = product ? `https://backend.srilankawildsafari.com/api/v1/products/${product.id}` : "https://backend.srilankawildsafari.com/api/v1/products";
            const response = await fetch(url, {
                method: product ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    image_url: imageUrl
                })
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Failed to save product");
            }
            // Dispatch custom event for real-time updates
            window.dispatchEvent(new CustomEvent('productUpdated', {
                detail: {
                    product: data.data
                }
            }));
            // Call onSuccess callback to refresh parent component
            if (onSuccess) {
                onSuccess();
            }
            onClose(true, !!product);
        } catch (err) {
            setError(err.message || "Failed to save product");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                        children: product ? "Edit Product" : "Add New Product"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 309,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onClose(),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 312,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 318,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Product Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 322,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "name",
                                    value: formData.name,
                                    onChange: handleChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 323,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 321,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "description",
                                    value: formData.description,
                                    onChange: handleChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 337,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 335,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 334,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Price ($) *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "price",
                                        value: formData.price,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        step: "0.01",
                                        min: "0",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 348,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Stock *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 362,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "stock",
                                        value: formData.stock,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        min: "0",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 363,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 361,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 347,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Category *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 377,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "category",
                                        value: formData.category,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                        required: true,
                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: cat,
                                                children: cat
                                            }, cat, false, {
                                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                                lineNumber: 386,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 378,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, this),
                            categorySubcategories[formData.category] && categorySubcategories[formData.category].length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Subcategory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 394,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "subcategory",
                                        value: formData.subcategory || "",
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select subcategory"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                                lineNumber: 401,
                                                columnNumber: 33
                                            }, this),
                                            categorySubcategories[formData.category].map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: sub.name,
                                                    children: sub.name
                                                }, sub.id, false, {
                                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 395,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 393,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 375,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Available Sizes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 414,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sizeSelector,
                                    children: availableSizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>toggleSize(size),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sizeButton} ${selectedSizes.includes(size) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sizeButtonSelected : ''}`,
                                            children: size
                                        }, size, false, {
                                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                            lineNumber: 417,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 415,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helpText,
                                    children: [
                                        "Selected: ",
                                        selectedSizes.join(', ') || 'None'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 427,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 413,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 412,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Available Colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 433,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorPalette,
                                    children: availableColors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>toggleColor(color.name),
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorButton} ${selectedColors.includes(color.name) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorButtonSelected : ''}`,
                                            style: {
                                                backgroundColor: color.hex
                                            },
                                            title: color.name,
                                            children: selectedColors.includes(color.name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkmark,
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                                lineNumber: 445,
                                                columnNumber: 41
                                            }, this)
                                        }, color.name, false, {
                                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                            lineNumber: 436,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 434,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customColorInput,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: customColor,
                                            onChange: (e)=>setCustomColor(e.target.value),
                                            placeholder: "Add custom color (e.g., #FF5733 or Red)",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                            lineNumber: 452,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: addCustomColor,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addColorButton,
                                            disabled: !customColor,
                                            children: "Add Color"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                            lineNumber: 459,
                                            columnNumber: 29
                                        }, this),
                                        customColor && customColor.startsWith('#') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorPreview,
                                            style: {
                                                backgroundColor: customColor
                                            },
                                            title: "Color preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                            lineNumber: 468,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 451,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helpText,
                                    children: [
                                        "Selected: ",
                                        selectedColors.join(', ') || 'None'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 476,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 432,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 431,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Product Image"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 482,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    id: "image",
                                    name: "image",
                                    accept: "image/*",
                                    onChange: handleImageChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 483,
                                    columnNumber: 25
                                }, this),
                                imagePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imagePreview,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: imagePreview,
                                        alt: "Product preview",
                                        style: {
                                            maxWidth: '200px',
                                            marginTop: '10px',
                                            borderRadius: '8px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 493,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 492,
                                    columnNumber: 29
                                }, this),
                                uploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#666',
                                        fontSize: '14px',
                                        marginTop: '5px'
                                    },
                                    children: "Uploading image..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 496,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 481,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 480,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Image URL (or upload above)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 502,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "image_url",
                                    value: formData.image_url,
                                    onChange: handleChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "/images/category/product.jpg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                    lineNumber: 503,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Admin/ProductForm.tsx",
                            lineNumber: 501,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 500,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "is_active",
                                        checked: formData.is_active,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 516,
                                        columnNumber: 25
                                    }, this),
                                    "Active (Show on website)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 515,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "latest_arrival",
                                        checked: formData.latest_arrival || false,
                                        onChange: handleChange,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkbox
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                        lineNumber: 526,
                                        columnNumber: 25
                                    }, this),
                                    "Latest Arrival"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 525,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 514,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onClose(),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 538,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                disabled: loading,
                                children: loading ? "Saving..." : product ? "Update Product" : "Add Product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                                lineNumber: 545,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/ProductForm.tsx",
                        lineNumber: 537,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/ProductForm.tsx",
                lineNumber: 317,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Admin/ProductForm.tsx",
        lineNumber: 307,
        columnNumber: 9
    }, this);
}
_s(ProductForm, "MEJzwHo5bXnwnltp7r7MAWgL8pk=");
_c = ProductForm;
var _c;
__turbopack_context__.k.register(_c, "ProductForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Admin/ProductList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ProductList-module__Ldy2Ta__actions",
  "badge": "ProductList-module__Ldy2Ta__badge",
  "badgeActive": "ProductList-module__Ldy2Ta__badgeActive",
  "badgeFeatured": "ProductList-module__Ldy2Ta__badgeFeatured",
  "badgeInactive": "ProductList-module__Ldy2Ta__badgeInactive",
  "deleteButton": "ProductList-module__Ldy2Ta__deleteButton",
  "editButton": "ProductList-module__Ldy2Ta__editButton",
  "emptyIcon": "ProductList-module__Ldy2Ta__emptyIcon",
  "emptyState": "ProductList-module__Ldy2Ta__emptyState",
  "imageCell": "ProductList-module__Ldy2Ta__imageCell",
  "inStock": "ProductList-module__Ldy2Ta__inStock",
  "lowStock": "ProductList-module__Ldy2Ta__lowStock",
  "meta": "ProductList-module__Ldy2Ta__meta",
  "nameCell": "ProductList-module__Ldy2Ta__nameCell",
  "noImage": "ProductList-module__Ldy2Ta__noImage",
  "outOfStock": "ProductList-module__Ldy2Ta__outOfStock",
  "price": "ProductList-module__Ldy2Ta__price",
  "productImage": "ProductList-module__Ldy2Ta__productImage",
  "productList": "ProductList-module__Ldy2Ta__productList",
  "productName": "ProductList-module__Ldy2Ta__productName",
  "stock": "ProductList-module__Ldy2Ta__stock",
  "table": "ProductList-module__Ldy2Ta__table",
  "tableContainer": "ProductList-module__Ldy2Ta__tableContainer",
});
}),
"[project]/src/components/Admin/ProductList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Admin/ProductList.module.css [app-client] (css module)");
"use client";
;
;
;
function ProductList({ products, onEdit, onDelete, onToggleActive, onToggleStock }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productList,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 35,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 39,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageCell,
                                                children: product.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.image_url,
                                                    alt: product.name,
                                                    width: 50,
                                                    height: 50,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noImage,
                                                    children: "📦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 48,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameCell,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 41
                                                    }, this),
                                                    product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                                        children: [
                                                            "Size: ",
                                                            product.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 45
                                                    }, this),
                                                    product.color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                                        children: [
                                                            "Color: ",
                                                            product.color
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 63,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 62,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: product.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 41
                                                    }, this),
                                                    product.subcategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                                        children: product.subcategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 78,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 77,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            children: [
                                                "$",
                                                Number(product.price).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 87,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onToggleStock(product),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stock} ${product.stock === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outOfStock : product.stock < 10 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lowStock : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inStock}`,
                                                title: product.stock === 0 ? "Mark as In Stock" : "Mark as Out of Stock",
                                                children: product.stock
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 89,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onToggleActive(product),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge} ${product.is_active ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeActive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeInactive}`,
                                                title: product.is_active ? "Deactivate" : "Activate",
                                                children: product.is_active ? "Active" : "Inactive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 104,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(product),
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                                        title: "Edit",
                                                        children: "✏️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(product.id),
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteButton,
                                                        title: "Delete",
                                                        children: "🗑️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Admin/ProductList.tsx",
                                                lineNumber: 117,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/components/Admin/ProductList.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Admin/ProductList.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Admin/ProductList.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Admin/ProductList.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon,
                        children: "📦"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                        lineNumber: 142,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "No Products Found"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Start by adding your first product"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/ProductList.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/ProductList.tsx",
                lineNumber: 141,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Admin/ProductList.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_c = ProductList;
var _c;
__turbopack_context__.k.register(_c, "ProductList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Admin/Notification.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "Notification-module__E3Z05W__closeButton",
  "content": "Notification-module__E3Z05W__content",
  "error": "Notification-module__E3Z05W__error",
  "icon": "Notification-module__E3Z05W__icon",
  "info": "Notification-module__E3Z05W__info",
  "message": "Notification-module__E3Z05W__message",
  "notification": "Notification-module__E3Z05W__notification",
  "slideDown": "Notification-module__E3Z05W__slideDown",
  "success": "Notification-module__E3Z05W__success",
});
}),
"[project]/src/components/Admin/Notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Notification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Admin/Notification.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Notification({ message, type, onClose, duration = 3000 }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            const timer = setTimeout({
                "Notification.useEffect.timer": ()=>{
                    onClose();
                }
            }["Notification.useEffect.timer"], duration);
            return ({
                "Notification.useEffect": ()=>clearTimeout(timer)
            })["Notification.useEffect"];
        }
    }["Notification.useEffect"], [
        duration,
        onClose
    ]);
    const getIcon = ()=>{
        switch(type){
            case "success":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Notification.tsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Admin/Notification.tsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, this);
            case "error":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Notification.tsx",
                        lineNumber: 32,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Admin/Notification.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this);
            case "info":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Notification.tsx",
                        lineNumber: 38,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Admin/Notification.tsx",
                    lineNumber: 37,
                    columnNumber: 21
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notification} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][type]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    getIcon(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Notification.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/Notification.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClose,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: "18",
                    height: "18",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/Notification.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Admin/Notification.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Admin/Notification.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Admin/Notification.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(Notification, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Notification;
var _c;
__turbopack_context__.k.register(_c, "Notification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/Admin/Dashboard/dashboard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addButton": "dashboard-module__MHyZVW__addButton",
  "dashboard": "dashboard-module__MHyZVW__dashboard",
  "formModal": "dashboard-module__MHyZVW__formModal",
  "header": "dashboard-module__MHyZVW__header",
  "loading": "dashboard-module__MHyZVW__loading",
  "statCard": "dashboard-module__MHyZVW__statCard",
  "statContent": "dashboard-module__MHyZVW__statContent",
  "statIcon": "dashboard-module__MHyZVW__statIcon",
  "statLabel": "dashboard-module__MHyZVW__statLabel",
  "statValue": "dashboard-module__MHyZVW__statValue",
  "statsGrid": "dashboard-module__MHyZVW__statsGrid",
  "title": "dashboard-module__MHyZVW__title",
});
}),
"[project]/src/app/Admin/Dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/AdminLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/ProductForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/ProductList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/Notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Admin/Dashboard/dashboard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AdminDashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProduct, setEditingProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: "",
        type: "success"
    });
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalProducts: 0,
        activeProducts: 0,
        totalStock: 0,
        categories: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            // Check authentication
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/Admin/Login");
                return;
            }
            fetchProducts();
        }
    }["AdminDashboard.useEffect"], [
        router
    ]);
    const fetchProducts = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://backend.srilankawildsafari.com/api/v1/products", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (data.success) {
                setProducts(data.data);
                calculateStats(data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally{
            setLoading(false);
        }
    };
    const calculateStats = (products)=>{
        const activeProducts = products.filter((p)=>p.is_active).length;
        const totalStock = products.reduce((sum, p)=>sum + p.stock, 0);
        const categories = new Set(products.map((p)=>p.category)).size;
        setStats({
            totalProducts: products.length,
            activeProducts,
            totalStock,
            categories
        });
    };
    const showNotification = (message, type)=>{
        setNotification({
            show: true,
            message,
            type
        });
    };
    const closeNotification = ()=>{
        setNotification({
            show: false,
            message: "",
            type: "success"
        });
    };
    const handleAddProduct = ()=>{
        setEditingProduct(null);
        setShowForm(true);
    };
    const handleEditProduct = (product)=>{
        setEditingProduct(product);
        setShowForm(true);
    };
    const handleToggleActive = async (product)=>{
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`https://backend.srilankawildsafari.com/api/v1/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...product,
                    is_active: !product.is_active
                })
            });
            const data = await response.json();
            if (data.success) {
                showNotification(`Product ${!product.is_active ? "activated" : "deactivated"} successfully!`, "success");
                fetchProducts();
            } else {
                showNotification("Failed to update product status", "error");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            showNotification("Error updating product status", "error");
        }
    };
    const handleToggleStock = async (product)=>{
        try {
            const token = localStorage.getItem("token");
            const newStock = product.stock === 0 ? 1 : 0;
            const response = await fetch(`https://backend.srilankawildsafari.com/api/v1/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...product,
                    stock: newStock
                })
            });
            const data = await response.json();
            if (data.success) {
                showNotification(`Product marked as ${newStock === 0 ? "out of stock" : "in stock"}!`, "success");
                fetchProducts();
            } else {
                showNotification("Failed to update stock status", "error");
            }
        } catch (error) {
            console.error("Error updating stock:", error);
            showNotification("Error updating stock status", "error");
        }
    };
    const handleDeleteProduct = async (id)=>{
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`https://backend.srilankawildsafari.com/api/v1/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (data.success) {
                showNotification("Product deleted successfully!", "success");
                fetchProducts();
            } else {
                showNotification("Failed to delete product", "error");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            showNotification("Error deleting product", "error");
        }
    };
    const handleFormClose = (saved, isEdit)=>{
        setShowForm(false);
        setEditingProduct(null);
        if (saved) {
            const message = isEdit ? "Product updated successfully!" : "Product added successfully!";
            showNotification(message, "success");
        }
        fetchProducts();
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                lineNumber: 210,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
            lineNumber: 209,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            notification.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$Notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: notification.message,
                type: notification.type,
                onClose: closeNotification
            }, void 0, false, {
                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                lineNumber: 218,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Product Management"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAddProduct,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addButton,
                                children: "+ Add New Product"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: stats.totalProducts
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Total Products"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 237,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 233,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: stats.activeProducts
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Active Products"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: stats.totalStock
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 250,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Total Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statIcon,
                                        children: "🏷️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: stats.categories
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Admin$2f$Dashboard$2f$dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formModal,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            product: editingProduct,
                            onClose: handleFormClose,
                            onSuccess: fetchProducts
                        }, void 0, false, {
                            fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                            lineNumber: 265,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                        lineNumber: 264,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        products: products,
                        onEdit: handleEditProduct,
                        onDelete: handleDeleteProduct,
                        onToggleActive: handleToggleActive,
                        onToggleStock: handleToggleStock
                    }, void 0, false, {
                        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                        lineNumber: 273,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Admin/Dashboard/page.tsx",
        lineNumber: 216,
        columnNumber: 9
    }, this);
}
_s(AdminDashboard, "DXBmHAr7dXdMOrvLEbugNEPUozY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7f80eea5._.js.map