import "../styles/Card.css";

export default function Card() {
    return(
        <div className="cards-section">
            <div className="card card-nt">
                <div className="card-inner">
                    <h2 className="card-title">Analysts</h2>
                    <p className="card-subtitle">NT — Rationals</p>
                    <p className="card-desc">Стратеги и мыслители. Обладают аналитическим складом ума, любят сложные системы и поиск эффективных решений.</p>
                    <ul className="card-types">
                        <li>INTJ — Архитектор</li>
                        <li>INTP — Логик</li>
                        <li>ENTJ — Командующий</li>
                        <li>ENTP — Полемист</li>
                    </ul>
                </div>
            </div>

            <div className="card card-nf">
                <div className="card-inner">
                    <h2 className="card-title">Diplomats</h2>
                    <p className="card-subtitle">NF — Idealists</p>
                    <p className="card-desc">Эмпаты и идеалисты. Руководствуются интуицией и эмоциями, стремятся к гармонии и пониманию.</p>
                    <ul className="card-types">
                        <li>INFJ — Активист</li>
                        <li>INFP — Посредник</li>
                        <li>ENFJ — Главный герой</li>
                        <li>ENFP — Коммунатор</li>
                    </ul>
                </div>
            </div>

            <div className="card card-sj">
                <div className="card-inner">
                    <h2 className="card-title">Sentinels</h2>
                    <p className="card-subtitle">SJ — Guardians</p>
                    <p className="card-desc">Хранители и защитники. Надёжные, практичные и организованные. Ценят традиции и стабильность.</p>
                    <ul className="card-types">
                        <li>ISTJ — Логист</li>
                        <li>ISFJ — Защитник</li>
                        <li>ESTJ — Администратор</li>
                        <li>ESFJ — Консультант</li>
                    </ul>
                </div>
            </div>

            <div className="card card-sp">
                <div className="card-inner">
                    <h2 className="card-title">Explorers</h2>
                    <p className="card-subtitle">SP — Explorers</p>
                    <p className="card-desc">Искатели приключений и мастера. Спонтанные, гибкие и практичные. Живут настоящим моментом.</p>
                    <ul className="card-types">
                        <li>ISTP — Виртуоз</li>
                        <li>ISFP — Посредник</li>
                        <li>ESTP — Делец</li>
                        <li>ESFP — Развлекатель</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};