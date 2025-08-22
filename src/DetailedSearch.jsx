import React, { useState } from "react";
import Navbar from "./Navbar";
import "./DetailedSearch.css";

const results = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAimjJusDAWAiok4osFLEHUq2pqDjQSwP25M9YU31dqW3ghZywUvn3ODOnKxGi9FFrIsEU_9g-fSQ0YEcn4po7xw_OT_MecI05YWFgDapjnEMAj90mCVhnYSBVViH2GKIqmuFZocw1rwq-WovgNQFId-MH3qdwZLndLsA8cSexAlcYtnAGOekHyxOHpZ8XlsDlBCdFq4xA6IPl9Hh4MnQXJtp1vdZenOaqrDAE2k0ZTR4_My5iB6th-avc8zK4WAs2P_09nWNO4owY",
    text: "El tema principal de este video es sobre la importancia de la comunicación efectiva en el lugar de trabajo.",
    time: "0:15 - 0:20"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB8HFD-NCJH-5lcm617BFzZY4GFgrnAcNzV6bG5HbwbF7cjpuhgiQKhCrH1Rgfszpg5E1RuWk0UPrFL05lbUvulydQQL0Vd3EP-qADu1K8En_F33FVd1IUi3I6uQZo-sVngUUfA_6_VGEuDzYQ6zAiuBJukYHlORJDKTqfwXGBXooZcTkIdHshVLwYItsJDadcXFPLS3AW7VXyXvuSAf1f3LcFXfP9w482R19TWP8NzEyic-oMJJ6v6jy8pEb4dSSo93Je2wf8U6Y",
    text: "La comunicación efectiva es clave para construir relaciones sólidas con colegas y clientes.",
    time: "1:30 - 1:35"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpqeG8YdSax6gmuWidTowB3ExQvCYokyjRTUpa2MiR5fAu8I6UQHNl4swo2cdom7jl3ePQDBpvw8HnJQmCVZxAn3eMfG7Pq2HmQdeX3YHYveBoibo02En1Yu96pbJQmb3VeoI5zjSDaJvxG4FW_doltysu_9BiLdLVV04ITSRVPBIeqqUc5zfPIrAF9KbQL6UrfwHAWoqNilzu_VZvdlKOw9mjYdgK3Gs9McSgdwy3tpgLT85zL0KvmGz02yqK0HQWZM1suaU2Ebc",
    text: "En este segmento, discutiremos consejos prácticos para mejorar tus habilidades de comunicación.",
    time: "2:45 - 2:50"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzTrBiNNkckddShmqiraKaD_JINTIErgXV0UXzMfoav4_B38JHVEt7DLNgOs1gEHj8xX-0D5AdKoZ_3v_IDf0iHNB8hxkCfdj_WXmII4CNMhY--V1eMSXqgIOl_r3mBp2UT6LTIj74Y3KM3z0_13dnSW0KOdrBNETMRp4yz08QGnr66x1KbxcJdLzjoyZLEipTPEEAftKCBFAvyafkT2KPbOSNWuJ233bSKZp9dHO5aHo3GC6JkJ4Oc0khiJBWUt1xBn2K3f-g0TQ",
    text: "Recuerda, una comunicación clara y concisa puede prevenir malentendidos y aumentar la productividad.",
    time: "3:55 - 4:00"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnlRUHXWbfUatS9eFn2deowN3xgSxzmgToLGSzWZOF29A3-Bs0AElnlijyjv6Y8O3jPpl5vLwu-3QKPuVb3Tj6Yu_jq4SR7EWqbCB_fe9jbxvS1ghThg6WTH9rCes-JjeGZ0pKcNicsHFVPPINaJQoEPNln6tu72Gggi4-lJPFbbVZ0MiAOB6ZIwz1GMi9HRU1KNWOlGEJRUOMD0AWKgk8GdZ5MgPKddva3oqaUPkqfEcq5H74cp0h0HyR9mArk_Y81iotzqTdn8s",
    text: "Exploremos algunos desafíos comunes de comunicación y cómo superarlos.",
    time: "5:10 - 5:15"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgLAiHEJpoLvbWjdcpik7jFtiteUMOzaxXSA_Ft2kF0G-GJ5v4mem9Q-jZDTnxZyy7ouYY1s-XcAm8vGZTi2rz_mHXRZNJeqLYnkBG2szx4EEYDX6YXSjRZudEGas_cSiaS_dKz7UT7U8NUv4wW17tvqHPWYjLvtnG3GjsVovYLxW0JFWGN8socSAlmsOE9bNn6itDVS_NHPur6zZg6RF56Aingd7FeZxnrADV6gnlP3rIpsjQAxRNcJbfC7tBoB9NRHcudShz-PI",
    text: "La comunicación efectiva implica escuchar activamente y comprender diferentes perspectivas.",
    time: "6:25 - 6:30"
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrxU8V4jn78w9PRE-ZmTHtSzlWXgy0PeNNHTHE6lYuXwCVF-e6r3DF_uzOuWRKcMTwdQVMVfLCk5OkwV-_IaERD832KueKz5qT_LTR1AJrcP4SoM7yjsaPlz3gkA-s6B1QxTL9X85OoYmPiukg-gTy4CVK-cZTtmm_AifTaZ8w6fPjUC8eW-BxLAJPYB8B7dTlazx5XYNi81EWWMfs2sUB2MYxuCw_ABkBCkPUILeuYn69uQx2wgQ-LQErbtjbeWnFqb327hWCxRc",
    text: "En conclusión, dominar la comunicación efectiva es esencial para el éxito en cualquier entorno profesional.",
    time: "7:40 - 7:45"
  }
];

export default function DetailedSearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="dsearch-root">
      <Navbar />
      <main className="dsearch-main">
        <div className="dsearch-searchbar" style={{marginBottom: '0.75rem', width: '100%'}}>
          <label className="dsearch-search-label">
            <div className="dsearch-search-box">
              <span className="dsearch-search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </span>
              <input
                className="dsearch-search-input"
                type="text"
                placeholder="Buscar un término o frase"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="dsearch-clear-btn">
                <span className="dsearch-clear-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </label>
        </div>
        <div className="dsearch-video-player" style={{marginBottom: '2rem', width: '100%'}}>
          <button className="dsearch-play-btn">
            <span className="dsearch-play-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
              </svg>
            </span>
          </button>
        </div>
        <h2 className="dsearch-results-title">Resultados de Búsqueda</h2>
        <div className="dsearch-results-list">
          {results.map((result, idx) => (
            <div className="dsearch-result-item" key={idx}>
              <div className="dsearch-result-thumb" style={{backgroundImage: `url('${result.img}')`}}></div>
              <div className="dsearch-result-info">
                <p className="dsearch-result-text">{result.text}</p>
                <p className="dsearch-result-time">{result.time}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
