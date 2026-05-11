 const moviesData = [
        { id: 1, title: "Джон Уик 4", year: 2023, rating: 8.2, genre: "боевик", description: "Легендарный киллер Джон Уик продолжает сражаться против Теневой организации. Невероятная хореография боев и стиль.", poster: "https://ir.ozone.ru/s3/multimedia-0/6881606496.jpg" },
        { id: 2, title: "Интерстеллар", year: 2014, rating: 8.6, genre: "фантастика", description: "Группа исследователей использует недавно обнаруженный червоточину, чтобы преодолеть ограничения космических путешествий.", poster: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg" },
        { id: 3, title: "Зеленая книга", year: 2018, rating: 8.2, genre: "драма", description: "Итальяно-американский вышибала нанимается водителем к афроамериканскому пианисту во время турне по югу США.", poster: "https://upload.wikimedia.org/wikipedia/ru/f/f0/Green_Book.jpg" },
        { id: 4, title: "Дюна", year: 2024, rating: 8.5, genre: "фантастика", description: "Пол Атрейдес объединяется с фременами, чтобы отомстить заговорщикам, уничтожившим его семью.", poster: "https://upload.wikimedia.org/wikipedia/ru/6/61/%D0%94%D1%8E%D0%BD%D0%B0_%E2%80%94_%D0%A7%D0%B0%D1%81%D1%82%D1%8C_%D0%B2%D1%82%D0%BE%D1%80%D0%B0%D1%8F_%28%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%29.jpg" },
        { id: 5, title: "Оппенгеймер", year: 2023, rating: 8.4, genre: "драма", description: "История американского физика Роберта Оппенгеймера, сыгравшего ключевую роль в создании атомной бомбы.", poster: "https://upload.wikimedia.org/wikipedia/ru/b/bf/%D0%9E%D0%BF%D0%BF%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D0%BC%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg" },
        { id: 6, title: "Ford против Ferrari", year: 2019, rating: 8.1, genre: "драма", description: "Американские инженеры и гонщики создают гоночный автомобиль для победы над Ferrari.", poster: "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARDIzjQw.jpg" },
        { id: 7, title: "Безумный Макс", year: 2015, rating: 7.9, genre: "боевик", description: "В мире постапокалипсиса Макс присоединяется к бунтарке Фуриосе.", poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
        { id: 8, title: "Начало", year: 2010, rating: 8.8, genre: "фантастика", description: "Вор, способный проникать в чужие сны, получает задание внедрить идею.", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uc4.jpg" },
        { id: 9, title: "Джокер", year: 2019, rating: 8.4, genre: "триллер", description: "История происхождения Артура Флека, неудачливого комика.", poster: "https://image.tmdb.org/t/p/w500/udDcljoH2fjNHwBVyJh6ddQHZc4.jpg" },
        { id: 10, title: "Малыш на драйве", year: 2017, rating: 7.6, genre: "боевик", description: "Молодой водитель работает на криминального босса.", poster: "https://image.tmdb.org/t/p/w500/8VrRq5BImxeqSpDKZQui96fJre6.jpg" },
        { id: 11, title: "Один дома", year: 1990, rating: 7.6, genre: "комедия", description: "Мальчик остается один дома на Рождество.", poster: "https://image.tmdb.org/t/p/w500/9wSfZ4PdgQw1q2x6C4xYiQk6gLc.jpg" },
        { id: 12, title: "Волк с Уолл-стрит", year: 2013, rating: 8.2, genre: "криминал", description: "Взлёт и падение брокера.", poster: "https://image.tmdb.org/t/p/w500/pWHxJ2v3Vzqg5l0BZ3jJXpQj6fZ.jpg" },
        { id: 13, title: "Паразиты", year: 2019, rating: 8.5, genre: "триллер", description: "Семья проникает в жизнь богатого дома.", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
        { id: 14, title: "Криминальное чтиво", year: 1994, rating: 8.9, genre: "криминал", description: "Переплетающиеся истории гангстеров.", poster: "https://image.tmdb.org/t/p/w500/2lEL2Aj9HZmFvXhR7N9NqS0gC1y.jpg" },
        { id: 15, title: "Треугольник печали", year: 2022, rating: 7.5, genre: "комедия", description: "Круиз для богатых оборачивается катастрофой.", poster: "https://image.tmdb.org/t/p/w500/3dDg5bAbZ2Bpw1XkQ2wVQBUCZpT.jpg" },
        { id: 16, title: "Бойцовский клуб", year: 1999, rating: 8.8, genre: "триллер", description: "Офисный работник и мыловар организуют подпольный клуб.", poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" },
        { id: 17, title: "Мир Юрского периода", year: 2015, rating: 7.0, genre: "фантастика", description: "Парк развлечений с динозаврами выходит из-под контроля.", poster: "https://image.tmdb.org/t/p/w500/9zVEcyUbn8I4o8TrGABbr81MRwF.jpg" }
    ];

    // --- Состояние ---
    let currentGenre = "all";
    let searchQuery = "";

    // --- DOM элементы ---
    const moviesGrid = document.getElementById("moviesGrid");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const modal = document.getElementById("movieModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalPoster = document.getElementById("modalPoster");
    const modalDetails = document.getElementById("modalDetails");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // --- Функция отрисовки карточек ---
    function renderMovies() {
        // Фильтрация
        let filtered = moviesData.filter(movie => {
            const matchGenre = currentGenre === "all" || movie.genre === currentGenre;
            const matchSearch = searchQuery === "" || movie.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchGenre && matchSearch;
        });

        if (filtered.length === 0) {
            moviesGrid.innerHTML = '<div class="no-results">Фильмов не найдено... Попробуйте другие фильтры</div>';
            return;
        }

        // Создаём HTML карточек
        let cardsHtml = "";
        for (let movie of filtered) {
            cardsHtml += `
                <div class="movie-card" data-id="${movie.id}">
                    <img class="movie-img" src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.src='https://placehold.co/300x450?text=Нет+картинки'">
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-meta">
                            <span class="year"> ${movie.year}</span>
                            <span class="rating"> ${movie.rating}</span>
                        </div>
                        <div class="genre">🎭 ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</div>
                    </div>
                </div>
            `;
        }
        moviesGrid.innerHTML = cardsHtml;

        // Навешиваем обработчики на карточки
        document.querySelectorAll(".movie-card").forEach(card => {
            card.addEventListener("click", () => {
                const id = parseInt(card.getAttribute("data-id"));
                const movie = moviesData.find(m => m.id === id);
                if (movie) openModal(movie);
            });
        });
    }

    // --- Модальное окно ---
    function openModal(movie) {
    modalTitle.textContent = movie.title;
    modalPoster.src = movie.poster;
    modalPoster.alt = movie.title;
    modalPoster.onerror = function() { this.src = 'https://placehold.co/500x750?text=Нет+постера'; };
    
    // Стиль как на первой картинке — с разделителем и аккуратным форматированием
    modalDetails.innerHTML = `
        <p><strong>Год:</strong> ${movie.year}</p>
        <p><strong>Рейтинг:</strong> ${movie.rating}/10</p>
        <p><strong>Жанр:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
        <hr>
        <p><strong>Описание:</strong><br>${movie.description}</p>
    `;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    // --- Обработчики ---
    function initFilters() {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentGenre = btn.getAttribute("data-genre");
                renderMovies();
            });
        });
    }

    function initSearch() {
        const performSearch = () => {
            searchQuery = searchInput.value;
            renderMovies();
        };
        searchBtn.addEventListener("click", performSearch);
        searchInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") performSearch();
        });
    }

    function initModal() {
        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
        });
    }
    // --- Статистика для футера ---
