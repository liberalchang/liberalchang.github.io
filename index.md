---
layout: default
title: "道德经 - 老子智慧经典"
description: "《道德经》全文八十一章，包含原文、拼音标注和详细释义"
---

<style>
.tao-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.tao-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.tao-header h1 {
  font-size: 3em;
  margin: 0;
  font-weight: 300;
  letter-spacing: 2px;
}

.tao-header p {
  font-size: 1.2em;
  margin: 10px 0 0 0;
  opacity: 0.9;
}

.tao-intro {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 5px solid #667eea;
}

.tao-intro h2 {
  color: #333;
  margin-bottom: 15px;
}

.tao-intro p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1em;
}

.chapters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.chapter-section {
  background: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.chapter-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.section-title {
  font-size: 1.4em;
  color: #667eea;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  border-bottom: 2px solid #667eea;
  padding-bottom: 10px;
}

.chapter-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}

.chapter-link {
  display: block;
  padding: 12px 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #495057;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #dee2e6;
}

.chapter-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.stats-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  display: block;
}

.stat-label {
  font-size: 1.1em;
  opacity: 0.9;
}

.footer-info {
  text-align: center;
  padding: 30px;
  background: #343a40;
  color: white;
  border-radius: 10px;
  margin-top: 40px;
}

@media (max-width: 768px) {
  .tao-header h1 {
    font-size: 2em;
  }
  
  .chapters-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-list {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
</style>

<div class="tao-container">
  <div class="tao-header">
    <h1>道德经</h1>
    <p>老子智慧经典 · 八十一章完整版</p>
  </div>

  <div class="tao-intro">
    <h2>关于《道德经》</h2>
    <p>《道德经》是中国古代哲学经典，相传为春秋时期老子所著。全书共八十一章，分为上下两篇，上篇为"道经"，下篇为"德经"。本站提供完整的原文、拼音标注和详细释义，帮助读者深入理解老子的哲学思想。</p>
  </div>

  <div class="stats-section">
    <h2>经典统计</h2>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">81</span>
        <span class="stat-label">章节总数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">37</span>
        <span class="stat-label">道经章数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">44</span>
        <span class="stat-label">德经章数</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5000+</span>
        <span class="stat-label">字数约计</span>
      </div>
    </div>
  </div>

  <div class="chapters-grid">
    <div class="chapter-section">
      <div class="section-title">道经 (第1-37章)</div>
      <div class="chapter-list">
        {% for i in (1..37) %}
          <a href="chapter_{{ i | prepend: '00' | slice: -2, 2 }}.html" class="chapter-link">第{{ i }}章</a>
        {% endfor %}
      </div>
    </div>

    <div class="chapter-section">
      <div class="section-title">德经 (第38-81章)</div>
      <div class="chapter-list">
        {% for i in (38..81) %}
          <a href="chapter_{{ i | prepend: '00' | slice: -2, 2 }}.html" class="chapter-link">第{{ i }}章</a>
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="footer-info">
    <h3>使用说明</h3>
    <p>点击上方章节链接即可阅读对应章节的详细内容。每个章节都包含原文、拼音标注和现代释义，帮助您更好地理解老子的哲学思想。</p>
    <p style="margin-top: 20px; opacity: 0.8;">本站基于Jekyll构建，支持响应式设计，可在各种设备上完美显示。</p>
  </div>
</div>