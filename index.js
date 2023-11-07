const next = document.getElementById('right')
const prev = document.getElementById('left')
const imgs = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let idx = 0

function changeImage(idx) {
    if(idx>img.length -1 ) {
        idx = 0
    }else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

next.addEventListener('click',()=>{
    if(idx < img.length - 1) {
        idx++;
    }else{
        idx = 0;
    }
    changeImage(idx)
})

prev.addEventListener('click',()=>{
    if(idx == 0){
        idx = img.length - 1;
    }else{
        idx--;
    }
    changeImage(idx)
})




const item1btn = document.getElementById('item1-btn');
const item2btn = document.getElementById('item2-btn');
const item3btn = document.getElementById('item3-btn');

item1btn.addEventListener("click", () => {
    console.log("hello");
    idx = 0; // Set the index to the desired item
    changeImage(idx)
    console.log(img);
});



item2btn.addEventListener("click", () => {
    console.log("hello");
    idx = 1; // Set the index to the desired item
    changeImage(idx)
});



item3btn.addEventListener("click", () => {
    console.log("hello");
    idx = 2; // Set the index to the desired item
    changeImage(idx)
});