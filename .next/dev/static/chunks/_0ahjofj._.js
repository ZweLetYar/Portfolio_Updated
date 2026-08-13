(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portfolio",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Arrow = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": "true",
        children: "↗"
    }, void 0, false, {
        fileName: "[project]/components/portfolio.tsx",
        lineNumber: 5,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
_c = Arrow;
const Mark = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mark",
        "aria-hidden": "true",
        children: "✦"
    }, void 0, false, {
        fileName: "[project]/components/portfolio.tsx",
        lineNumber: 6,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Mark;
function Portfolio() {
    _s();
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("about");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            const handler = {
                "Portfolio.useEffect.handler": ()=>{
                    const sections = [
                        "about",
                        "skills",
                        "work",
                        "experience",
                        "contact"
                    ];
                    const found = sections.find({
                        "Portfolio.useEffect.handler.found": (id)=>{
                            const el = document.getElementById(id);
                            return el && el.getBoundingClientRect().top > -220 && el.getBoundingClientRect().top < 260;
                        }
                    }["Portfolio.useEffect.handler.found"]);
                    if (found) setActive(found);
                }
            }["Portfolio.useEffect.handler"];
            window.addEventListener("scroll", handler, {
                passive: true
            });
            handler();
            return ({
                "Portfolio.useEffect": ()=>window.removeEventListener("scroll", handler)
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], []);
    const navigate = (id)=>{
        setMenu(false);
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const submit = (e)=>{
        e.preventDefault();
        setSent(true);
    };
    const filtered = filter === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ambient ambient-one"
            }, void 0, false, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 14,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ambient ambient-two"
            }, void 0, false, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 14,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise"
            }, void 0, false, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 14,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "brand",
                        onClick: ()=>navigate("top"),
                        "aria-label": "Back to top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {}, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 15,
                                columnNumber: 110
                            }, this),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: menu ? "open" : "",
                        "aria-label": "Main navigation",
                        children: [
                            [
                                "About",
                                "about"
                            ],
                            [
                                "Skills",
                                "skills"
                            ],
                            [
                                "Work",
                                "work"
                            ],
                            [
                                "Experience",
                                "experience"
                            ],
                            [
                                "Contact",
                                "contact"
                            ]
                        ].map(([label, id])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: active === id ? "active" : "",
                                onClick: ()=>navigate(id),
                                children: label
                            }, id, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 15,
                                columnNumber: 334
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 142
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu",
                        onClick: ()=>setMenu(!menu),
                        "aria-expanded": menu,
                        "aria-label": "Toggle menu",
                        children: menu ? "×" : "☰"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 446
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "nav-cta",
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                        children: [
                            "Let's talk ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 15,
                                columnNumber: 647
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 15,
                        columnNumber: 575
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 15,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "top",
                className: "hero section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 16,
                                columnNumber: 71
                            }, this),
                            " AVAILABLE FOR SELECTED WORK"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 16,
                        columnNumber: 46
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker",
                                        children: [
                                            "Hello, I'm ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name.split(" ")[0],
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 142
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            "Thoughtful software,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 237
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: "shaped with care."
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 242
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 213
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "lede",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].intro
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 273
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button primary",
                                                onClick: ()=>navigate("work"),
                                                children: [
                                                    "Explore work ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 423
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 342
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button ghost",
                                                onClick: ()=>navigate("contact"),
                                                children: "Start a conversation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 441
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 312
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 16,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "portrait",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portrait-glow"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 579
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "portrait-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "SOFTWARE",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 657
                                                    }, this),
                                                    "DEVELOPER"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 643
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].initials
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 678
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "EST. 2022"
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 713
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 611
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "orbit orbit-a",
                                        children: [
                                            "TYPE",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 778
                                            }, this),
                                            "SCRIPT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 743
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "orbit orbit-b",
                                        children: [
                                            "CREATIVE",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 834
                                            }, this),
                                            "CODE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 795
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 16,
                                columnNumber: 551
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 16,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-foot",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "SCROLL TO EXPLORE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "↓"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 914
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 16,
                                columnNumber: 890
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                                        target: "_blank",
                                        children: [
                                            "GitHub ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 982
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 934
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                        target: "_blank",
                                        children: [
                                            "LinkedIn ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 16,
                                                columnNumber: 1047
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 16,
                                        columnNumber: 995
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 16,
                                columnNumber: 929
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 16,
                        columnNumber: 863
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "section about",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: "01 / ABOUT"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 17,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "about-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Building digital products that ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "earn their place."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 162
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 17,
                                columnNumber: 127
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 198
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "I value small details, honest collaboration, and shipping things that make someone's day a little better."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 218
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "text-link",
                                        href: "#contact",
                                        children: [
                                            "More about my approach ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 17,
                                                columnNumber: 399
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 335
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 17,
                                columnNumber: 193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 17,
                        columnNumber: 96
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stats",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            s.value,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 17,
                                                columnNumber: 499
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 482
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 17,
                                        columnNumber: 520
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 17,
                                columnNumber: 463
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 17,
                        columnNumber: 424
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 17,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "skills",
                className: "section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: "02 / CAPABILITIES"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 18,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "headline-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "A versatile toolkit.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 18,
                                        columnNumber: 152
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "A focused perspective."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 18,
                                        columnNumber: 157
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 18,
                                columnNumber: 128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "These are editable placeholders — replace them with the technologies you actually use."
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 18,
                                columnNumber: 193
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 18,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skills-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].map((group, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "skill-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "skill-num",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 18,
                                        columnNumber: 398
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: group.group
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 18,
                                        columnNumber: 439
                                    }, this),
                                    group.items.map(([name, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skill",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {}, void 0, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 18,
                                                        columnNumber: 536
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/portfolio.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 530
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/portfolio.tsx",
                                                            lineNumber: 18,
                                                            columnNumber: 556
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/portfolio.tsx",
                                                            lineNumber: 18,
                                                            columnNumber: 569
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/portfolio.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 551
                                                }, this)
                                            ]
                                        }, name, true, {
                                            fileName: "[project]/components/portfolio.tsx",
                                            lineNumber: 18,
                                            columnNumber: 496
                                        }, this))
                                ]
                            }, group.group, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 18,
                                columnNumber: 347
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 18,
                        columnNumber: 292
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 18,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "work",
                className: "section work",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: "03 / SELECTED WORK"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 19,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "headline-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Made to move",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 19,
                                        columnNumber: 148
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "ideas forward."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 19,
                                        columnNumber: 153
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 19,
                                columnNumber: 132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filters",
                                children: [
                                    "All",
                                    "Web",
                                    "AI / ML",
                                    "Mobile"
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: filter === c ? "selected" : "",
                                        onClick: ()=>setFilter(c),
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 19,
                                        columnNumber: 249
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 19,
                                columnNumber: 181
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 19,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-grid",
                        children: filtered.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "project",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `project-art bg-gradient-to-br ${p.accent}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "art-grid"
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 521
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: String(i + 1).padStart(2, "0")
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 548
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "art-title",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 592
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                "aria-label": `Enquire about ${p.title}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                                    fileName: "[project]/components/portfolio.tsx",
                                                    lineNumber: 19,
                                                    columnNumber: 693
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 634
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 19,
                                        columnNumber: 460
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            p.category,
                                                            " · ",
                                                            p.year
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 747
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: p.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 785
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: p.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 803
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 742
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tags",
                                                children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/components/portfolio.tsx",
                                                        lineNumber: 19,
                                                        columnNumber: 870
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 19,
                                                columnNumber: 831
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 19,
                                        columnNumber: 712
                                    }, this)
                                ]
                            }, p.title, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 19,
                                columnNumber: 417
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 19,
                        columnNumber: 363
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 19,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "experience",
                className: "section experience",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: "04 / JOURNEY"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 20,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "headline-row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Experience, with",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/portfolio.tsx",
                                    lineNumber: 20,
                                    columnNumber: 158
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "intention."
                                }, void 0, false, {
                                    fileName: "[project]/components/portfolio.tsx",
                                    lineNumber: 20,
                                    columnNumber: 163
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/portfolio.tsx",
                            lineNumber: 20,
                            columnNumber: 138
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 20,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "timeline",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experience"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "timeline-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 20,
                                        columnNumber: 268
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "date",
                                        children: item.date
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 20,
                                        columnNumber: 300
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: item.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 20,
                                                columnNumber: 344
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: item.company
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 20,
                                                columnNumber: 364
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.copy
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 20,
                                                columnNumber: 387
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: item.tech
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 20,
                                                columnNumber: 405
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 20,
                                        columnNumber: 339
                                    }, this)
                                ]
                            }, item.date, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 20,
                                columnNumber: 243
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 20,
                        columnNumber: 193
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 20,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section credentials",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        children: "05 / FOUNDATION"
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 21,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "credential-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["credentials"].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "0",
                                            i + 1,
                                            " · ",
                                            c.type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 21,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: c.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 21,
                                        columnNumber: 210
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: c.detail
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 21,
                                        columnNumber: 228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 21,
                                        columnNumber: 245
                                    }, this)
                                ]
                            }, c.type, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 21,
                                columnNumber: 156
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 21,
                        columnNumber: 96
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 21,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section terminal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "terminal-window",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 104
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "alex@studio: ~"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 125
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 22,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "code",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "const"
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 22,
                                                columnNumber: 177
                                            }, this),
                                            " currentlyBuilding = ",
                                            '{'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 174
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "  focus: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: '"useful digital experiences"'
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 22,
                                                columnNumber: 241
                                            }, this),
                                            ","
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 219
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "  status: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: '"open to collaboration"'
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 22,
                                                columnNumber: 316
                                            }, this),
                                            ","
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 293
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "  energy: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: '"curious"'
                                            }, void 0, false, {
                                                fileName: "[project]/components/portfolio.tsx",
                                                lineNumber: 22,
                                                columnNumber: 386
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 363
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            '}',
                                            ";"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 418
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "cursor",
                                        children: "▌"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 431
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 22,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 22,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: "06 / NOW"
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 22,
                                columnNumber: 475
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Always learning.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 540
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Always making."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 22,
                                        columnNumber: 545
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 22,
                                columnNumber: 520
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Currently exploring the space between intelligent systems and genuinely human interfaces."
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 22,
                                columnNumber: 573
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 22,
                        columnNumber: 470
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 22,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "section contact",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: "07 / CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 58
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Let's build something",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 137
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "worth remembering."
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 142
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Have a project in mind, or just want to say hello? I'd love to hear from you."
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 174
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "email-link",
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 338
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 263
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 23,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Name",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        name: "name",
                                        placeholder: "Your name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 392
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 381
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Email",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "email",
                                        name: "email",
                                        placeholder: "you@company.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 466
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 454
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Message",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        name: "message",
                                        placeholder: "Tell me a little about your project...",
                                        rows: 4
                                    }, void 0, false, {
                                        fileName: "[project]/components/portfolio.tsx",
                                        lineNumber: 23,
                                        columnNumber: 562
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 548
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "button primary",
                                type: "submit",
                                children: sent ? "Message prepared ✓" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Send message ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                            fileName: "[project]/components/portfolio.tsx",
                                            lineNumber: 23,
                                            columnNumber: 762
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/portfolio.tsx",
                                    lineNumber: 23,
                                    columnNumber: 747
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 667
                            }, this),
                            sent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "form-note",
                                children: "Thanks — this demo form is ready to connect to your email service."
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 23,
                                columnNumber: 793
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 23,
                        columnNumber: 357
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 23,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mark, {}, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 24,
                                columnNumber: 34
                            }, this),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Crafting considered digital experiences."
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 24,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#top",
                                children: "Back to top ↑"
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 24,
                                columnNumber: 115
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/portfolio.tsx",
                                lineNumber: 24,
                                columnNumber: 147
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio.tsx",
                        lineNumber: 24,
                        columnNumber: 110
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio.tsx",
                lineNumber: 24,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_s(Portfolio, "yMRKmKMAgjX/eY3Jl6CG7tZNom4=");
