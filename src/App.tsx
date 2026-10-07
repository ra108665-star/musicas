import { useState } from "react";
import "./App.css";

function App() {
  const [musicaAtual, setMusicaAtual] = useState("Blinding Lights");

  const musicas = [
    {
      nome: "Blinding Lights",
      artista: "The Weeknd",
      imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    },
    {
      nome: "As It Was",
      artista: "Harry Styles",
      imagem: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500",
    },
    {
      nome: "Flowers",
      artista: "Miley Cyrus",
      imagem: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500",
    },
    {
      nome: "Levitating",
      artista: "Dua Lipa",
      imagem: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500",
    },
  ];

  const artistas = [
    {
      nome: "The Weeknd",
      imagem: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300",
    },
    {
      nome: "Dua Lipa",
      imagem: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    },
    {
      nome: "Harry Styles",
      imagem: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    },
    {
      nome: "Miley Cyrus",
      imagem: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300",
    },
  ];

  function escolherMusica(nome: string) {
    setMusicaAtual(nome);
  }

  return (
    <div className="site">

      {/* MENU LATERAL */}
      <aside className="sidebar">
        <h1 className="logo">♫ MusicWave</h1>

        <nav>
          <p className="menu-titulo">MENU</p>

          <button className="menu-item ativo">
            🏠 Início
          </button>

          <button className="menu-item">
            🔎 Explorar
          </button>

          <button className="menu-item">
            ❤️ Favoritos
          </button>

          <button className="menu-item">
            📚 Biblioteca
          </button>
        </nav>

        <div className="playlist">
          <p className="menu-titulo">MINHAS PLAYLISTS</p>

          <p>🎵 Minhas músicas</p>
          <p>🌙 Para relaxar</p>
          <p>🔥 Treino</p>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="conteudo">

        {/* TOPO */}
        <header className="topo">
          <div>
            <h2>Olá, ouvinte! 👋</h2>
            <p>O que você quer ouvir hoje?</p>
          </div>

          <input
            className="pesquisa"
            type="text"
            placeholder="🔎 Procurar músicas..."
          />
        </header>

        {/* DESTAQUE */}
        <section className="destaque">
          <div>
            <p className="pequeno">MÚSICA EM DESTAQUE</p>
            <h2>Blinding Lights</h2>
            <h3>The Weeknd</h3>

            <button
              className="botao-play"
              onClick={() => escolherMusica("Blinding Lights")}
            >
              ▶ Ouvir agora
            </button>
          </div>

          <div className="disco">
            🎵
          </div>
        </section>

        {/* MÚSICAS POPULARES */}
        <section className="secao">
          <div className="titulo-secao">
            <h2>Músicas populares</h2>
            <span>Ver todas</span>
          </div>

          <div className="musicas">

            {musicas.map((musica) => (
              <div
                className="card-musica"
                key={musica.nome}
                onClick={() => escolherMusica(musica.nome)}
              >
                <div className="imagem-musica">
                  <img src={musica.imagem} alt={musica.nome} />

                  <button className="play-card">
                    ▶
                  </button>
                </div>

                <h3>{musica.nome}</h3>
                <p>{musica.artista}</p>
              </div>
            ))}

          </div>
        </section>

        {/* ARTISTAS */}
        <section className="secao">
          <div className="titulo-secao">
            <h2>Artistas populares</h2>
            <span>Ver todos</span>
          </div>

          <div className="artistas">

            {artistas.map((artista) => (
              <div className="card-artista" key={artista.nome}>
                <img src={artista.imagem} alt={artista.nome} />
                <h3>{artista.nome}</h3>
                <p>Artista</p>
              </div>
            ))}

          </div>
        </section>

      </main>

      {/* PLAYER */}
      <footer className="player">

        <div className="musica-player">
          <div className="mini-capa">
            🎵
          </div>

          <div>
            <strong>{musicaAtual}</strong>
            <p>The Weeknd</p>
          </div>
        </div>

        <div className="controles">
          <button>⏮</button>

          <button className="play-principal">
            ▶
          </button>

          <button>⏭</button>
        </div>

        <div className="volume">
          🔊
          <input type="range" min="0" max="100" defaultValue="70" />
        </div>

      </footer>

    </div>
  );
}

export default App;