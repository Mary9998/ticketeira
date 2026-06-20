import './header.css'

export function Header() {
    return (
        <header>
            <div>
                {/*minha logo*/}
                <h1>Minha Ticketeira</h1>
            </div>

            <nav>
                <ul>
                    <li> <a href="#">Eventos</a></li>
                    <li><a href="#">Meus Ingressos</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>

            
        </header>
    );
}