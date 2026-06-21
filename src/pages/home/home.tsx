import showHome from '../../assets/show-pc-home.jpg';
import './home.css'
import '../../index.css'

export function Home (){
    return(
        <>
        {/* first Section  */}
            <section>
                <div>
                <h1>fefefe</h1>
                <p>fjfjvjvrj  vir i bvibvhj i vijfvjriov</p>
                <img src={showHome} alt="" id='show'/>
                
                <div>
                    <button>
                        Orça,emto grqtuito
                    </button>
                    <button>
                        entrar em contato 
                    </button>
                </div>
                </div>
            </section>

            {/* Second section */}
            <section>
                <h2>vendas</h2>
                <div className="divCards">
                    <div className="card">
                        <img src={showHome} alt="Imagem Principal " id='show' />
                        <h3>social midia</h3>
                        <p>hrhjigheruigfru eufgeuifgueigfeu euhfuiedshf ue uuesgfui guf ueg </p>
                    </div>

                    <div className="card">
                        <img src={showHome} alt="Imagem Principal " id='show' />
                        <h3>social midia</h3>
                        <p>hrhjigheruigfru eufgeuifgueigfeu euhfuiedshf ue uuesgfui guf ueg </p>
                    </div>

                    <div className="card">
                        <img src={showHome} alt="Imagem Principal " id='show' />
                        <h3>social midia</h3>
                        <p>hrhjigheruigfru eufgeuifgueigfeu euhfuiedshf ue uuesgfui guf ueg </p>
                    </div>

                    <div className="card">
                        <img src={showHome} alt="Imagem Principal " id='show' />
                        <h3>social midia</h3>
                        <p>hrhjigheruigfru eufgeuifgueigfeu euhfuiedshf ue uuesgfui guf ueg </p>
                    </div>

                    <div className="card">
                        <img src={showHome} alt="Imagem Principal " id='show' />
                        <h3>social midia</h3>
                        <p>hrhjigheruigfru eufgeuifgueigfeu euhfuiedshf ue uuesgfui guf ueg </p>
                    </div>
                </div>

                
            </section>
        </>
    );
}