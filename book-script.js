// 12주차별 책 데이터
const booksData = {
    1: [
        {
            title: "삶으로 다시 떠오르기",
            description: "인생의 어려움을 극복하고 새로운 시작을 위한 마인드셋",
            week: 1
        }
    ],
    2: [
        {
            title: "놓아버림",
            description: "집착과 욕심을 버리고 자유로운 마음으로 사는 법",
            week: 2
        }
    ],
    3: [
        {
            title: "맥스웰 몰츠 성공의 법칙",
            description: "잠재의식의 힘을 활용한 성공 원리",
            week: 3
        },
        {
            title: "호오포노포노 실천법",
            description: "하와이 전통 치유법을 통한 내면의 평화 찾기",
            week: 3
        }
    ],
    4: [
        {
            title: "기적의 사명선언문",
            description: "자신의 사명을 발견하고 선언하는 방법",
            week: 4
        },
        {
            title: "천명",
            description: "하늘에서 부여받은 사명과 목적",
            week: 4
        },
        {
            title: "목적과 이익",
            description: "사명과 수익을 동시에 달성하는 전략",
            week: 4
        }
    ],
    5: [
        {
            title: "원칙",
            description: "레이 달리오의 인생과 투자 원칙",
            week: 5
        },
        {
            title: "규칙없음",
            description: "기존 규칙을 깨고 혁신하는 사고방식",
            week: 5
        },
        {
            title: "다시 시작하는 돈공부",
            description: "금융 문맹을 탈출하고 돈에 대한 올바른 인식",
            week: 5
        },
        {
            title: "2억 빚진 내게 우주님이 알려준 말버릇",
            description: "빚을 갚고 경제적 자유를 찾는 방법",
            week: 5
        },
        {
            title: "평생 돈에 구애받지 않는 방법",
            description: "돈의 노예가 아닌 돈의 주인이 되는 법",
            week: 5
        },
        {
            title: "돈의 속성",
            description: "돈의 본질과 흐름을 이해하는 법",
            week: 5
        },
        {
            title: "머니",
            description: "돈에 대한 근본적인 이해와 활용",
            week: 5
        },
        {
            title: "자본주의",
            description: "자본주의 시스템의 이해와 활용",
            week: 5
        }
    ],
    6: [
        {
            title: "아이디어 불패의 법칙",
            description: "창의적 아이디어를 성공으로 이끄는 방법",
            week: 6
        },
        {
            title: "매출 500억 미용실",
            description: "미용실 사업을 통한 성공 사례와 전략",
            week: 6
        }
    ],
    7: [
        {
            title: "플라이휠을 돌려라",
            description: "지속적인 성장을 위한 플라이휠 효과",
            week: 7
        },
        {
            title: "로지컬 씽킹",
            description: "논리적 사고를 통한 문제 해결과 의사결정",
            week: 7
        }
    ],
    8: [
        {
            title: "마케팅 설계자",
            description: "효과적인 마케팅 전략 수립과 실행",
            week: 8
        },
        {
            title: "브랜드 설계자",
            description: "강력한 브랜드 구축과 관리",
            week: 8
        },
        {
            title: "트래픽 설계자",
            description: "웹사이트 트래픽 증가 전략",
            week: 8
        }
    ],
    9: [
        {
            title: "위대한 공식",
            description: "성공을 위한 수학적 공식과 원리",
            week: 9
        },
        {
            title: "당신의 세일즈에 스핀을 걸어라",
            description: "매출 증대를 위한 세일즈 전략",
            week: 9
        }
    ],
    10: [
        {
            title: "거절할 수 없는 제안",
            description: "고객이 거절할 수 없는 매력적인 제안 방법",
            week: 10
        }
    ],
    11: [
        {
            title: "조인트사고",
            description: "협력과 파트너십을 통한 성공 전략",
            week: 11
        },
        {
            title: "성공자의 고백",
            description: "성공한 사람들의 솔직한 이야기와 교훈",
            week: 11
        }
    ],
    12: [
        {
            title: "미친 세일즈",
            description: "파격적이고 혁신적인 세일즈 기법",
            week: 12
        },
        {
            title: "폴리매스",
            description: "여러 분야에 능통한 다면적 인재가 되는 법",
            week: 12
        },
        {
            title: "죽음은 통제할 수 없지만, 인생은 설계할 수 있다",
            description: "인생 설계와 목표 달성을 위한 가이드",
            week: 12
        }
    ]
};

// 현재 선택된 주차
let currentWeek = 'all';

// 검색어
let currentSearchTerm = '';

// 완료된 책 목록 (로컬 스토리지에서 불러오기)
let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];

// DOM 요소들
const weekButtons = document.querySelectorAll('.week-btn');
const booksContainer = document.getElementById('booksContainer');
const progressFill = document.getElementById('progressFill');
const completedBooksSpan = document.getElementById('completedBooks');
const totalBooksSpan = document.getElementById('totalBooks');
const searchInput = document.getElementById('searchInput');

// 통계 카드 요소들
const totalBooksCount = document.getElementById('totalBooksCount');
const completedBooksCount = document.getElementById('completedBooksCount');
const currentWeekBooks = document.getElementById('currentWeekBooks');
const completionRate = document.getElementById('completionRate');

