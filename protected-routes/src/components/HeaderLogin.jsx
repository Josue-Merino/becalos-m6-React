import Xlogo from "../icons/Xlogo";

function HeaderLogin () {
    return (
        <header className="flex flex-col items-center justify-center mt-10">
            <Xlogo width={150} height={150}/>
            <h1 className="text-5xl text-center font-bold">Lo que está pasando ahora.</h1>
        </header>
    )
}

export default HeaderLogin