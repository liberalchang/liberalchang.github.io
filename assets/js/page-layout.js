// Jekyll页面布局JavaScript功能

// 添加键盘导航支持
function setupPageKeyboardNavigation(currentNum, baseUrl) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentNum > 1) {
            const prevChapter = String(currentNum - 1).padStart(2, '0');
            window.location.href = `${baseUrl}/chapter_${prevChapter}.html`;
        } else if (e.key === 'ArrowRight' && currentNum < 81) {
            const nextChapter = String(currentNum + 1).padStart(2, '0');
            window.location.href = `${baseUrl}/chapter_${nextChapter}.html`;
        } else if (e.key === 'Escape') {
            window.location.href = `${baseUrl}/`;
        }
    });
}

// 添加阅读进度指示
function updatePageReadingProgress() {
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
            width: ${scrollPercent}%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    } else {
        progressBar.style.width = scrollPercent + '%';
    }
}

// 初始化页面布局功能
function initPageLayout(chapterNumber, baseUrl) {
    // 设置键盘导航
    if (chapterNumber && baseUrl !== undefined) {
        setupPageKeyboardNavigation(chapterNumber, baseUrl);
    }
    
    // 设置阅读进度
    window.addEventListener('scroll', updatePageReadingProgress);
    window.addEventListener('load', updatePageReadingProgress);
}

// 导出函数供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setupPageKeyboardNavigation,
        updatePageReadingProgress,
        initPageLayout
    };
}