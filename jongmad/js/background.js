const imges = ["1.jpg", "2.jpg", "3.jpg"];
const imgIndexAttribute = 'imgIndex';

/* img tag 생성*/
const img = document.createElement("img");
img.id = "bgimg";
document.body.appendChild(img);

/* 첫번째 img */
function firstRandomImage() {
    const firstImgIndex = Math.floor(Math.random() * imges.length);
    const bgimg = document.getElementById("bgimg");
    bgimg.src = `/images/${imges[firstImgIndex]}`;
}
firstRandomImage();

/* img 변환 */
function getAnotherImageIndex() {
    const firstImgIndex = bgimg.getAttribute(imgIndexAttribute);
    while (true) {
        const newImgIndex = Math.floor(Math.random() * imges.length);
        if (firstImgIndex != newImgIndex) {
            return newImgIndex;
        }
    }
}

function changeImage(newImgIndex) {
    const bgimg = document.getElementById("bgimg");
    bgimg.src = `/images/${imges[newImgIndex]}`;
    bgimg.setAttribute(imgIndexAttribute, newImgIndex);
}

setInterval(function () {
    changeImage(getAnotherImageIndex())
}, 10000);