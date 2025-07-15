(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/language-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    en: {
        // App
        appName: "DEVILL AI",
        welcome: "Hi, I'm DEVILL AI.",
        howCanIHelp: "How can I help you today?",
        messagePlaceholder: "Message DEVILL AI",
        // Sidebar
        newChat: "New Chat",
        settings: "Settings",
        // Settings
        settingsTitle: "Settings",
        theme: "Theme",
        language: "Language",
        lightTheme: "Light",
        darkTheme: "Dark",
        systemTheme: "System",
        english: "English",
        indonesian: "Indonesian",
        close: "Close",
        // Chat
        send: "Send",
        thinking: "Thinking..."
    },
    id: {
        // App
        appName: "DEVILL AI",
        welcome: "Hai, saya DEVILL AI.",
        howCanIHelp: "Bagaimana saya bisa membantu Anda hari ini?",
        messagePlaceholder: "Pesan DEVILL AI",
        // Sidebar
        newChat: "Chat Baru",
        settings: "Pengaturan",
        // Settings
        settingsTitle: "Pengaturan",
        theme: "Tema",
        language: "Bahasa",
        lightTheme: "Terang",
        darkTheme: "Gelap",
        systemTheme: "Sistem",
        english: "Bahasa Inggris",
        indonesian: "Bahasa Indonesia",
        close: "Tutup",
        // Chat
        send: "Kirim",
        thinking: "Berpikir..."
    }
};
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const savedLanguage = localStorage.getItem('devill-language');
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
                setLanguage(savedLanguage);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem('devill-language', lang);
    };
    const t = (key)=>{
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys){
            value = value?.[k];
        }
        return value || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/language-context.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "W8orfgzKvvs5hVi8Wxnq8KXupyo=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_language-context_tsx_2c60a858._.js.map