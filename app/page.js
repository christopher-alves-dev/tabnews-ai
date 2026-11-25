const nomes = ["Christopher", "Susan", "Aline", "Pedro"];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {nomes.map((nome) => (
        <p key={nome} style={{ margin: "0.5rem 0", fontSize: "2rem" }}>
          {nome.toUpperCase()}
        </p>
      ))}
    </main>
  );
}
