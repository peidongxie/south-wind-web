if (!navigator.language || navigator.language === 'zh-CN') {
    if (location.href.indexOf('southwind') !== -1) {
        location.href = location.href.replace('southwind', 'jmnf');
    }
} else {
    if (location.href.indexOf('jmnf') !== -1) {
        location.href = location.href.replace('jmnf', 'southwind');
    }
}
