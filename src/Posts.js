import Post from "./Post"

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
