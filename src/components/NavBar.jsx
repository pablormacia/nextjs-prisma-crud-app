import Link from "next/link";
const NavBar = () => {
    return (
        <nav className="bg-slate-900" >
            <div className="container mx-auto flex justify-between items-center">
            <h3 className="font bold text-2xl">Next Js Prisma Crud App</h3>
            <ul className="flex gap-4 text-lg ">
                <li><Link className="text-slate-300 hover:text-slate-200" href="/">Tareas</Link></li>
                <li><Link className="text-slate-300 hover:text-slate-200" href="/new">Nueva</Link></li>
                <li><Link  className="text-slate-300 hover:text-slate-200" href="/about">Acerca de</Link></li>
            </ul>
            </div>
        </nav>
    );
}

export default NavBar;