export default function Card({text}: {text: string}) {
    return (
        <>
            <div className="w-60 rounded-lg bg-slate-50 p-4 flex flex-col transition-all hover:scale-110 hover:z-10" style={{height: "400px"}}>
                {text}
            </div>
        </>
    )
}