"use client";

import dynamic from "next/dynamic";

// Carregado só no navegador, fora do bundle inicial. Sem SSR, o
// react-confetti já usa o tamanho da janela como padrão.
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confetti() {
  return <ReactConfetti recycle={false} />;
}
