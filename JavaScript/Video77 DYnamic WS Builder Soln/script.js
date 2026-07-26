function createcard(title, cname, views, monthsold, duration, thumbnail){
    //finish this func
    let viewstr
    if (views<100000){
        viewstr = views/1000 + "K";
    }

    else if (views<1000000){
        viewstr = views/100000 + "M";
    }

    else{
        viewstr = views/1000 + "K";
    }


    let html = `<div class="container">

        <div class="card">

            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr} views . ${monthsold}months ago</p>
            </div>

        </div>

    </div> `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createcard("Introduction to java", "codewithharry", 56000, 7, "31:06", "ss2.png")