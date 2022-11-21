import React from "react";

export default function Post(props) {
    const [iconeSalvarPost, setIconeSalvarPost] = React.useState("bookmark-outline");
    const [iconeCurtirPost, setIconeCurtirPost] = React.useState("heart-outline");
    const [outrasCurtidas, setOutrasCurtidas] = React.useState(props.demaisCurtidas);
    const [numClicks, setNumClicks] = React.useState(0);
    const [startDate, setStartDate] = React.useState(Date.now());
    const [iconeCurtiuImg,setIconeCurtiuImg] = React.useState("");

    function salvarPost() {
        if (iconeSalvarPost === "bookmark-outline") {
            setIconeSalvarPost("bookmark");
        } else {
            setIconeSalvarPost("bookmark-outline");
        }
    }

    function curtirPost() {
        if (iconeCurtirPost === "heart-outline") {
            setIconeCurtirPost("heart");
            const acrescentaCurtida = (Number(outrasCurtidas.replace(".", "")) + 1).toLocaleString("pt-BR");
            setOutrasCurtidas(acrescentaCurtida);
        } else {
            setIconeCurtirPost("heart-outline");
            const diminuiCurtida = (Number(outrasCurtidas.replace(".", "")) - 1).toLocaleString("pt-BR");
            setOutrasCurtidas(diminuiCurtida);
        }
    }

    function curtirPostImg() {
        if (numClicks >= 1 && Date.now() - startDate < 500) {
            setStartDate(Date.now());
            setNumClicks(0);
            if (iconeCurtirPost === "heart-outline") {
                setIconeCurtirPost("heart");
                const acrescentaCurtida = (Number(outrasCurtidas.replace(".", "")) + 1).toLocaleString("pt-BR");
                setOutrasCurtidas(acrescentaCurtida);
            }
            setIconeCurtiuImg("curtiu-img");
            setTimeout(() => setIconeCurtiuImg(""),500);
        } else {
            setStartDate(Date.now());
            setNumClicks(numClicks + 1);
        }
    }

    return (
        <div data-test="post" className="post">
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
                <img data-test="post-image" src={props.imgPost} onClick={curtirPostImg} />
                <div className={iconeCurtiuImg}><ion-icon name="heart"></ion-icon></div>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon data-test="like-post" name={iconeCurtirPost} onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" name={iconeSalvarPost} onClick={salvarPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgPCurtida} />
                    <div className="texto">
                        Curtido por <strong>{props.pCurtida}</strong> e <strong>outras <span data-test="likes-number">{outrasCurtidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}