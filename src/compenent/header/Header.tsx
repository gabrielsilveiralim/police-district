import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? 'border-b-2 border-[#00BFFF] pb-1 text-[#00BFFF] transition-all duration-300'
            : 'pb-1 text-[#BBC9CF] hover:text-[#00BFFF] transition-all duration-300';

    return (
        <header className='border-b border-white/10 bg-[#07111F]/97'>
            <div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:px-5 md:px-10'>
                <div className='flex items-center gap-3'>
                    <h1 className='text-2xl font-bold tracking-wide text-white'>
                        Logic<span className='text-[#00BFFF]'>MA</span>
                    </h1>
                </div>

                <nav className='hidden items-center gap-10 text-sm font-medium md:flex'>
                    <NavLink to='/' className={linkClass}>Home</NavLink>
                    <NavLink to='/occurrence' className={linkClass}>Ocorrência</NavLink>
                    <NavLink to='/dashboard' className={linkClass}>Dashboard</NavLink>
                    <NavLink to='/reports' className={linkClass}>Relatórios</NavLink>
                </nav>

                <button onClick={() => setMenuOpen(!menuOpen)} className='flex items-center justify-center text-white md:hidden'>
                    {menuOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className='border-t border-white/10 bg-[#07111F] md:hidden'>
                    <nav className='flex flex-col gap-6 px-3 py-3 text-sm font-medium'>
                        <NavLink to='/' className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink to='/occurrence' className={linkClass} onClick={() => setMenuOpen(false)}>Ocorrência</NavLink>
                        <NavLink to='/dashboard' className={linkClass} onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
                        <NavLink to='/reports' className={linkClass} onClick={() => setMenuOpen(false)}>Relatórios</NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
}