import { useNavigate } from "react-router-dom";

export default function Home(){
    function bukaProfil(){
        Navigate("/profil");
    }
    return (
    <div id="home" class="home-screen">
    <h1>🌸 Selamat Datang 🌸</h1>
    <p>Ini adalah portofolio setelah modifikasi</p>
    <button onclick="bukaProfil()">About me</button>

  </div>
    );

}