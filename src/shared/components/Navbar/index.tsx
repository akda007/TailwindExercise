import { Divider } from "./styles";

export default function Navbar() {
    return (
        <>
            <div className="w-screen flex justify-between items-center ps-5 bg-blue-900 text-white fixed top-0 z-30" style={{height: "60px"}}>
                <div className="rounded-full border-gray-600 bg-white aspect-square w-12"></div>

                <div className="flex justify-end items-center w-5/12 h-full">
                    <Divider/>
                    <a className="h-full aspect-square p-3 m-0 hover:bg-blue-400" href="https://youtube.com">
                        <img src="youtube.svg" alt="" />
                    </a>
                    <Divider/>
                    <a className="h-full aspect-square p-3 m-0 hover:bg-blue-400" href="https://google.com">
                        <img src="google.svg" alt="" />
                    </a>
                    <Divider/>
                </div>
            </div>
        </>
    )
}