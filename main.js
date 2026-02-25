const translations = {
    ko: { fav: "🍿 내 찜목록", login: "로그인", mainTitle: "OTT 켰다가 끄는 건 그만.", subTitle: "어떤 기분이신가요? 상황을 검색하면 lineup이 3줄 요약해 드립니다.", searchBtn: "AI 추천받기", placeholder: "ex) 주말에 몰아볼 존잼 복수극 찾아줘", recent: "👀 최근 검색/조회", noResult: "앗! 검색 결과가 없어요. 다른 키워드로 검색해보세요." },
    en: { fav: "🍿 My List", login: "Login", mainTitle: "Stop scrolling. Start watching.", subTitle: "Tell us your mood. lineup will give you a 3-line summary.", searchBtn: "Get AI Picks", placeholder: "ex) A fun revenge drama for the weekend", recent: "👀 Recent Searches", noResult: "Oops! No results found. Try another keyword." },
    ja: { fav: "🍿 マイリスト", login: "ログイン", mainTitle: "もう迷わない。", subTitle: "今の気分は？lineupが3行でまとめます。", searchBtn: "AIおすすめ", placeholder: "ex) 週末に見る面白い復讐劇", recent: "👀 最近の検索", noResult: "結果が見つかりませんでした。他のキーワードでお試しください。" },
    zh: { fav: "🍿 我的收藏", login: "登录", mainTitle: "告别剧荒。", subTitle: "你现在是什么心情？lineup为你提供3行总结。", searchBtn: "AI 推荐", placeholder: "ex) 周末想看的复仇爽剧", recent: "👀 最近搜索", noResult: "未找到结果。请尝试其他关键词。" }
};

