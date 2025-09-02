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

// 현재 필터 상태
let currentFilter = 'all';

// 책 상태 관리 (로컬 스토리지에서 불러오기)
let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
let readingBooks = JSON.parse(localStorage.getItem('readingBooks')) || [];
let bookNotes = JSON.parse(localStorage.getItem('bookNotes')) || {};

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

// 필터 버튼들
const filterButtons = document.querySelectorAll('.filter-btn');

// 주차별 버튼 클릭 이벤트
weekButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 변경
        weekButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 선택된 주차 설정
        currentWeek = button.dataset.week;
        
        // 주차 선택 시 필터 초기화
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allFilterBtn = document.querySelector('[data-filter="all"]');
        if (allFilterBtn) allFilterBtn.classList.add('active');
        currentFilter = 'all';
        
        // 책 목록 렌더링
        renderBooks();
        
        // 통계 업데이트
        updateStats();
        
        // 주차별 메시지 표시
        let weekMessage = '';
        if (currentWeek === 'all') {
            weekMessage = '모든 주차의 책을 표시합니다';
        } else {
            const weekBookCount = booksData[currentWeek] ? booksData[currentWeek].length : 0;
            weekMessage = `${currentWeek}주차 책 ${weekBookCount}권을 표시합니다`;
        }
        
        showSuccessMessage(weekMessage);
    });
});

