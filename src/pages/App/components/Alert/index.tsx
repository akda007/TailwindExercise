import { ReactNode, useEffect, useState } from "react";

export default function Alert({children, open, setOpen, timeout}: {children?: ReactNode, open: boolean, setOpen: (value: boolean) => void, timeout: number}) {
    const [timeMs, setTimeMs] = useState(0);

    const getPercent = (timeoutSec: number, currentMs: number) => {
        const timeoutMs = timeoutSec * 1000;
        const percent = (timeoutMs - currentMs) / timeoutMs * 100;
        
        return percent < 0 ? 0 : percent;
    }

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setTimeMs(timeMs + 1);
        }, 1);

        return () => clearTimeout(intervalId);
    }, [timeMs])

    const percent = getPercent(timeout, timeMs);

    if (percent == 0) {
        setOpen(false)
    }

    return (
        <>
            {open && (
                <div className={`
                    w-64
                    h-20
                    bg-red-700
                    fixed
                    mx-auto
                    top-5
                    left-0
                    right-0
                    z-10
                    rounded-3xl
                    flex
                    justify-start
                    items-center
                    text-white
                    p-5
                `}>
                    <button className="absolute top-2 right-3" onClick={() => setOpen(false)}>X</button>

                    {children}

                    <div className="absolute bottom-2 left-0 right-0 mx-auto" style={{width: "80%"}}>
                        <div className="h-1 bg-white" style={{width: `${percent}%`}}></div>
                    </div>
                </div>
            )}
        </>
    )
}
