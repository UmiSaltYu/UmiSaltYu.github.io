const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');
const floatBtn = document.getElementById('floatBtn');
const friends = document.getElementById('friends');
const notices = document.getElementById('notices');


let lastScrollY = 0;

// 菜单符号点击事件
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

friends.addEventListener('click', () => {
    notices.classList.toggle('active');
    overlay2.classList.toggle('active');
});
// 得加上第二层遮罩
// 遮罩层点击事件
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
overlay2.addEventListener('click', () => {
    notices.classList.remove('active');
    overlay2.classList.remove('active');
});

// 侧边栏按钮点击事件
document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// 检测滑动方向
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // 向下滑动时显示悬浮按钮（除菜单按钮外）
    if (currentScrollY < lastScrollY) {
        floatBtn.classList.remove('hidden');
    } 
    // 向上滑动时隐藏悬浮按钮（菜单按钮始终可见）
    else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        floatBtn.classList.add('hidden');
    }
    
    lastScrollY = currentScrollY;
}, { passive: true });