// 필터 버튼 클릭 이벤트
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 필터 버튼 변경
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 선택된 필터 설정
        currentFilter = button.dataset.filter;
        
        // 필터가 'all'이 아닌 경우 전체 주차로 설정
        if (currentFilter !== 'all') {
            weekButtons.forEach(btn => btn.classList.remove('active'));
            const allWeekBtn = document.querySelector('[data-week="all"]');
            if (allWeekBtn) allWeekBtn.classList.add('active');
            currentWeek = 'all';
        }
        
        // 통계 업데이트
        updateStats();
        
        // 책 목록 렌더링
        renderBooks();
        
        // 필터별 메시지 표시
        let filterMessage = '';
        switch (currentFilter) {
            case 'reading':
                filterMessage = `읽는 중인 책 ${readingBooks.length}권을 표시합니다`;
                break;
            case 'completed':
                filterMessage = `완료된 책 ${completedBooks.length}권을 표시합니다`;
                break;
            case 'not-started':
                const notStartedCount = Object.values(booksData).flat().filter(book => 
                    !completedBooks.includes(book.title) && !readingBooks.includes(book.title)
                ).length;
                filterMessage = `시작하지 않은 책 ${notStartedCount}권을 표시합니다`;
                break;
            case 'all':
                filterMessage = '모든 책을 표시합니다';
                break;
        }
        
        if (filterMessage) {
            showSuccessMessage(filterMessage);
        }
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
    
    // 필터링 적용
    if (currentFilter !== 'all') {
        booksToShow = booksToShow.filter(book => {
            const isCompleted = completedBooks.includes(book.title);
            const isReading = readingBooks.includes(book.title);
            
            switch (currentFilter) {
                case 'reading':
                    return isReading;
                case 'completed':
                    return isCompleted;
                case 'not-started':
                    return !isCompleted && !isReading;
                default:
                    return true;
            }
        });
    }
    
    // 검색어가 있으면 필터링
    if (currentSearchTerm) {
        booksToShow = booksToShow.filter(book => 
            book.title.toLowerCase().includes(currentSearchTerm) ||
            book.description.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    if (booksToShow.length === 0) {
        let emptyMessage = '';
        if (currentSearchTerm) {
            emptyMessage = `"${currentSearchTerm}" 검색 결과가 없습니다.`;
        } else if (currentFilter !== 'all') {
            switch (currentFilter) {
                case 'reading':
                    emptyMessage = '현재 읽고 있는 책이 없습니다.';
                    break;
                case 'completed':
                    emptyMessage = '완료된 책이 없습니다.';
                    break;
                case 'not-started':
                    emptyMessage = '시작하지 않은 책이 없습니다.';
                    break;
            }
        } else {
            emptyMessage = '해당 주차에 책이 없습니다.';
        }
        
        booksContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>${emptyMessage}</p>
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
    const isReading = readingBooks.includes(book.title);
    const hasNotes = bookNotes[book.title] && bookNotes[book.title].length > 0;
    
    // 상태에 따른 배경색 클래스 추가
    let statusClass = '';
    if (isCompleted) statusClass = 'completed-book';
    else if (isReading) statusClass = 'reading-book';
    
    card.className = `book-card ${statusClass}`;
    
    card.innerHTML = `
        <div class="book-header">
            <h3 class="book-title">${book.title}</h3>
            <span class="week-badge">${book.week}주차</span>
        </div>
        <p class="book-description">${book.description}</p>
        
        <!-- 책 상태 표시 -->
        <div class="book-status">
            ${isCompleted ? 
                '<span class="status-badge completed"><i class="fas fa-check-circle"></i> 완료</span>' :
                isReading ? 
                '<span class="status-badge reading"><i class="fas fa-book-open"></i> 읽는 중</span>' :
                '<span class="status-badge not-started"><i class="fas fa-clock"></i> 시작 전</span>'
            }
            ${hasNotes ? '<span class="status-badge notes"><i class="fas fa-sticky-note"></i> 노트 있음</span>' : ''}
        </div>
        
        <div class="book-actions">
            ${!isCompleted && !isReading ? 
                `<button class="action-btn read-btn" onclick="markAsReading('${book.title}')">
                    <i class="fas fa-book-open"></i> 읽기 시작
                </button>` : ''
            }
            ${isReading ? 
                `<button class="action-btn reading-btn" onclick="stopReading('${book.title}')">
                    <i class="fas fa-pause"></i> 읽기 중단
                </button>` : ''
            }
            ${!isCompleted ? 
                `<button class="action-btn complete-btn" onclick="toggleBookCompletion('${book.title}')">
                    <i class="fas fa-check"></i> 완료
                </button>` : ''
            }
            ${isCompleted ? 
                `<button class="action-btn completed" onclick="toggleBookCompletion('${book.title}')">
                    <i class="fas fa-check"></i> 완료됨
                </button>` : ''
            }
            <button class="action-btn notes-btn" onclick="openBookNotes('${book.title}')">
                <i class="fas fa-edit"></i> ${hasNotes ? '노트 보기' : '노트 작성'}
            </button>
        </div>
    `;
    
    return card;
}

// 책 읽기 시작
function markAsReading(bookTitle) {
    if (!readingBooks.includes(bookTitle)) {
        readingBooks.push(bookTitle);
        localStorage.setItem('readingBooks', JSON.stringify(readingBooks));
        alert(`"${bookTitle}" 읽기를 시작합니다!`);
        renderBooks();
        updateStats();
    }
}

// 책 읽기 중단
function stopReading(bookTitle) {
    const index = readingBooks.indexOf(bookTitle);
    if (index > -1) {
        readingBooks.splice(index, 1);
        localStorage.setItem('readingBooks', JSON.stringify(readingBooks));
        alert(`"${bookTitle}" 읽기를 중단했습니다.`);
        renderBooks();
        updateStats();
    }
}

// 현재 편집 중인 책 제목
let currentEditingBook = '';

// 책 노트 열기
function openBookNotes(bookTitle) {
    currentEditingBook = bookTitle;
    const currentNote = bookNotes[bookTitle] || '';
    
    // 모달 제목 설정
    document.getElementById('noteModalTitle').textContent = `"${bookTitle}" 노트 작성`;
    
    // 텍스트 영역에 현재 노트 내용 설정
    const textarea = document.getElementById('noteTextarea');
    textarea.value = currentNote;
    
    // 글자 수 업데이트
    updateCharCount();
    
    // 모달 표시
    document.getElementById('noteModal').style.display = 'block';
    
    // 텍스트 영역에 포커스
    textarea.focus();
}

// 노트 모달 닫기
function closeNoteModal() {
    document.getElementById('noteModal').style.display = 'none';
    currentEditingBook = '';
}

// 노트 저장
function saveNote() {
    if (!currentEditingBook) return;
    
    const noteText = document.getElementById('noteTextarea').value;
    
    if (noteText.length <= 2000) {
        bookNotes[currentEditingBook] = noteText;
        localStorage.setItem('bookNotes', JSON.stringify(bookNotes));
        
        // 성공 메시지 표시
        showSuccessMessage('노트가 저장되었습니다!');
        
        // 모달 닫기
        closeNoteModal();
        
        // UI 업데이트
        renderBooks();
    } else {
        alert('노트는 2000자를 초과할 수 없습니다.');
    }
}

// 글자 수 업데이트
function updateCharCount() {
    const textarea = document.getElementById('noteTextarea');
    const charCount = textarea.value.length;
    document.getElementById('currentCharCount').textContent = charCount;
    
    // 글자 수에 따른 색상 변경
    const charCountElement = document.getElementById('currentCharCount');
    if (charCount > 1800) {
        charCountElement.style.color = '#f44336'; // 빨간색
    } else if (charCount > 1500) {
        charCountElement.style.color = '#ff9800'; // 주황색
    } else {
        charCountElement.style.color = '#667eea'; // 기본색
    }
}

// 성공 메시지 표시
function showSuccessMessage(message) {
    // 간단한 토스트 메시지 생성
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        toast.remove();
    }, 3000);
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
    const readingCount = readingBooks.length;
    const currentWeekCount = currentWeek === 'all' ? totalBooks : (booksData[currentWeek] || []).length;
    const completionRateValue = totalBooks > 0 ? Math.round((completedCount / totalBooks) * 100) : 0;
    
    totalBooksCount.textContent = totalBooks;
    completedBooksCount.textContent = completedCount;
    currentWeekBooks.textContent = readingCount;
    completionRate.textContent = `${completionRateValue}%`;
}

