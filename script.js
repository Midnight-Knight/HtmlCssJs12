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

let div = new Array(6);
for (i = 0; i < 6; i++)
{
    div[i] = document.createElement("div");
}
div[0].innerHTML = "Маша отмечает 30-й<br>День рождения";
div[1].innerHTML = "Паша отмечает 42-й<br>День рождения";
div[2].innerHTML = "Саша отмечает 19-й<br>День рождения";
div[3].innerHTML = "Даша отмечает 26-й<br>День рождения";
div[4].innerHTML = "Петя отмечает 23-й<br>День рождения";
div[5].innerHTML = "Вася отмечает 15-й<br>День рождения";
for(i = 0; i < 6; i++)
{
    div[i].style.cssText = 'width: 20vmin; height: 10vmin; color: white; display: flex; justify-content: center; align-items: center;border-radius: 2vmin; background: linear-gradient(45deg, rgb(255, 0, 251), rgb(17, 0, 255)); margin: 1vmin; text-align: center;';
    document.getElementById("section-1").appendChild(div[i]);
}

/* section-2 */