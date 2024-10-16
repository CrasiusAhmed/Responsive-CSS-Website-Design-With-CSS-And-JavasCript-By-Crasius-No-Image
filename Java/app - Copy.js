let iconJohn = document.getElementById('icon1')
let iconZack = document.getElementById('icon2')
let iconSara = document.getElementById('icon3')
let icontext = document.querySelector('.icon3')

let lineOne = document.getElementById('line1')
let lineTwo = document.getElementById('line2')

let circleOne = document.getElementById('circle1')
let circleTwo = document.getElementById('circle2')
let circleThree = document.getElementById('circle3')


window.addEventListener("scroll",() =>{
    let content = document.querySelector('.light');
    let contentPosition = content.getBoundingClientRect().top;
    let screentPosition = window.innerHeight /1.2;
    if (contentPosition < screentPosition) {
        content.classList.add('active');
    } else
    {
        content.classList.remove('active');
    }
});

let johnPage = document.getElementById('John')
let zackPage = document.getElementById('Zack')
let saraPage = document.getElementById('Sara')


let f1Box = document.querySelector('.f1-box')
let dataBase = document.querySelector('.data-base')
let channelText = document.getElementById('channel-text')


let lineF1 = document.querySelector('.line-f1')



let bgBox1 = document.querySelector('.bg-box1')
let bgBox2 = document.querySelector('.bg-box2')
let bgBox3 = document.querySelector('.bg-box3')
let bgBox4 = document.querySelector('.bg-box4')
let bgBox5 = document.querySelector('.bg-box5')
let bgBox6 = document.querySelector('.bg-box6')
let bgBox7 = document.querySelector('.bg-box7')
let johnText = document.getElementById('john-text')
let cube = document.querySelector('.cube-open')
let cubeH = document.querySelector('.cube')





let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let box5 = document.querySelector('.box5')
let box6 = document.querySelector('.box6')
let box7 = document.querySelector('.box7')
let flexLink = document.querySelector('.flex-link')
let blackSquare = document.querySelector('.black-square2')
let boxClick1 = document.querySelector('.box-click1')
let boxClick2 = document.querySelector('.box-click2')
let boxClick3 = document.querySelector('.box-click3')
let boxClick4 = document.querySelector('.box-click4')
let boxClick5 = document.querySelector('.box-click5')
let boxClick6 = document.querySelector('.box-click6')
let boxClick7 = document.querySelector('.box-click7')
let lineBox1 = document.querySelector('.line-box1')
let lineBox2 = document.querySelector('.line-box2')
let lineBox3 = document.querySelector('.line-box3')
let lineBox4 = document.querySelector('.line-box4')
let lineBox5 = document.querySelector('.line-box5')
let lineBox6 = document.querySelector('.line-box6')
let lineBox7 = document.querySelector('.line-box7')
let lineBox8 = document.querySelector('.line-box8')







circleOne.addEventListener('c')
function John() {
    /* John Page */
    johnPage.style = " z-index: 1;"


    /* Zack Page */
    iconZack.style = "unset"
    lineOne.style = "unset"
    circleTwo.style = "unset"


    zackPage.style = "z-index: -1;"


    /* Sara Page */
    iconSara.style = "unset"
    lineTwo.style = "unset"
    circleThree.style = "unset"

    saraPage.style = "z-index: -1;"
    
    /* animation Page */
    dataBase.style = "unset"
    channelText.style = "unset"

    bgBox1.style = "unset"
    bgBox2.style = "unset"
    bgBox3.style = "unset"
    bgBox4.style = "unset"
    bgBox5.style = "unset"
    bgBox6.style = "unset"
    bgBox7.style = "unset"
    johnText.style = "unset"
    cube.style = "unset"
    cubeH.style = "unset"
}

function Zack() {
    /* John Page */
    johnPage.style = "z-index: -1;;"

    /* Zack Page */
    iconZack.style = "color: white; background: #080a11; box-shadow: inset 0px 0px 12px #219cf3, inset 0px 2px 17px #219cf3;"
    lineOne.style = "background: #f2f7ff;"
    circleTwo.style = "border: 7px solid #f2f7ff; box-shadow: 0px 0px 15px #219cf3, 0px 0px 20px #219cf3, inset 0px 0px 3px #219cf3;"
    zackPage.style = " z-index: 1;"


    /* Sara Page */
    iconSara.style = "unset"
    lineTwo.style = "unset"
    circleThree.style = "unset"
    saraPage.style = "z-index: -1;"

    lineF1.style = "background: #f2f7ff;"
    f1Box.style = "box-shadow: 0px 0px 15px #219cf3, 0px 0px 20px #219cf3; border: 3px solid #f2f7ff; color: white;"

    /* animation Page */
    dataBase.style = "opacity: 1; transform: translateX(0px);"
    channelText.style = "opacity: 1; transform: translateX(0px);"

    bgBox1.style = "unset"
    bgBox2.style = "unset"
    bgBox3.style = "unset"
    bgBox4.style = "unset"
    bgBox5.style = "unset"
    bgBox6.style = "unset"
    bgBox7.style = "unset"

    johnText.style = "opacity: 0; transform: translateX(-70px);"
    cube.style = "opacity: 0; transform: translateX(70px);"
    cubeH.style = "height: 0px;"
}

