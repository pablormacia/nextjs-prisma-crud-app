import Link from "next/link";
const NotFound = () => {

    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
                <h1>Not found</h1>
                <Link className="text-slate-400" href="/">Volver</Link>
            </div>
        </section>
    );
}

export default NotFound;