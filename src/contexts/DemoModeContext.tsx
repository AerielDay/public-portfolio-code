import React, { createContext, useContext, useState } from 'react';

type DemoCtx = { isDemo: boolean; setIsDemo: (v: boolean) => void };
const DemoModeContext = createContext<DemoCtx | undefined>(undefined);

export const DemoModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDemo, setIsDemo] = useState<boolean>(false);

    return (
        <DemoModeContext.Provider value={{ isDemo, setIsDemo }}>
            {children}
        </DemoModeContext.Provider>
    );
};

export const useDemoMode = () => {
    const ctx = useContext(DemoModeContext);
    if (!ctx) throw new Error('useDemoMode must be used within DemoModeProvider');
    return ctx;
};