// 넷플릭스 콘텐츠 데이터베이스 (Mock Data)
const contentDB = [
    {
        title: "더 글로리",
        match: "98%",
        tags: ["#사이다복수", "#정주행필수", "#송혜교"],
        summary: [
            "학폭 가해자들 인생을 밑바닥부터 찢어발기는 우아한 복수극.",
            "\"연진아, 나 지금 되게 신나.\" 한 번 틀면 못 끊음.",
            "고구마 1개 먹고 사이다 100리터 들이붓는 쾌감 장난 아님."
        ]
    },
    {
        title: "오징어 게임",
        match: "95%",
        tags: ["#서바이벌", "#데스게임", "#글로벌히트"],
        summary: [
            "456억 원의 상금이 걸린 의문의 서바이벌 게임에 참가한 사람들.",
            "어린 시절 놀이가 잔혹한 현실로 변하는 충격적인 전개.",
            "인간의 본성과 자본주의의 민낯을 가감 없이 보여줌."
        ]
    },
    {
        title: "기생충",
        match: "92%",
        tags: ["#봉준호", "#계급사회", "#스릴러"],
        summary: [
            "전혀 다른 두 가족의 만남이 걷잡을 수 없는 사건으로 번지는 과정.",
            "선과 악의 경계가 모호한 입체적인 캐릭터와 촘촘한 각본.",
            "유머로 시작해 충격과 여운으로 끝나는 마스터피스."
        ]
    },
    {
        title: "스위트홈",
        match: "89%",
        tags: ["#크리처물", "#생존", "#웹툰원작"],
        summary: [
            "은둔형 외톨이 소년이 아파트에서 겪는 기괴하고 충격적인 이야기.",
            "욕망이 괴물이 되는 독특한 설정과 화려한 CG 액션.",
            "절망적인 상황 속에서도 피어나는 인간애와 생존 본능."
        ]
    },
    {
        title: "킹덤",
        match: "94%",
        tags: ["#K-좀비", "#사극", "#정치스릴러"],
        summary: [
            "죽었던 왕이 살아나자 반역자로 몰린 세자가 굶주린 괴물들에 맞서는 사투.",
            "조선 시대를 배경으로 한 압도적인 비주얼의 좀비 아포칼립스.",
            "권력에 대한 탐욕이 빚어낸 비극과 백성들의 처절한 생존기."
        ]
    },
    {
        title: "피지컬: 100",
        match: "91%",
        tags: ["#서바이벌", "#운동", "#예능"],
        summary: [
            "가장 강력한 피지컬을 가진 최고의 '몸'을 찾기 위한 100인의 서바이벌.",
            "압도적인 스케일의 퀘스트와 출연진들의 한계에 도전하는 투지.",
            "각 분야 최고의 선수들이 보여주는 스포츠맨십과 긴장감."
        ]
    },
    {
        title: "무빙",
        match: "96%",
        tags: ["#초능력", "#액션", "#가족애"],
        summary: [
            "초능력을 숨긴 채 현재를 살아가는 아이들과 과거를 숨긴 부모들의 이야기.",
            "한국형 히어로물의 새로운 지평을 연 방대한 세계관과 액션.",
            "능력보다 중요한 '사람'과 '가족'에 대한 따뜻한 휴머니즘."
        ]
    },
    {
        title: "기묘한 이야기",
        match: "93%",
        tags: ["#80년대", "#SF", "#우정"],
        summary: [
            "실종된 소년을 찾기 위해 나선 친구들이 마을의 비밀을 파헤치는 모험.",
            "80년대 감성을 자극하는 배경과 매력 넘치는 캐릭터들의 케미.",
            "뒤집힌 세계에서 온 괴물들에 맞서는 아이들의 용감한 사투."
        ]
    },
    {
        title: "브리저튼",
        match: "88%",
        tags: ["#로맨스", "#시대극", "#화려함"],
        summary: [
            "런던 상류사회에서 벌어지는 사랑과 욕망, 배신에 대한 화려한 이야기.",
            "화려한 의상과 무대, 눈을 뗄 수 없는 로맨틱한 전개.",
            "신분을 초월한 사랑과 그들을 둘러싼 비밀스러운 소문들."
        ]
    },
    {
        title: "흑백요리사",
        match: "97%",
        tags: ["#요리", "#서바이벌", "#백종원"],
        summary: [
            "재야의 고수들과 스타 셰프들이 펼치는 치열한 요리 대결.",
            "압도적인 스케일의 주방에서 벌어지는 예술 같은 요리 퍼포먼스.",
            "맛의 정점을 향한 요리사들의 진심과 처절한 승부."
        ]
    }
];

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
    const query = document.getElementById('searchInput').value.trim();
    if(!query) return alert("검색어를 입력해주세요!");

    const lang = document.getElementById('langSelect').value;
    const t = translations[lang];
    const resultsContainer = document.getElementById('results');
    
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = "<div style='text-align:center; padding:50px; font-size:1.2em;'>🤖 AI가 도파민 포인트를 추출 중입니다... 🍿</div>";
    updateRecentView(query);

    setTimeout(() => {
        // 검색 로직: 제목이나 태그에 검색어가 포함된 항목 찾기
        const filteredResults = contentDB.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = `<div style='text-align:center; padding:50px; color:var(--text-sub);'>${t.noResult}</div>`;
            return;
        }

        let resultsHTML = `<h3 style="margin-bottom: 20px; font-size: 1.3em;">'${query}' lineup 🎬</h3>`;
        
        filteredResults.forEach(item => {
            resultsHTML += `
                <div class="movie-card">
                    <div class="card-header">
                        <h3 class="movie-title">${item.title} <span class="match-rate">${item.match} Match</span></h3>
                        <button style="background:none; border:none; color:var(--text-main); font-size:1.5em;">🤍</button>
                    </div>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </div>
                    <div class="summary-box">
                        <p>🔥 <b>1.</b> ${item.summary[0]}</p>
                        <p>🔥 <b>2.</b> ${item.summary[1]}</p>
                        <p>🔥 <b>3.</b> ${item.summary[2]}</p>
                    </div>
                </div>
            `;
        });
        
        resultsHTML += `<div class="ad-banner" style="height: 80px;">💰 리스트 중간 광고 (수익 극대화 포인트)</div>`;
        resultsContainer.innerHTML = resultsHTML;
    }, 800);
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
