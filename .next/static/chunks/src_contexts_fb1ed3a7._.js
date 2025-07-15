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
"[project]/src/contexts/ai-settings-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AISettingsProvider": (()=>AISettingsProvider),
    "useAISettings": (()=>useAISettings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultSettings = {
    selectedProvider: 'gemini',
    selectedModel: 'gemini-pro-1.5',
    apiKeys: {
        gemini: '',
        openrouter: '',
        openai: '',
        anthropic: ''
    },
    connectionStatus: {
        gemini: false,
        openrouter: false,
        openai: false,
        anthropic: false,
        local: true
    }
};
const aiModels = [
    // Gemini Models
    {
        id: 'gemini-pro',
        name: 'Gemini Pro',
        description: 'Best for complex reasoning',
        provider: 'gemini'
    },
    {
        id: 'gemini-pro-1.5',
        name: 'Gemini Pro 1.5',
        description: 'Latest and most capable',
        provider: 'gemini'
    },
    {
        id: 'gemini-flash',
        name: 'Gemini Flash',
        description: 'Fast and efficient',
        provider: 'gemini'
    },
    // OpenRouter Models
    // OpenAI via OpenRouter
    {
        id: 'openai/gpt-4o',
        name: 'GPT-4o',
        description: 'Most capable OpenAI model',
        provider: 'openrouter'
    },
    {
        id: 'openai/gpt-4-turbo',
        name: 'GPT-4 Turbo',
        description: 'Fast and capable',
        provider: 'openrouter'
    },
    {
        id: 'openai/gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        description: 'Cost-effective option',
        provider: 'openrouter'
    },
    // Anthropic via OpenRouter
    {
        id: 'anthropic/claude-3.5-sonnet',
        name: 'Claude 3.5 Sonnet',
        description: 'Advanced reasoning',
        provider: 'openrouter'
    },
    {
        id: 'anthropic/claude-3-haiku',
        name: 'Claude 3 Haiku',
        description: 'Fast and lightweight',
        provider: 'openrouter'
    },
    {
        id: 'anthropic/claude-3-opus',
        name: 'Claude 3 Opus',
        description: 'Most powerful model',
        provider: 'openrouter'
    },
    // Google via OpenRouter
    {
        id: 'google/gemini-pro-1.5',
        name: 'Gemini Pro 1.5',
        description: 'Via OpenRouter',
        provider: 'openrouter'
    },
    {
        id: 'google/gemini-flash-1.5',
        name: 'Gemini Flash 1.5',
        description: 'Fast Google model',
        provider: 'openrouter'
    },
    // DeepSeek Models
    {
        id: 'deepseek/deepseek-chat',
        name: 'DeepSeek Chat',
        description: 'Advanced reasoning model',
        provider: 'openrouter'
    },
    {
        id: 'deepseek/deepseek-coder',
        name: 'DeepSeek Coder',
        description: 'Specialized for coding',
        provider: 'openrouter'
    },
    {
        id: 'deepseek/deepseek-r1',
        name: 'DeepSeek R1',
        description: 'Latest reasoning model',
        provider: 'openrouter'
    },
    // Qwen Models
    {
        id: 'qwen/qwen-2.5-72b',
        name: 'Qwen 2.5 72B',
        description: 'Large multilingual model',
        provider: 'openrouter'
    },
    {
        id: 'qwen/qwen-2.5-coder-32b',
        name: 'Qwen 2.5 Coder 32B',
        description: 'Code-specialized model',
        provider: 'openrouter'
    },
    {
        id: 'qwen/qwen-2-vl-72b',
        name: 'Qwen 2 VL 72B',
        description: 'Vision-language model',
        provider: 'openrouter'
    },
    // Llama Models
    {
        id: 'meta-llama/llama-3.1-405b',
        name: 'Llama 3.1 405B',
        description: 'Largest Llama model',
        provider: 'openrouter'
    },
    {
        id: 'meta-llama/llama-3.1-70b',
        name: 'Llama 3.1 70B',
        description: 'Balanced performance',
        provider: 'openrouter'
    },
    {
        id: 'meta-llama/llama-3.1-8b',
        name: 'Llama 3.1 8B',
        description: 'Efficient and fast',
        provider: 'openrouter'
    },
    {
        id: 'meta-llama/llama-3.2-90b-vision',
        name: 'Llama 3.2 90B Vision',
        description: 'Multimodal capabilities',
        provider: 'openrouter'
    },
    // Mistral Models
    {
        id: 'mistralai/mistral-large',
        name: 'Mistral Large',
        description: 'Most capable Mistral model',
        provider: 'openrouter'
    },
    {
        id: 'mistralai/mistral-medium',
        name: 'Mistral Medium',
        description: 'Balanced performance',
        provider: 'openrouter'
    },
    {
        id: 'mistralai/mistral-small',
        name: 'Mistral Small',
        description: 'Fast and efficient',
        provider: 'openrouter'
    },
    {
        id: 'mistralai/codestral',
        name: 'Codestral',
        description: 'Code generation specialist',
        provider: 'openrouter'
    },
    // Grok Models
    {
        id: 'x-ai/grok-beta',
        name: 'Grok Beta',
        description: 'X.AI\'s conversational model',
        provider: 'openrouter'
    },
    {
        id: 'x-ai/grok-vision-beta',
        name: 'Grok Vision Beta',
        description: 'Multimodal Grok model',
        provider: 'openrouter'
    },
    // Other Popular Models
    {
        id: 'cohere/command-r-plus',
        name: 'Command R+',
        description: 'Advanced reasoning and RAG',
        provider: 'openrouter'
    },
    {
        id: 'perplexity/llama-3.1-sonar-large',
        name: 'Sonar Large',
        description: 'Search-augmented model',
        provider: 'openrouter'
    },
    {
        id: 'nvidia/nemotron-4-340b',
        name: 'Nemotron 4 340B',
        description: 'NVIDIA\'s flagship model',
        provider: 'openrouter'
    },
    {
        id: 'databricks/dbrx-instruct',
        name: 'DBRX Instruct',
        description: 'Mixture of experts model',
        provider: 'openrouter'
    },
    {
        id: 'microsoft/wizardlm-2-8x22b',
        name: 'WizardLM 2 8x22B',
        description: 'Microsoft\'s advanced model',
        provider: 'openrouter'
    },
    // OpenAI Models (Direct)
    {
        id: 'gpt-4o',
        name: 'GPT-4o',
        description: 'Latest multimodal model',
        provider: 'openai'
    },
    {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        description: 'Fast and capable',
        provider: 'openai'
    },
    {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        description: 'Cost-effective option',
        provider: 'openai'
    },
    // Anthropic Models (Direct)
    {
        id: 'claude-3.5-sonnet',
        name: 'Claude 3.5 Sonnet',
        description: 'Most intelligent model',
        provider: 'anthropic'
    },
    {
        id: 'claude-3-haiku',
        name: 'Claude 3 Haiku',
        description: 'Fast and lightweight',
        provider: 'anthropic'
    },
    {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        description: 'Most powerful model',
        provider: 'anthropic'
    },
    // Local Models
    {
        id: 'llama-3.1-8b-local',
        name: 'Llama 3.1 8B',
        description: 'Local inference',
        provider: 'local'
    },
    {
        id: 'mistral-7b-local',
        name: 'Mistral 7B',
        description: 'Efficient local model',
        provider: 'local'
    },
    {
        id: 'qwen-2.5-7b-local',
        name: 'Qwen 2.5 7B',
        description: 'Multilingual local model',
        provider: 'local'
    },
    {
        id: 'deepseek-coder-6.7b-local',
        name: 'DeepSeek Coder 6.7B',
        description: 'Local coding model',
        provider: 'local'
    }
];
const AISettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AISettingsProvider({ children }) {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AISettingsProvider.useEffect": ()=>{
            const savedSettings = localStorage.getItem('devill-ai-settings');
            if (savedSettings) {
                try {
                    const parsed = JSON.parse(savedSettings);
                    setSettings({
                        ...defaultSettings,
                        ...parsed
                    });
                } catch (error) {
                    console.error('Failed to parse saved AI settings:', error);
                }
            }
        }
    }["AISettingsProvider.useEffect"], []);
    const updateSettings = (updates)=>{
        setSettings((prev)=>{
            const newSettings = {
                ...prev,
                ...updates
            };
            localStorage.setItem('devill-ai-settings', JSON.stringify(newSettings));
            return newSettings;
        });
    };
    const updateApiKey = (provider, key)=>{
        setSettings((prev)=>{
            const newSettings = {
                ...prev,
                apiKeys: {
                    ...prev.apiKeys,
                    [provider]: key
                }
            };
            localStorage.setItem('devill-ai-settings', JSON.stringify(newSettings));
            return newSettings;
        });
    };
    const getModelsForProvider = (provider)=>{
        return aiModels.filter((model)=>model.provider === provider);
    };
    const testConnection = async (provider)=>{
        // Simulate connection test
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        const hasApiKey = provider === 'local' || settings.apiKeys[provider]?.length > 0;
        const isConnected = hasApiKey && Math.random() > 0.3 // 70% success rate for demo
        ;
        setSettings((prev)=>({
                ...prev,
                connectionStatus: {
                    ...prev.connectionStatus,
                    [provider]: isConnected
                }
            }));
        return isConnected;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AISettingsContext.Provider, {
        value: {
            settings,
            updateSettings,
            updateApiKey,
            getModelsForProvider,
            testConnection
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ai-settings-context.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(AISettingsProvider, "ZGre7If7w4HenpmZpG3z+HIEEH4=");
_c = AISettingsProvider;
function useAISettings() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AISettingsContext);
    if (context === undefined) {
        throw new Error('useAISettings must be used within an AISettingsProvider');
    }
    return context;
}
_s1(useAISettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AISettingsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_fb1ed3a7._.js.map