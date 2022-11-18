const destaqueUsuario = {
    imgUsuario: "assets/img/catanacomics.svg",
    nomeUsuario: "catanacomics",
    apelido: "Catana"
}
export default function Usuario() {
    return (
        <UsuarioAcimaDasSugestoes imgUsuario={destaqueUsuario.imgUsuario} 
        nomeUsuario={destaqueUsuario.nomeUsuario} apelido={destaqueUsuario.apelido}/>
    )
}

function UsuarioAcimaDasSugestoes(props) {
    return (
        <div class="usuario">
            <img src={props.imgUsuario} />
            <div class="texto">
                <strong>{props.nomeUsuario}</strong>
                <span>
                    {props.apelido}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}