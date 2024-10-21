const demID = document.getElementById("demo");
demID.style.border = "1px solid purple";

const demClass = document.getElementsByClassName("demo");
for (let i=0; i<demClass.length; i++) {
demClass[i].style.border = "1px solid orange";
}

const demTag = document.getElementsByTagName("article");
for (i=0; i<demTag.length; i++) {
    demTag[i].style.border = "1px solid blue";
}

const demoQuery = document.querySelector('#demo-query');

const demoQueryAll = document.querySelectorAll ('.demo-query-all');
demoQueryAll.forEach(query);
function query (e) {
    e.style.border = '1px solid green';
}