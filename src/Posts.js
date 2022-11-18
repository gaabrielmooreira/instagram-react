const arrPosts = [
    {
        imgUsuario: "assets/img/meowed.svg",
        usuario: "meowed",
        imgPost: "assets/img/gato-telefone.svg",
        imgPCurtida: "assets/img/respondeai.svg",
        pCurtida: "respondeai",
        demaisCurtidas: "outras 101.523 pessoas"
    },
    {
        imgUsuario: "assets/img/barked.svg",
        usuario: "barked",
        imgPost: "assets/img/dog.svg",
        imgPCurtida: "assets/img/adorable_animals.svg",
        pCurtida: "adorable_animals",
        demaisCurtidas: "outras 99.159 pessoas"
    }
]
export default function Posts() {
    return (
        <div class="posts">
            {arrPosts.map((p) => (
                <Post
                    imgUsuario={p.imgUsuario}
                    usuario={p.usuario}
                    imgPost={p.imgPost}
                    imgPCurtida={p.imgPCurtida}
                    pCurtida={p.pCurtida}
                    demaisCurtidas={p.demaisCurtidas}
                />
            ))}
        </div>
    )
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgPCurtida} />
                    <div class="texto">
                        Curtido por <strong>{props.pCurtida}</strong> e <strong>{props.demaisCurtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}