import React, { useState } from 'react'; // React ve useState hook'u projeye dahil edilir.
import './App.css'; // CSS dosyası import ettik
import 'animate.css'; // Animate.css kütüphanesi animasyon dahil ettik

function App() {

  // Geçerli zamanı alır ve time değişkenine atar.
  let time = new Date().toLocaleTimeString();

  // useState hook'u ile currentTime adlı bir state değişkeni tanımlanır.
  // Başlangıç değeri olarak yukarıda alınan zaman atanır.
  const [currentTime, setCurrentTime] = useState(time);
  
  // Time fonksiyonu: Geçerli zamanı tekrar alır ve currentTime state'ini günceller.
  function Time() {
    let time = new Date().toLocaleTimeString(); // Yeni zaman alınır.
    setCurrentTime(time); // State güncellenir.
  }

  // Time fonksiyonunu her 1 saniyede bir çalıştırır.
  setInterval(Time, 1000);

  return (
    <div className="App"> {/* Ana uygulama container'ı */}
      {/* Geçerli zamanı gösteren bir başlık. Animate.css ile animasyon uygulanmış. */}
      <h1 className="animate__animated animate__bounceInDown">{currentTime}</h1>
    </div>
  );
}

export default App; // App bileşeni dışa aktarılır.
