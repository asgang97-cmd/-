const translations = {
    ko: { fav: "🍿 내 찜목록", login: "로그인", mainTitle: "OTT 켰다가 끄는 건 그만.", subTitle: "어떤 기분이신가요? 상황을 검색하면 lineup이 3줄 요약해 드립니다.", searchBtn: "AI 추천받기", placeholder: "ex) 주말에 몰아볼 존잼 복수극 찾아줘", recent: "👀 최근 검색/조회" },
    en: { fav: "🍿 My List", login: "Login", mainTitle: "Stop scrolling. Start watching.", subTitle: "Tell us your mood. lineup will give you a 3-line summary.", searchBtn: "Get AI Picks", placeholder: "ex) A fun revenge drama for the weekend", recent: "👀 Recent Searches" },
    ja: { fav: "🍿 マイリスト", login: "ログイン", mainTitle: "もう迷わない。", subTitle: "今の気分は？lineupが3行でまとめます。", searchBtn: "AIおすすめ", placeholder: "ex) 週末に見る面白い復讐劇", recent: "👀 最近の検索" },
    zh: { fav: "🍿 我的收藏", login: "登录", mainTitle: "告别剧荒。", subTitle: "你现在是什么心情？lineup为你提供3行总结。", searchBtn: "AI 推荐", placeholder: "ex) 周末想看的复仇爽剧", recent: "👀 最近搜索" }
};

function changeLanguage() {
    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    document.getElementById('btn-fav').innerText = t.fav;
    document.getElementById('btn-login').innerText = t.login;
    document.getElementById('title-main').innerText = t.mainTitle;
    document.getElementById('title-sub').innerText = t.subTitle;
    document.getElementById('btn-search').innerText = t.searchBtn;
    document.getElementById('searchInput').placeholder = t.placeholder;
    document.getElementById('title-recent').innerText = t.recent;
}

function analyzeContent() {
    const query = document.getElementById('searchInput').value;
    if(!query) return alert("검색어를 입력해주세요!");

    const resultsContainer = document.getElementById('results');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = "<div style='text-align:center; padding:50px; font-size:1.2em;'>🤖 AI가 도파민 포인트를 추출 중입니다... 🍿</div>";
    updateRecentView(query);

    setTimeout(() => {
        resultsContainer.innerHTML = `
            <h3 style="margin-bottom: 20px; font-size: 1.3em;">'${query}' lineup 🎬</h3>
            <div class="movie-card">
                <div class="card-header">
                    <h3 class="movie-title">더 글로리 <span class="match-rate">98% Match</span></h3>
                    <button style="background:none; border:none; color:#fff; font-size:1.5em;">🤍</button>
                </div>
                <div class="tags"><span class="tag">#사이다복수</span> <span class="tag">#정주행필수</span></div>
                <div class="summary-box">
                    <p>🔥 <b>1.</b> 학폭 가해자들 인생을 밑바닥부터 찢어발기는 우아한 복수극.</p>
                    <p>🔥 <b>2.</b> "연진아, 나 지금 되게 신나." 한 번 틀면 못 끊음.</p>
                    <p>🔥 <b>3.</b> 고구마 1개 먹고 사이다 100리터 들이붓는 쾌감 장난 아님.</p>
                </div>
            </div>
            <div class="ad-banner" style="height: 80px;">💰 리스트 중간 광고 (수익 극대화 포인트)</div>
        `;
    }, 1000);
}

function updateRecentView(query) {
    const recentList = document.getElementById('recent-list');
    if (recentList.innerHTML.includes('아직 기록이 없어요!')) recentList.innerHTML = '';
    recentList.innerHTML = `<div class="recent-item"><span>🔍 ${query}</span> <span style="font-size:0.8em; color:#666;">방금</span></div>` + recentList.innerHTML;
}

window.onscroll = function() {
    let topBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) topBtn.style.display = "block";
    else topBtn.style.display = "none";
};
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langSelect').addEventListener('change', changeLanguage);
    document.getElementById('btn-search').addEventListener('click', analyzeContent);
    document.getElementById('searchInput').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            analyzeContent();
        }
    });
    document.getElementById('scrollTopBtn').addEventListener('click', scrollToTop);
    
    // 테마 토글 설정
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerText = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerText = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerText = '☀️';
        }
    });
});
