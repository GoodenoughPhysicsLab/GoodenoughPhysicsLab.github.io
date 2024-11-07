function get_tutorial_msg() {
    return fetch("https://gitee.com/api/v5/repos/script2000/phy-tutorial/contents/《教程》—目录.txt")
        .then(r => r.json())
        .then(o => fetch('data:text/plain;base64,'+o.content))
        .then(r => r.text())
}