function updateFooterStats() {
    const total = moviesData.length;
    document.getElementById('totalCount').textContent = total;
    
    // Подсчёт жанров
    const genreCount = {};
    moviesData.forEach(movie => {
        genreCount[movie.genre] = (genreCount[movie.genre] || 0) + 1;
    });
    
    let topGenre = '';
    let maxCount = 0;
    for (const [genre, count] of Object.entries(genreCount)) {
        if (count > maxCount) {
            maxCount = count;
            topGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
        }
    }
    document.getElementById('topGenre').textContent = topGenre || '—';
    
    // Самый старый и новый фильм
    let oldest = moviesData[0];
    let newest = moviesData[0];
    let topRatedMovie = moviesData[0];
    
    moviesData.forEach(movie => {
        if (movie.year < oldest.year) oldest = movie;
        if (movie.year > newest.year) newest = movie;
        if (movie.rating > topRatedMovie.rating) topRatedMovie = movie;
    });
    
    document.getElementById('oldestMovie').textContent = `${oldest.title} (${oldest.year})`;
    document.getElementById('newestMovie').textContent = `${newest.title} (${newest.year})`;
    document.getElementById('topRated').textContent = `${topRatedMovie.title} — ${topRatedMovie.rating}⭐`;
}

// Вызываем при загрузке
updateFooterStats();

    // --- Запуск ---
    initFilters();
    initSearch();
    initModal();
    renderMovies();