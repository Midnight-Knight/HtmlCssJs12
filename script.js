const Lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quam modi dolore et odit nemo, ex recusandae officiis iusto culpa suscipit id. Nulla minima voluptate quo quas reiciendis odit est doloremque recusandae necessitatibus, consequatur architecto repellat, velit impedit, obcaecati vitae. Facilis, sit laudantium cum adipisci inventore tempora at, repellendus, itaque nostrum necessitatibus consequuntur ex deserunt."

/* home */

let Picture = false;

function PictureF()
{
    if (Picture == false)
    {
        Picture = true;
        console.log("New status: ", Picture);
        document.getElementById("Pict").src="flower.png";
    }
    else
    {
        Picture = false;
        console.log("New status: true");
        document.getElementById("Pict").src="alpine-forget-me-not.png";
    }
}

/* section-1 */

let div1 = new Array(6);
for (i = 0; i < 6; i++)
{
    div1[i] = document.createElement("div");
}
div1[0].innerHTML = "Маша отмечает 30-й<br>День рождения";
div1[1].innerHTML = "Паша отмечает 42-й<br>День рождения";
div1[2].innerHTML = "Саша отмечает 19-й<br>День рождения";
div1[3].innerHTML = "Даша отмечает 26-й<br>День рождения";
div1[4].innerHTML = "Петя отмечает 23-й<br>День рождения";
div1[5].innerHTML = "Вася отмечает 15-й<br>День рождения";
for(i = 0; i < 6; i++)
{
    div1[i].style.cssText = 'width: 20vmin; height: 10vmin; color: white; display: flex; justify-content: center; align-items: center;border-radius: 2vmin; background: linear-gradient(45deg, rgb(255, 0, 251), rgb(17, 0, 255)); margin: 1vmin; text-align: center;';
    document.getElementById("section-1").appendChild(div1[i]);
}

/* section-2 */

let text = new Array(3);
let shadow = new Array(3);
for (i = 0; i < 3; i++)
{
    text[i] = document.createElement("div");
    shadow[i] = document.createElement("div");
    text[i].innerHTML = Lorem;
    text[i].className = "shadow";
    text[i].style.cssText = "transition: 2s; font-size: 2vmin; height: 23vmin; overflow: hidden; margin-bottom: 2vmin; color: white; display: flex; justify-content: center; align-items: flex-start;";
    shadow[i].style.cssText = "transition: 2s; z-index: 3; position: absolute; transform: translateY(16vmin); height: 7vmin; width: 30vmin; background: linear-gradient(0deg, rgba(121, 121, 121,0.9), rgba(121, 121, 121,0.8), rgba(121, 121, 121,0.7), rgba(121, 121, 121,0.6), rgba(121, 121, 121,0.5), rgba(121, 121, 121,0.4), rgba(121, 121, 121,0.3), rgba(121, 121, 121,0.2), rgba(121, 121, 121,0.1), rgba(121, 121, 121,0));"
    shadow[i].style.opacity = 1;
}
const PCHand = document.getElementsByClassName('Section2Div');
for (i = 0; i < PCHand.length; i++)
{
    PCHand[i].after(text[i]);
}
const PCshadow = document.getElementsByClassName('shadow');
for (i = 0; i < PCHand.length; i++)
{
    PCshadow[i].appendChild(shadow[i]);
}

let textBigdiv = [false,false,false];
const PCdivTextBig = document.getElementsByClassName('divTextBig');
const PCdivTextBigBut = document.getElementsByClassName('textBigdivBut');

function textBigdivF(num)
{
    if(textBigdiv[num] == false)
    {
        text[num].style.cssText = "transition: 2s; font-size: 2vmin; height: 33vmin; overflow: hidden; margin-bottom: 2vmin; color: white; display: flex; justify-content: center; align-items: flex-start;";
        PCdivTextBig[num].style.cssText = "width: 30vmin; height: 60vmin; background-color: rgb(121, 121, 121); padding-left: 2vmin; padding-top: 1vmin; padding-bottom: 1vmin; padding-right: 2vmin; margin: 2vmin; transition: 2s;";
        shadow[num].style.opacity = 0;
        shadow[num].style.transform = "translateY(26vmin)";
        PCdivTextBigBut[num].innerHTML = "Скрыть";
        PCdivTextBigBut[num].style.background = "rgb(255, 34, 126)";
        PCdivTextBigBut[num].style.color = "white";
        textBigdiv[num] = true;
    }
    else
    {
        text[num].style.cssText = "transition: 2s; font-size: 2vmin; height: 23vmin; overflow: hidden; margin-bottom: 2vmin; color: white; display: flex; justify-content: center; align-items: flex-start;";
        PCdivTextBig[num].style.cssText = "width: 30vmin; height: 50vmin; background-color: rgb(121, 121, 121); padding-left: 2vmin; padding-top: 1vmin; padding-bottom: 1vmin; padding-right: 2vmin; margin: 2vmin; transition: 2s;";
        shadow[num].style.opacity = 1;
        shadow[num].style.transform = "translateY(16vmin)";
        PCdivTextBigBut[num].innerHTML = "Подробнее";
        PCdivTextBigBut[num].style.background = "rgb(85, 255, 70)";
        PCdivTextBigBut[num].style.color = "black";
        textBigdiv[num] = false;
    }
}

