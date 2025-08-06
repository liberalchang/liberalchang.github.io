// 章节页面JavaScript功能

// 更新阅读进度
function updateReadingProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    let progressBar = document.getElementById('reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + '%';
}

// 平滑滚动
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 键盘导航
function setupKeyboardNavigation(currentChapter, totalChapters) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentChapter > 1) {
            const prevChapter = String(currentChapter - 1).padStart(2, '0');
            window.location.href = `chapter_${prevChapter}.html`;
        } else if (e.key === 'ArrowRight' && currentChapter < totalChapters) {
            const nextChapter = String(currentChapter + 1).padStart(2, '0');
            window.location.href = `chapter_${nextChapter}.html`;
        } else if (e.key === 'Escape') {
            window.location.href = 'index.html';
        }
    });
}

// 生成目录
function generateTOC() {
    const toc = document.getElementById('toc');
    if (!toc) return;
    
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.style.paddingLeft = `${(parseInt(heading.tagName.charAt(1)) - 1) * 10}px`;
        
        li.appendChild(a);
        toc.appendChild(li);
    });
}

// 初始化页面功能
function initChapterPage(chapterNumber = 1, totalChapters = 81) {
    // 页面加载完成后执行
    window.addEventListener('load', function() {
        updateReadingProgress();
        smoothScroll();
        generateTOC();
        setupKeyboardNavigation(chapterNumber, totalChapters);
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', updateReadingProgress);
}

// 导出函数供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateReadingProgress,
        smoothScroll,
        setupKeyboardNavigation,
        generateTOC,
        initChapterPage
    };
}