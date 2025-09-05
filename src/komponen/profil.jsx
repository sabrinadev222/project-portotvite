import DarkToggle from "./DarkToggle";

export default function Profil() {
  return (
    <div id="content" className="profil-page">
      <header>
        <h1>Hai, Aku Hilwana!</h1>
        <p className="tagline">Ini adalah biodataku ✨</p>
      </header>

      <DarkToggle />

      <div className="container">
        <section className="profil">
          <img src="/foto1.jpeg" alt="Foto Hilwana" className="hover-img" />
          <ul>
            <li><strong>Nama Lengkap:</strong> Sabrina Vivia Hilwana Riyadi</li>
            <li><strong>Nama Panggilan:</strong> Hilwa</li>
            <li><strong>Kelas:</strong> XI RPL C</li>
            <li><strong>Tanggal Lahir:</strong> 20 April 2009</li>
            <li><strong>Warna Favorit:</strong> Biru & Pink</li>
            <li><strong>Hobi:</strong> Menulis, Mendengarkan Musik</li>
            <li><strong>Alamat:</strong> Mangliawan, Malang, Jawa Timur, Indonesia</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
