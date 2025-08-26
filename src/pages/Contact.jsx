export default function Contact() {
  return (
    <section id="contact" style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ayo berkenalan lebih jauh</h1>
      <p style={{ marginBottom: "20px" }}>
        Isi formulir di bawah untuk Mutualan ✨
      </p>

  
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Pesanmu sudah terkirim!");
        }}
        style={{
          maxWidth: "450px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          textAlign: "left",
        }}
      >
        <label>
          Nama:
          <input
            type="text"
            name="name"
            required
            placeholder="Masukkan nama kamu"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>

        <label>
          Instagram:
          <input
            type="Instagram"
            name="Instagram"
            required
            placeholder="Masukkan username kamu"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>
        <label>
          TikTok:
          <input
            type="TikTok"
            name="TikTok"
            required
            placeholder="Masukkan username kamu"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </label>


        <label>
          Pesan:
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Tulis pesanmu di sini..."
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          ></textarea>
        </label>

        <button
          type="submit"
          style={{
            background: "#ff80ab",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Kirim Pesan
        </button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <h2>Sosial Media 🌸</h2>
        <p>
          <a
            href="https://instagram.com/hlwaasj"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#e1306c", textDecoration: "none", fontWeight: "bold" }}
          >
            Instagram: @hlwaasj
          </a>
        </p>
        <p>
        <a href="https://www.tiktok.com/@_hilwana" 
        arget="_blank"
            rel="noreferrer"
        style={{ color: "#e1306c", textDecoration: "none", fontWeight: "bold" }}
        >
            TikTok: @_hilwana
        </a>
        </p>
        
      </div>
    </section>
  );
}
