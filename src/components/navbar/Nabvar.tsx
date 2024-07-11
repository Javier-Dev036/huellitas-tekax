import logo from '/src/assets/image/huellitas-logo.svg'
import light_mode from '/src/assets/icons/light-mode.svg'

function Nabvar() {
    return (
        <div className="navbar bg-white">
            <div className="flex-1">
                <img className='w-12 h-12 ' src={logo} alt="logo" />
            </div>
            <div className='mx-3'>
                <form className="max-w-md mx-auto w-96">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-yellow-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full py-2 ps-10 text-gray-900 border text-lg border-yellow-800 rounded-lg bg-gray-50 focus:border-yellow-800" placeholder="Buscar mascota" required />
                        <button type="submit" className="text-white absolute end-2 top-1/2 transform -translate-y-1/2 bg-yellow-700 hover:bg-yellow-800 font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
                    </div>
                </form>
            </div>
            <div className='space-x-4 mx-3'>
                <a href="" className='text-yellow-800 hover:text-yellow-950 font-semibold text-lg'>Inicio</a>
                <a href="" className='text-yellow-800 hover:text-yellow-950 font-semibold text-lg'>Adoptar</a>
                <a href="" className='text-yellow-800 hover:text-yellow-950 font-semibold text-lg'>Categorias</a>
                <a href="" className='text-yellow-800 hover:text-yellow-950 font-semibold text-lg'>Publicar</a>
            </div>
            <div className="flex-none">
                <div className='dropdown dropdown-end'>
                    <div className='btn btn-ghost btn-circle'>
                        <img className='w-6 h-6' role='button' src={light_mode} alt="" />
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Perfil
                            </a>
                        </li>
                        <li><a>Configuraciones</a></li>
                        <li><a>Cerrar sesion</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nabvar