/* section-3 */

let cssLine = "width: 15vmin; height: 2vmin; background: linear-gradient(90deg, rgb(93, 0, 255), rgb(247, 0, 255)); border-radius: 2vmin; margin: 0 3vmin; overflow: hidden; transition: 2s; transform: ";

function mouseF(idS)
{
    if (idS == "h")
    {
        console.log("Наведение есть h");
        document.getElementById('line').style.cssText = cssLine + "translateX(0vmin);";
    }
    else if(idS == "rone")
    {
        console.log("Наведение есть r1");
        document.getElementById('line').style.cssText = cssLine + "translateX(21vmin);";
    }
    else if(idS == "rtwo")
    {
        console.log("Наведение есть r2");
        document.getElementById('line').style.cssText = cssLine + "translateX(42vmin);";
    }
    else if(idS == "rthree")
    {
        console.log("Наведение есть r3");
        document.getElementById('line').style.cssText = cssLine + "translateX(63vmin);";
    }
    else if(idS == "rfour")
    {
        console.log("Наведение есть r4");
        document.getElementById('line').style.cssText = cssLine + "translateX(84vmin);";
    }
}

function mouseReturn()
{
    console.log("Наведение нету");
    document.getElementById('line').style.cssText = cssLine + "translateX(-100vmin);";
}

/* section-4 */

function glass(num)
{
    if (num == 1)
    {
        document.getElementById('rgbblock').style.opacity = "1";
        document.getElementById('rgbblock').style.transform = "translateX(-28vmin)";
        document.getElementById('rgbblock').style.backgroundColor = "red";
        document.getElementById('rgbblock').style.boxShadow = "0 2vmin 4vmin rgba(255,0,0,0.25), 0 2vmin 2vmin rgba(255,0,0,0.22)";
    }
    else if(num == 2)
    {
        document.getElementById('rgbblock').style.opacity = "1";
        document.getElementById('rgbblock').style.transform = "translateX(-14vmin)";
        document.getElementById('rgbblock').style.backgroundColor = "yellow";
        document.getElementById('rgbblock').style.boxShadow = "0 2vmin 4vmin rgba(255,255,0,0.25), 0 2vmin 2vmin rgba(255,255,0,0.22)";
    }
    else if(num == 3)
    {
        document.getElementById('rgbblock').style.opacity = "1";
        document.getElementById('rgbblock').style.transform = "translateX(0vmin)";
        document.getElementById('rgbblock').style.backgroundColor = "white";
        document.getElementById('rgbblock').style.boxShadow = "0 2vmin 4vmin rgba(255,255,255,0.25), 0 2vmin 2vmin rgba(255,255,255,0.22)";
    }
    else if(num == 4)
    {
        document.getElementById('rgbblock').style.opacity = "1";
        document.getElementById('rgbblock').style.transform = "translateX(14vmin)";
        document.getElementById('rgbblock').style.backgroundColor = "green";
        document.getElementById('rgbblock').style.boxShadow = "0 2vmin 4vmin rgba(0,255,0,0.25), 0 2vmin 2vmin rgba(0,255,0,0.22)";
    }
    else if(num == 5)
    {
        document.getElementById('rgbblock').style.opacity = "1";
        document.getElementById('rgbblock').style.transform = "translateX(28vmin)";
        document.getElementById('rgbblock').style.backgroundColor = "blue";
        document.getElementById('rgbblock').style.boxShadow = "0 2vmin 4vmin rgba(0,0,255,0.25), 0 2vmin 2vmin rgba(0,0,255,0.22)";
    }
}

/* section-5 */

function openmenu()
{
    document.getElementById('menu').style.right = "1%";
}

function closemenu()
{
    document.getElementById('menu').style.right = "-50%";
}

function glassReturn()
{
    document.getElementById('rgbblock').style.opacity = "0";
    document.getElementById('rgbblock').style.transform = "translateX(0vmin)";
}

/* section-6 */

let boolClick = false;
function bylikclick()
{
    let elemBylik = document.querySelectorAll('.bylik');
    let elemZero = document.querySelectorAll('.zerobylik');
    if (boolClick == false)
    {
        boolClick = true;
        for (i = 0; i < elemBylik.length; ++i)
        {
            elemBylik[i].style.opacity = "1";
        }
        for (i = 0; i < elemZero.length; ++i)
        {
            elemZero[i].style.opacity = "1";
        }
    }
    else
    {
        boolClick = false;
        for (i = 0; i < elemBylik.length; ++i)
        {
            elemBylik[i].style.opacity = "0";
        }
        for (i = 0; i < elemZero.length; ++i)
        {
            elemZero[i].style.opacity = "0";
        }
    }
    console.log(boolClick);
}