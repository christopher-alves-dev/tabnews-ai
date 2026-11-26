import Confetti from "./confetti";

async function getTotalConteudos() {
  try {
    const res = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
      { next: { revalidate: 60 } },
    );
    const total = Number(res.headers.get("x-pagination-total-rows"));
    return res.ok && total > 0 ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await getTotalConteudos();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Confetti />
      <h1>Em Construção</h1>
      <p style={{ maxWidth: "40rem", fontSize: "1.25rem" }}>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto
      </p>
      {total ? (
        <p>
          Total de conteúdos publicados no TabNews:{" "}
          <strong>{total.toLocaleString("pt-BR")}</strong>
        </p>
      ) : null}
      <a href="https://www.tabnews.com.br">Acesse o TabNews oficial</a>
    </main>
  );
}
