import './header.css'

export function Header() {
    return (
        <>
        <header className='navbar' id='navbar'>
            <div className='navbar_inner'>
                <a href="#" className='navbar_logo'>
                    <span className='navbar_logo-dot'>
                        {/* logo do site */}
                    </span>
                    PULSE
                </a>
            

            <nav className='navbar_nav' id='navbar_nav'>
                <a href="#" className='navbar_link'>Inicio</a>
                <a href="#" className='navbar_link'>Categorias</a>
                <a href="#" className='navbar_link'>Em alta</a>
                <a href="#" className='navbar_link'>Sobre</a>
            </nav>

            <div className='navbar_actions'>
                <button type='button' className='btn btn--ghost'>Entrar</button>
                <button type='button' className='btn btn--solid'>Crie um Evento</button>
            </div>

            <button className='navbar_burger' id='navbar-burger' aria-label='Abrir menu' aria-expanded='false'>
                <span></span><span></span><span></span>
            </button>
            </div>
        </header>
        
        </>
    );
}