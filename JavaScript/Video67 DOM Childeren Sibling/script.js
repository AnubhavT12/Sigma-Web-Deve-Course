console.log("hello world")

// hello world

// document.body.childnodes

// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]

// document.body.childNodes[1]
// <div class=​"container">​…​</div>​

// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box1.box, text, div.box2.box, text, div.box3.box, text, div.box4.box, text, div.box5.box, text]

// let = cont  = document.body.childNodes[1]
// <div class=​"container">​…​</div>​

// cont
// <div class=​"container">​…​</div>​

// cont.firstChild
// #text

// cont.lastChild
// #text

// cont.firstElementChild
// <div class=​"box1 box">​this is the 1 div box​</div>​

// cont.lastElementChild
// <div class=​"box5 box">​this is the 5 div box​</div>​

// cont.parentNode
// <body>​…​</body>​