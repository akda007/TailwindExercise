import { ReactNode } from "react";

export default function Button({children, onClick}: {children?: ReactNode, onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}) {

  return (
    <button className="border border-blue-500 border-1 bg-slate-50 rounded-md w-28 h-12 font-sans text-base hover:bg-slate-300 transition-all hover:scale-105" onClick={onClick}>
        {children}
    </button>
  )
} 

