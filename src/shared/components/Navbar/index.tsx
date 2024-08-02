export default function Navbar() {
    return (
        <>
            <div className="w-screen flex justify-between items-center p-2 bg-blue-900 text-white fixed top-0" style={{height: "10vh"}}>
                <div className="rounded-full border-gray-600 bg-white aspect-square w-16"></div>

                <div className="flex justify-end gap-8 items-center w-5/12">
                    <a className="p-3 m-0 border rounded-lg border-gray-500 border-1 hover:bg-blue-400" href="https://youtube.com">Youtube</a>
                    <a className="p-3 m-0 border rounded-lg border-gray-500 border-1 hover:bg-blue-400" href="https://google.com">Google</a>
                </div>

            </div>
        </>
    )
}