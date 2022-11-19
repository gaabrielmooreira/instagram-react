import React from "react";

export default function Posts() {
    const arrPosts = [
        {
            imgUsuario: "assets/img/meowed.svg",
            usuario: "meowed",
            imgPost: "assets/img/gato-telefone.svg",
            imgPCurtida: "assets/img/respondeai.svg",
            pCurtida: "respondeai",
            demaisCurtidas: "101.523"
        },
        {
            imgUsuario: "assets/img/barked.svg",
            usuario: "barked",
            imgPost: "assets/img/dog.svg",
            imgPCurtida: "assets/img/adorable_animals.svg",
            pCurtida: "adorable_animals",
            demaisCurtidas: "99.159"
        }
    ]
    return (
        <div className="posts">
            {arrPosts.map((p) => (
                <Post key={p.imgPost} imgUsuario={p.imgUsuario} usuario={p.usuario}
                    imgPost={p.imgPost} imgPCurtida={p.imgPCurtida}
                    pCurtida={p.pCurtida} demaisCurtidas={p.demaisCurtidas} />
            ))}
        </div>
    )
}

function Post(props) {
    const [iconeSalvarPost, setIconeSalvarPost] = React.useState("bookmark-outline");
    const [iconeCurtirPost, setIconeCurtirPost] = React.useState("heart-outline");
    const [outrasCurtidas, setOutrasCurtidas] = React.useState(props.demaisCurtidas);
    function salvarPost() {
        setIconeSalvarPost("bookmark");
    }

    function curtirPost() {
        if (iconeCurtirPost === "heart-outline") {
            setIconeCurtirPost("heart");
            const acrescentaCurtida = (Number( outrasCurtidas.replace(".","") ) + 1).toLocaleString("pt-BR");
            setOutrasCurtidas(acrescentaCurtida);
        } else {
            setIconeCurtirPost("heart-outline");
            const diminuiCurtida = (Number( outrasCurtidas.replace(".","") ) - 1).toLocaleString("pt-BR");
            setOutrasCurtidas(diminuiCurtida);
        }
    }

    function curtirPostImg() {
        if (iconeCurtirPost === "heart-outline") {
            setIconeCurtirPost("heart");
            const acrescentaCurtida = (Number( outrasCurtidas.replace(".","") ) + 1).toLocaleString("pt-BR");
            setOutrasCurtidas(acrescentaCurtida);
        }
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsuario} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imgPost} onClick={curtirPostImg} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={iconeCurtirPost} onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={iconeSalvarPost} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgPCurtida} />
                    <div className="texto">
                        Curtido por <strong>{props.pCurtida}</strong> e <strong>outras {outrasCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}