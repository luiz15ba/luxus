'use client'
import { Modal } from "@/components/Modal";
import { Previa } from "@/components/Previa";
import { Garota } from "@/types/Garota";
import { useState } from "react";

const Page = () => {
  const [garotas, setGarotas] = useState<Garota[]>([
    {foto:'n/n001.jpg',nome:'Nicolly', descricao:'15 anos, Apaixonada por Loucuras...', identificador: 'n', qtdvideos: 1 },
    {foto:'l/l001.jpg',nome:'Luiz H.', descricao:'Gosto do desconhecido', identificador:'l'},
    {nome:'Paula', descricao:'Descrição Generica...' },
    {nome:'Carla', descricao:'Descrição Generica...' },
  ])

  const [garotaAtual, setGarotaAtual] = useState<Garota | null>(null);
  const [modal, setModal] = useState(false);

  const handleModal = (item: Garota) => {
    setGarotaAtual(item)
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
    setGarotaAtual(null)
  }

  return (
    <div className="w-screen m-auto bg-[#1b1b1b] text-black max-w-screen-2xl">
      <div className="w-full h-32 flex justify-center">
        <img  className="w-32" src="luxus.png" />
      </div>

      <div className="bg-pink-300 animate-pulse mb-2">
        <h1 className="text-bold font-bold text-pink-800 uppercase text-center">Sua diversão esta aqui!!</h1>
      </div>
      <div className="bg-violet-300 mb-11">
        <p className="text-bold font-bold text-blue-800 uppercase pl-2">Seja feliz fazendo novos contatos...</p>
      </div>
      {garotas.map(item => (
        <div key={item.nome} onClick={() => handleModal(item)}>
          <Previa foto={item.foto} nome={item.nome} descricao={item.descricao}
          />
        </div>
      ))}
      {modal && garotaAtual && (
        <Modal 
          foto={garotaAtual.foto} 
          nome={garotaAtual.nome} 
          descricao={garotaAtual.descricao}
          idf={garotaAtual.identificador}
          close={handleCloseModal}
          qtdvideos={garotaAtual.qtdvideos}
        />
      )}
    </div>
  )
}

export default Page;