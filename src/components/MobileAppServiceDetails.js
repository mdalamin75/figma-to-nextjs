import React from "react";
import { CircleCheckBig, Play } from "lucide-react";

const GooglePlaySVG = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F5F7FA" />
        <g>
            <polygon points="12,8 32,20 12,32" fill="#34A853" />
            <polygon points="12,8 20,20 12,32" fill="#4285F4" />
            <polygon points="20,20 32,20 12,32" fill="#FBBC05" />
            <polygon points="12,8 32,20 20,20" fill="#EA4335" />
        </g>
    </svg>
);

const AppStoreSVG = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F5F7FA" />
        <g>
            <circle cx="20" cy="20" r="12" fill="#BFC9D1" />
            <rect x="16" y="12" width="8" height="16" rx="4" fill="#fff" />
        </g>
    </svg>
);

const AppGallerySVG = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#F5F7FA" />
        <g>
            <rect x="10" y="14" width="20" height="12" rx="6" fill="#D32F2F" />
            <text x="20" y="25" textAnchor="middle" fill="#fff" fontSize="8" fontFamily="Arial">HUAWEI</text>
        </g>
    </svg>
);

const stores = [
    {
        icon: <GooglePlaySVG />,
        label: "Google Play",
    },
    {
        icon: <AppStoreSVG />,
        label: "App Store",
    },
    {
        icon: <AppGallerySVG />,
        label: "App Gallery",
    },
];

const steps = [
    {
        title: "Design",
        subtitle: "Clar intuitiv",
    },
    {
        title: "Code",
        subtitle: "Scalabil curat",
    },
    {
        title: "Test",
        subtitle: "Rapid eficient",
    },
];

const ArrowSVG = () => (
    <svg width="18" height="18" fill="none" stroke="#BFC9D1" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
);

export default function MobileAppServiceDetails() {
    return (
        <div className="space-y-4">
            {/* Personalizat pentru afacerea ta */}
            <div className="flex items-center gap-2 text-blue-500 text-base font-medium mb-3">
                <CircleCheckBig className="w-4 h-4 text-blue-500" />
                <span className="text-gray-500 text-base">Personalizat pentru afacerea ta</span>
            </div>
            {/* Publicare garantată în: */}
            <div className="flex items-center gap-2 text-blue-500 text-base font-medium mb-2 mt-2">
                <CircleCheckBig className="w-4 h-4 text-blue-500" />
                <span className="text-gray-500 text-base">Publicare garantată în:</span>
            </div>
            <div className="flex gap-4 mb-2 ms-4">
                {stores.map((store, idx) => (
                    <div key={idx} className="flex flex-col items-center px-1 py-1 rounded-xl border border-gray-300 bg-[#F5F7FA] shadow-sm min-w-[90px]">
                        {store.icon}
                        <span className="text-xs font-light text-gray-700">{store.label}</span>
                    </div>
                ))}
            </div>
            {/* Proces optimizat, cap-coadă */}
            <div className="flex items-center gap-2 text-blue-500 text-base font-medium mt-4 mb-2">
                <CircleCheckBig className="w-4 h-4 text-blue-500" />
                <span className="text-gray-500 text-base">Proces optimizat, cap-coadă</span>
            </div>
            <div className="flex gap-4 ms-4">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-start px-4 py-2 rounded-xl border border-gray-100 bg-white shadow-sm min-w-[100px]">
                        <div className="flex  items-center gap-2">
                            <div className="flex flex-col">
                                <span className="font-bold text-sm text-gray-800">{step.title}</span>
                                <span className="text-xs text-gray-400 font-medium mt-1">{step.subtitle}</span>
                            </div>
                            <Play className="text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 