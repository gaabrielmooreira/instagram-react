
const arrSugestoes = [
    {
        imgUsuario: "assets/img/bad.vibes.memes.svg",
        nomeUsuario: "bad.vibes.memes",
        razao: "Segue você"
    },
    {
        imgUsuario: "assets/img/chibirdart.svg",
        nomeUsuario: "chibirdart",
        razao: "Segue você"
    },
    {
        imgUsuario: "assets/img/razoesparaacreditar.svg",
        nomeUsuario: "razoesparaacreditar",
        razao: "Novo no Instagram"
    },
    {
        imgUsuario: "assets/img/adorable_animals.svg",
        nomeUsuario: "adorable_animals",
        razao: "Segue você"
    },
    {
        imgUsuario: "assets/img/smallcutecats.svg",
        nomeUsuario: "smallcutecats",
        razao: "Segue você"
    }
]

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {arrSugestoes.map((s) => <Sugestao key={s.nomeUsuario} imgUsuario={s.imgUsuario} nomeUsuario={s.nomeUsuario} razao={s.razao} />)}
        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imgUsuario} />
                <div className="texto">
                    <div className="nome">{props.nomeUsuario}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}