function Sara() {
    /* John Page */
    johnPage.style = "z-index: -1;"


    /* Zack Page */
    iconZack.style = "color: white; background: #080a11; box-shadow: inset 0px 0px 12px #219cf3, inset 0px 2px 17px #219cf3;"
    lineOne.style = "background: #f2f7ff;"
    circleTwo.style = "border: 7px solid #f2f7ff; box-shadow: 0px 0px 15px #219cf3, 0px 0px 20px #219cf3, inset 0px 0px 3px #219cf3;"
    zackPage.style = "z-index: -1;"


    /* Sara Page */
    iconSara.style = "color: white; background: #080a11; box-shadow: inset 0px 0px 12px #219cf3, inset 0px 2px 17px #219cf3;"
    lineTwo.style = "background: #f2f7ff;"
    circleThree.style = "border: 7px solid #f2f7ff; box-shadow: 0px 0px 15px #219cf3, 0px 0px 20px #219cf3, inset 0px 0px 3px #219cf3;"
    saraPage.style = "z-index: 1;"

    /* animation Page */
    dataBase.style = "unset"
    channelText.style = "unset"
    bgBox1.style = "opacity: 1; transform: translateY(0px);"
    bgBox2.style = "opacity: 1; transform: translateY(0px);"
    bgBox3.style = "opacity: 1; transform: translateX(0px);"
    bgBox4.style = "opacity: 1; transform: translateY(0px);"
    bgBox5.style = "opacity: 1; transform: translateX(0px);"
    bgBox6.style = "opacity: 1; transform: translateY(0px);"
    bgBox7.style = "opacity: 1; transform: translateY(0px);"

    johnText.style = "opacity: 0; transform: translateX(-70px);"
    cube.style = "opacity: 0; transform: translateX(70px);"
    cubeH.style = "height: 0px;"
}















function Page1() {
    box1.style = "transform: scale(2.0) translate(37px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick1.style = "opacity: 1;"
}
function Page2() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: scale(2) translate(260px, 100px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick2.style = "opacity: 1;"
}
function Page3() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: scale(2) translate(-210px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick3.style = "opacity: 1;"
}
function Page4() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: scale(2) translate(260px, -100px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick4.style = "opacity: 1;"
}
function Page5() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: scale(2) translate(-465px, 100px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick5.style = "opacity: 1;"
}
function Page6() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: scale(2.0) translate(0px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick6.style = "opacity: 1;"
}
function Page7() {
    box1.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box2.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box3.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box4.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box5.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box6.style = "transform: translateX(650px); opacity: 0; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    box7.style = "transform: scale(2) translate(-460px, -105px); background: unset; box-shadow: unset; transition: .9s cubic-bezier(0.6, -0.03, 0, 0.74) .2s;"
    lineBox1.style = "width: 0px;"
    lineBox2.style = "width: 0px;"
    lineBox3.style = "width: 0px;"
    lineBox4.style = "width: 0px;"
    lineBox5.style = "width: 0px;"
    lineBox6.style = "width: 0px;"
    lineBox7.style = "width: 0px;"
    lineBox8.style = "width: 0px;"
    flexLink.style = "opacity: 1; cursor: pointer;"
    blackSquare.style = "transform: translateY(-50%) matrix3d(1, 0, 0, 0.01, 1, 1, 0, -0.03, 0, 0, 1, 0, 0, 110, 0, 1); left: 1010px;"
    boxClick7.style = "opacity: 1;"
}

function backPage1() {
    box1.style = "unset"
    box2.style = "unset"
    box3.style = "unset"
    box4.style = "unset"
    box5.style = "unset"
    box6.style = "unset"
    box7.style = "unset"
    lineBox1.style = "unset"
    lineBox2.style = "unset"
    lineBox3.style = "unset"
    lineBox4.style = "unset"
    lineBox5.style = "unset"
    lineBox6.style = "unset"
    lineBox7.style = "unset"
    lineBox8.style = "unset"
    flexLink.style = "opacity: 0; transition: .7s; cursor: default;"
    blackSquare.style = "unset"
    boxClick1.style = "opacity: 0; transition: .3s;"
    boxClick2.style = "opacity: 0; transition: .3s;"
    boxClick3.style = "opacity: 0; transition: .3s;"
    boxClick4.style = "opacity: 0; transition: .3s;"
    boxClick5.style = "opacity: 0; transition: .3s;"
    boxClick6.style = "opacity: 0; transition: .3s;"
    boxClick7.style = "opacity: 0; transition: .3s;"
}