// 통계 카드 클릭 이벤트 추가
function addStatsCardClickEvents() {
    // 완료된 책 카드 클릭 시 완료된 책만 보기
    completedBooksCount.parentElement.addEventListener('click', () => {
        if (completedBooks.length > 0) {
            // 필터 버튼 활성화
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const completedFilterBtn = document.querySelector('[data-filter="completed"]');
            if (completedFilterBtn) completedFilterBtn.classList.add('active');
            
            // 필터 적용
            currentFilter = 'completed';
            
            // 전체 주차로 설정 (완료된 책은 모든 주차에 있을 수 있음)
            weekButtons.forEach(btn => btn.classList.remove('active'));
            const allWeekBtn = document.querySelector('[data-week="all"]');
            if (allWeekBtn) allWeekBtn.classList.add('active');
            currentWeek = 'all';
            
            // 통계 업데이트
            updateStats();
            
            // 책 목록 렌더링
            renderBooks();
            
            // 성공 메시지 표시
            showSuccessMessage(`${completedBooks.length}권의 완료된 책을 표시합니다`);
        }
    });
    
    // 읽는 중인 책 카드 클릭 시 읽는 중인 책만 보기
    currentWeekBooks.parentElement.addEventListener('click', () => {
        if (readingBooks.length > 0) {
            // 필터 버튼 활성화
            filterButtons.forEach(btn => btn.classList.remove('active'));
            const readingFilterBtn = document.querySelector('[data-filter="reading"]');
            if (readingFilterBtn) readingFilterBtn.classList.add('active');
            
            // 필터 적용
            currentFilter = 'reading';
            
            // 전체 주차로 설정 (읽는 중인 책은 모든 주차에 있을 수 있음)
            weekButtons.forEach(btn => btn.classList.remove('active'));
            const allWeekBtn = document.querySelector('[data-week="all"]');
            if (allWeekBtn) allWeekBtn.classList.add('active');
            currentWeek = 'all';
            
            // 통계 업데이트
            updateStats();
            
            // 책 목록 렌더링
            renderBooks();
            
            // 성공 메시지 표시
            showSuccessMessage(`${readingBooks.length}권의 읽는 중인 책을 표시합니다`);
        }
    });
    
    // 전체 책 카드 클릭 시 전체 보기
    totalBooksCount.parentElement.addEventListener('click', () => {
        // 필터 버튼 활성화
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allFilterBtn = document.querySelector('[data-filter="all"]');
        if (allFilterBtn) allFilterBtn.classList.add('active');
        
        // 필터 적용
        currentFilter = 'all';
        
        // 전체 주차로 설정
        weekButtons.forEach(btn => btn.classList.remove('active'));
        const allWeekBtn = document.querySelector('[data-week="all"]');
        if (allWeekBtn) allWeekBtn.classList.add('active');
        currentWeek = 'all';
        
        // 통계 업데이트
        updateStats();
        
        // 책 목록 렌더링
        renderBooks();
        
        // 성공 메시지 표시
        showSuccessMessage('모든 책을 표시합니다');
    });
}

// PWA Service Worker 등록
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
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
    
    // 통계 카드 클릭 이벤트 추가
    addStatsCardClickEvents();
    
    // 노트 모달 이벤트 리스너 추가
    addNoteModalEventListeners();
});

// 노트 모달 이벤트 리스너 추가
function addNoteModalEventListeners() {
    // 텍스트 영역 입력 이벤트
    const textarea = document.getElementById('noteTextarea');
    textarea.addEventListener('input', updateCharCount);
    
    // 모달 외부 클릭 시 닫기
    const modal = document.getElementById('noteModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeNoteModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeNoteModal();
        }
    });
}

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
