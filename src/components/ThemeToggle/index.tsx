"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

    useEffect(() => {
        // Garantir que useTheme só é chamado após montagem
        setMounted(true);

        // Carregar tema salvo
        const savedTheme = (localStorage.getItem("theme") || "system") as "light" | "dark" | "system";
        setTheme(savedTheme);
    }, []);

    const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        const html = document.documentElement;

        if (newTheme === "system") {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDark) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        } else if (newTheme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    };

    if (!mounted) return null;

    const themes: Array<{ value: "light" | "dark" | "system"; label: string; icon: typeof Sun }> = [
        { value: "light", label: "Claro", icon: Sun },
        { value: "dark", label: "Escuro", icon: Moon },
        { value: "system", label: "Sistema", icon: Monitor },
    ];

    return (
        <div className="flex flex-col sm:flex-row gap-0.5 p-0.5 bg-slate-300 dark:bg-slate-700 border border-slate-400 dark:border-slate-600 rounded-lg">
            {themes.map(({ value, label, icon: Icon }) => (
                <button
                    key={value}
                    onClick={() => handleThemeChange(value)}
                    className={`
                        p-1 sm:p-1.5 rounded-md transition-all duration-200 flex items-center justify-center
                        ${theme === value
                            ? theme === "light"
                                ? "bg-blue-400 text-white shadow-lg"
                                : "bg-blue-600 dark:bg-blue-700 text-white shadow-lg"
                            : theme === "light"
                                ? "text-slate-600 hover:text-slate-700 hover:bg-slate-200"
                                : "text-slate-400 hover:text-slate-300 hover:bg-slate-700/50"
                        }
                    `}
                    title={label}
                >
                    <Icon size={14} className="sm:size-4" />
                </button>
            ))}
        </div>
    );
}