// 주차별 버튼 클릭 이벤트
weekButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 변경
        weekButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 선택된 주차 설정
        currentWeek = button.dataset.week;
        
        // 책 목록 렌더링
        renderBooks();
        
        // 통계 업데이트
        updateStats();
    });
});

// 검색 입력 이벤트
searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    renderBooks();
});

// 책 목록 렌더링
function renderBooks() {
    booksContainer.innerHTML = '';
    
    let booksToShow = [];
    
    if (currentWeek === 'all') {
        // 모든 주차의 책을 하나의 배열로 합치기
        Object.values(booksData).forEach(weekBooks => {
            booksToShow.push(...weekBooks);
        });
    } else {
        // 특정 주차의 책만 표시
        booksToShow = booksData[currentWeek] || [];
    }
    
    // 검색어가 있으면 필터링
    if (currentSearchTerm) {
        booksToShow = booksToShow.filter(book => 
            book.title.toLowerCase().includes(currentSearchTerm) ||
            book.description.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    if (booksToShow.length === 0) {
        booksContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>${currentSearchTerm ? `"${currentSearchTerm}" 검색 결과가 없습니다.` : '해당 주차에 책이 없습니다.'}</p>
                <p>다른 검색어나 주차를 시도해보세요.</p>
            </div>
        `;
        return;
    }
    
    booksToShow.forEach(book => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });
    
    // 진행률 업데이트
    updateProgress();
}

// 책 카드 생성
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    const isCompleted = completedBooks.includes(book.title);
    
    card.innerHTML = `
        <div class="book-header">
            <h3 class="book-title">${book.title}</h3>
            <span class="week-badge">${book.week}주차</span>
        </div>
        <p class="book-description">${book.description}</p>
        <div class="book-actions">
            ${isCompleted ? 
                `<button class="action-btn completed" onclick="toggleBookCompletion('${book.title}')">
                    <i class="fas fa-check"></i> 완료됨
                </button>` :
                `<button class="action-btn read-btn" onclick="markAsReading('${book.title}')">
                    <i class="fas fa-book-open"></i> 읽는 중
                </button>
                <button class="action-btn complete-btn" onclick="toggleBookCompletion('${book.title}')">
                    <i class="fas fa-check"></i> 완료
                </button>`
            }
        </div>
    `;
    
    return card;
}

// 책 읽기 시작
function markAsReading(bookTitle) {
    alert(`"${bookTitle}" 읽기를 시작합니다!`);
}

// 책 완료/미완료 토글
function toggleBookCompletion(bookTitle) {
    const index = completedBooks.indexOf(bookTitle);
    
    if (index > -1) {
        // 완료된 책에서 제거
        completedBooks.splice(index, 1);
        alert(`"${bookTitle}" 완료 상태를 해제했습니다.`);
    } else {
        // 완료된 책에 추가
        completedBooks.push(bookTitle);
        alert(`"${bookTitle}" 완료했습니다! 축하합니다! 🎉`);
    }
    
    // 로컬 스토리지에 저장
    localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
    
    // UI 업데이트
    renderBooks();
    updateStats();
}

// 진행률 업데이트
function updateProgress() {
    const totalBooks = Object.values(booksData).flat().length;
    const completedCount = completedBooks.length;
    const progressPercentage = (completedCount / totalBooks) * 100;
    
    progressFill.style.width = `${progressPercentage}%`;
    completedBooksSpan.textContent = completedCount;
    totalBooksSpan.textContent = totalBooks;
}

// 통계 업데이트
function updateStats() {
    const totalBooks = Object.values(booksData).flat().length;
    const completedCount = completedBooks.length;
    const currentWeekCount = currentWeek === 'all' ? totalBooks : (booksData[currentWeek] || []).length;
    const completionRateValue = totalBooks > 0 ? Math.round((completedCount / totalBooks) * 100) : 0;
    
    totalBooksCount.textContent = totalBooks;
    completedBooksCount.textContent = completedCount;
    currentWeekBooks.textContent = currentWeekCount;
    completionRate.textContent = `${completionRateValue}%`;
}

// 초기 렌더링
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    
    // 로컬 스토리지에서 완료된 책 목록 불러오기
    completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
    
    // 진행률 초기화
    updateProgress();
    
    // 통계 초기화
    updateStats();
});

// 키보드 단축키 지원
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K로 검색 포커스
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // 숫자 키 1-9로 주차 선택
    if (e.key >= '1' && e.key <= '9') {
        const weekNum = parseInt(e.key);
        if (booksData[weekNum]) {
            const targetButton = document.querySelector(`[data-week="${weekNum}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    }
    
    // 0키로 10주차 선택
    if (e.key === '0') {
        const targetButton = document.querySelector('[data-week="10"]');
        if (targetButton) {
            targetButton.click();
        }
    }
    
    // A키로 전체보기
    if (e.key.toLowerCase() === 'a') {
        const targetButton = document.querySelector('[data-week="all"]');
        if (targetButton) {
            targetButton.click();
        }
    }
    
    // ESC키로 검색 초기화
    if (e.key === 'Escape') {
        searchInput.value = '';
        currentSearchTerm = '';
        renderBooks();
        searchInput.blur();
    }
});
