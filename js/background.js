const randomImgNumber = Math.floor(Math.random() * 8);
const bgImg = document.createElement("img");

bgImg.src = `../resource/img/${randomImgNumber}.jpg`;
console.log(bgImg);

document.body.appendChild(bgImg);