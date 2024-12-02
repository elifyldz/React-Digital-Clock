// React kütüphanesi projeye dahil edildi
import React from 'react';

// React'in DOM kütüp. eklendi.
import ReactDOM from 'react-dom/client';

// Uygulamanın ana bileşeni olan App dosyası import etmesine yardımcı oluyor.
import App from './App';

// Uygulamanın render edileceği kök DOM öğesi tanımlandı
const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM kullanılarak uygulama DOM öğesine render edilir.
root.render(
  <React.StrictMode>
    {/* Uygulamanın ana bileşeni olan App, StrictMode içerisinde çalıştırılır. 
        StrictMode, potansiyel sorunları belirlemek için ek denetim sağlar.
    */}
    <App />
  </React.StrictMode>
);

