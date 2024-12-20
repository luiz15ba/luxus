type Props = {
    foto?: string;
    nome: string;
    descricao: string;
}

export const Previa = ({ foto = "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg", nome, descricao }: Props) => {
    return (
        <div className="mt-6">
            <div className="w-11/12 p-2 m-auto rounded-md bg-pink-300">
                <div className="w-full flex justify-center">
                    <div className="w-32 h-32 p-2 rounded-full overflow-hidden bg-pink-800">
                        <img className="w-full h-full m-auto rounded-full object-cover object-center" src={foto} />
                    </div>
                </div>

                <div className="mt-3 flex justify-center m-2">
                    <p className="w-1/2 rounded-md bg-pink-900 text-white font-bold text-center">{nome}</p>
                </div>
                <div className="w-full rounded-md bg-white p-2">
                    <p className=" truncate text-black font-bold text-center">{descricao}</p>
                </div>
            </div>
        </div>
    )
}