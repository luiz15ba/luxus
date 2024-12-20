import { Img } from "@/types/Img";
import { useState } from "react";

type Props = {
    foto?: string;
    nome: string;
    descricao: string;
    idf: string | undefined;
    close: () => void;
    qtdvideos: number | undefined;
}

export const Modal = ({ foto = "https://thumbs.dreamstime.com/b/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg", nome, descricao, idf, close, qtdvideos }: Props) => {
    const images = [];
    const videos = [];
    let numeroVideos = 0;
    if (qtdvideos) {
        numeroVideos = qtdvideos;
    }

    for (let i = 0; i < numeroVideos; i++) {
        videos.push(
            <div key={i} className="w-full  max-h-96 flex justify-center items-center p-4 bg-blue-900/80 overflow-hidden">
                <video className="w-full h-full overflow-hidden" autoPlay loop muted>
                    <source src={`${idf}/${idf}v00${i + 1}.mp4`} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        )
    }
    for (let i = 1; i < 4; i++) {
        images.push(
            <div key={i} onClick={() => handleImg(idf, i)} className="w-40 h-28  overflow-hidden border-r-4 border-pink-300">
                <img className="" src={`${idf}/${idf}00${i + 1}.jpg`} />
            </div>
        )
    }

    const [img, setImg] = useState<Img | null>(null);

    const handleImg = (idf: string | undefined, id: number) => {
        setImg({ idf: idf, id: id });
        { console.log(idf, id) }
    }

    const handleClose = () => {
        setImg(null);
    }

    return (
        <div className="fixed inset-0 max-w-screen-2xl m-auto bg-black/50 flex flex-col overflow-y-scroll justify-center items-center">
            <button onClick={close} className="p-3 fixed top-2 right-2 rounded-md bg-red-600 text-white font-bold">X</button>
            <div className="w-11/12 h-11/12 bg-white rounded-md text-black">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-48 h-48 p-2 rounded-md overflow-hidden">
                        <img className="w-full h-full m-auto rounded-md object-cover object-center" src={foto} />
                    </div>
                    <p className="p-4 w-full bg-pink-300 text-white font-bold uppercase text-center">{nome}</p>
                </div>
                <div className="flex justify-between">
                    {images}
                </div>
                <div className="flex">
                    {videos}
                </div>

                <div className="w-full  p-2 border-t-2 bg-pink-300 text-white border-white">
                    <p className=" font-bold">{descricao}</p>
                </div>
                <div className="h-24 flex justify-center items-center">
                    <button className="p-3 rounded-md animate-bounce bg-pink-700 text-white font-bold">ME CONHEÇA MELHOR</button>
                </div>
            </div>
            {img &&
                <div className="fixed inset-0 max-w-screen-2xl m-auto bg-black/50 flex flex-col overflow-y-scroll justify-center items-center">
                    <button onClick={handleClose} className="p-3 absolute top-2 right-2 rounded-md bg-red-600 text-white font-bold">X</button>
                    <img className="w-11/12 h-11/12 m-auto rounded-md object-cover object-center" src={`${img.idf}/${img.idf}00${img.id + 1}.jpg`} />
                </div>
            }
        </div>
    )

}