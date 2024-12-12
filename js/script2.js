const menuItems = document.querySelectorAll('#nawigacja ul li a');
menuItems.forEach(item => {
    item.onmouseover = () => {
        item.style.backgroundColor = '#00cc66';
    };
    item.onmouseout = () => {
        item.style.backgroundColor = '';
    };
});