_c2 = Portfolio;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Arrow");
__turbopack_context__.k.register(_c1, "Mark");
__turbopack_context__.k.register(_c2, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "credentials",
    ()=>credentials,
    "experience",
    ()=>experience,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats
]);
const profile = {
    name: "Alex Morgan",
    initials: "AM",
    role: "Software Developer",
    email: "hello@alexmorgan.dev",
    intro: "I build intentional web experiences where crisp engineering meets a considered visual point of view.",
    bio: "I’m a placeholder for your story. Replace this paragraph with a concise introduction to your background, the problems you enjoy solving, and the kind of teams you want to work with.",
    location: "Available worldwide",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
};
const stats = [
    {
        value: "12",
        label: "Selected projects"
    },
    {
        value: "8",
        label: "Core technologies"
    },
    {
        value: "03",
        label: "Years building"
    },
    {
        value: "04",
        label: "Certifications"
    }
];
const skills = [
    {
        group: "Frontend",
        items: [
            [
                "React",
                "Interfaces that feel effortless"
            ],
            [
                "Next.js",
                "Fast, SEO-ready applications"
            ],
            [
                "TypeScript",
                "Safer systems at scale"
            ],
            [
                "Tailwind CSS",
                "Purposeful visual systems"
            ]
        ]
    },
    {
        group: "Backend",
        items: [
            [
                "Node.js",
                "Reliable app foundations"
            ],
            [
                "Python",
                "Versatile problem solving"
            ],
            [
                "REST APIs",
                "Clear connected services"
            ],
            [
                "Databases",
                "Structured, useful data"
            ]
        ]
    },
    {
        group: "AI / ML",
        items: [
            [
                "Computer Vision",
                "Seeing patterns in pixels"
            ],
            [
                "TensorFlow",
                "Practical intelligent features"
            ],
            [
                "PyTorch",
                "Flexible model experimentation"
            ]
        ]
    },
    {
        group: "Tools",
        items: [
            [
                "Git & GitHub",
                "Calm collaboration"
            ],
            [
                "Docker",
                "Consistent environments"
            ],
            [
                "Firebase",
                "Rapid product iteration"
            ]
        ]
    }
];
const projects = [
    {
        title: "Kinetic",
        category: "Web",
        year: "2025",
        description: "A calmer workspace for high-performing product teams to plan, discuss, and ship.",
        tags: [
            "Next.js",
            "TypeScript",
            "PostgreSQL"
        ],
        accent: "from-violet-500 to-fuchsia-500"
    },
    {
        title: "Field Notes",
        category: "AI / ML",
        year: "2024",
        description: "An image-aware research companion that turns observations into structured knowledge.",
        tags: [
            "Python",
            "OpenCV",
            "React"
        ],
        accent: "from-emerald-400 to-cyan-500"
    },
    {
        title: "Luma",
        category: "Mobile",
        year: "2024",
        description: "A focused wellbeing companion designed around private, lightweight daily rituals.",
        tags: [
            "React Native",
            "Firebase",
            "Figma"
        ],
        accent: "from-orange-400 to-rose-500"
    }
];
const experience = [
    {
        date: "2024 — Present",
        role: "Software Developer",
        company: "Your Company",
        copy: "Placeholder role: add your impact, ownership, and the kind of product work you did here.",
        tech: "TypeScript · React · Node.js"
    },
    {
        date: "2022 — 2024",
        role: "Developer / Builder",
        company: "Independent",
        copy: "Placeholder experience: describe the projects, clients, or products that developed your craft.",
        tech: "Next.js · Python · APIs"
    }
];
const credentials = [
    {
        type: "Education",
        title: "Your degree or programme",
        detail: "Institution · Year"
    },
    {
        type: "Certification",
        title: "Your certification",
        detail: "Issuing organization · Year"
    },
    {
        type: "Recognition",
        title: "Your achievement",
        detail: "Context · Year"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0ahjofj._.js.map