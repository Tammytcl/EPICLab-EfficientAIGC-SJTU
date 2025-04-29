// 将此代码添加到HTML页面底部或一个单独的JS文件中
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航项目
    const navItems = document.querySelectorAll('#navigation > a.nav_item');

    // 获取当前页面URL
    const currentPage = window.location.pathname.split('/').pop();

    // 为每个导航项目添加点击事件
    navItems.forEach(item => {
        // 检查是否是当前页面
        if(item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }

        // 添加点击事件
        item.addEventListener('click', function() {
            // 移除所有active类
            navItems.forEach(nav => {
                nav.classList.remove('active');
            });

            // 添加active类到被点击的项目
            this.classList.add('active');
        });
    });
});