const local = window.location
$('.enBtn').click(() => {
	window.location = local.pathname+'?lang=en'
})

$('.chBtn').click(() => {
	window.location = local.pathname+'?lang=zh'
})


$(document).ready(function() {
    // 遍历页面中所有的a标签
    $('a').each(function() {

        // 获取当前a标签的href属性值
        let href = $(this).attr('href');
        console.log('href',href)
        // 过滤无效href（如空值、javascript:、#等）
        if (!href || href === '#' || href.startsWith('javascript:')) {
            return; // 跳过当前a标签，继续下一个
        }

        // 判断href中是否包含问号（是否已有参数）
        if (href.indexOf('?') > -1) {
            // 已有参数：追加 &lang=en
            // 额外判断是否已有lang参数，避免重复添加
            if (href.indexOf('lang=') === -1) {
                href += '&lang=en';
            }
        } else {
            // 无参数：添加 ?lang=zh
            href += '?lang=zh';
        }

        // 将处理后的href赋值回a标签
        $(this).attr('href', href);
    });
});
