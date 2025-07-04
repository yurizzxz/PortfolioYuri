// components/modal-content.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ModalContentProps {
  projectId:  string;
  projectData: {
    titulo: string;
    descricao: string;
    imagemUrl?: string;
    stack: string;
    linguagem1?: string;
    linguagem2?: string;
    linguagem3?: string;
    linguagem4?: string;
    link: string;
  };
  onClose: () => void;
}

const ModalContent = ({ projectData, onClose }: ModalContentProps) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
      onClick={onClose}
    >
      <div
        className="bg-cardcolor p-6 rounded-lg shadow-lg w-full max-w-xl"
        style={{ border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-[1.7rem] font-semibold">Visualizar Projeto</h2>
          <button className="text-xl" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="flex flex-col justify-center pb-4">
          <div className="mb-7 max-w-xl">
            <Image
              src={projectData.imagemUrl || ""}
              alt={projectData.titulo}
              className="image-card w-full h-auto"
              width={510}
              height={0}
              loading="lazy"
            />
          </div>
          <div className="mb-5">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-2xl font-bold mb-2">{projectData.titulo}</h3>
              <Link href={projectData.link} rel="noopener noreferrer" target="_blank">
                <i className="devicon-github-original text-2xl"></i>
              </Link>
            </div>
            <p className="text-md mt-2">{projectData.descricao}</p>
          </div>
          <hr className="opacity-5" />
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-xl font-semibold">Linguagens Utilizadas</p>
            <div className="flex flex-row gap-2">
              {projectData.linguagem1 && (
                <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                  {projectData.linguagem1}
                </p>
              )}
              {projectData.linguagem2 && (
                <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                  {projectData.linguagem2}
                </p>
              )}
              {projectData.linguagem3 && (
                <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                  {projectData.linguagem3}
                </p>
              )}
              {projectData.linguagem4 && (
                <p className="linguagens bg-[var(--border)] w-fit px-2.5 rounded-lg py-1.5 flex flex-row text-md">
                  {projectData.linguagem4}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
