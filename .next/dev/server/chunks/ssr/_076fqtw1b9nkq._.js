module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$founder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/founder.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    metadataBase: new URL("https://example.com"),
    title: "Richi Vij | Founder & Entrepreneur",
    description: "Richi Vij: entrepreneur driven by vision, curiosity and purpose.",
    openGraph: {
        title: "Richi Vij",
        description: "Building ideas into meaningful impact.",
        type: "website"
    },
    twitter: {
        card: "summary_large_image"
    },
    alternates: {
        canonical: "/"
    }
};
function RootLayout({ children }) {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Richi Vij",
        jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$founder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["founder"].role.includes("[PLACEHOLDER") ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$founder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["founder"].role,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$founder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["founder"].bio.every((x)=>x.includes("[PLACEHOLDER")) ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$founder$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["founder"].intro,
        url: "https://example.com"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(person)
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 14,
                    columnNumber: 32
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 14,
            columnNumber: 26
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/founder.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CONTENT CONFIG: replace every [PLACEHOLDER] with verified information.
__turbopack_context__.s([
    "founder",
    ()=>founder
]);
const founder = {
    name: "Richi Vij",
    role: "Founder & Entrepreneur [PLACEHOLDER: confirm designation]",
    headline: "Building ideas into meaningful impact.",
    intro: "An entrepreneur driven by vision, curiosity and the belief that meaningful businesses are built through people, purpose and persistence.",
    portrait: "/images/founder/portrait.jpg",
    bio: [
        "[PLACEHOLDER: short introduction written or approved by Richi.]",
        "[PLACEHOLDER: professional background.]"
    ],
    email: "hello@example.com",
    socials: [
        {
            label: "LinkedIn",
            href: "#"
        },
        {
            label: "Instagram",
            href: "#"
        }
    ],
    showPersonal: true,
    nav: [
        [
            "About",
            "#about"
        ],
        [
            "Journey",
            "#journey"
        ],
        [
            "Ventures",
            "#ventures"
        ],
        [
            "Philosophy",
            "#philosophy"
        ],
        [
            "Insights",
            "#insights"
        ],
        [
            "Podcast",
            "#podcast"
        ],
        [
            "Contact",
            "#contact"
        ]
    ]
};
}),
];

//# sourceMappingURL=_076fqtw1b9nkq._.js.map