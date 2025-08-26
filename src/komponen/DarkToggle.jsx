export default function DarkToggle() {
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark");
  }

  return (
    <div className="theme-toggle-wrapper">
      <button className="dark-toggle" onClick={toggleDarkMode}>
        🌙
      </button>
    </div>
  );
}
