// let url;

// 9abf08e35f464d07a33270d027747eb3
// function showNews(args){
//     if(args === "1"){
//         url = "https://newsapi.org/v2/everything?q=Apple&from=2022-09-23&sortBy=popularity&apiKey=9abf08e35f464d07a33270d027747eb3";
//         console.log(url);
//     }
//     else if(args === "2"){
//         url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9abf08e35f464d07a33270d027747eb3"
//     }
//     else if(args === "3"){
//         url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9abf08e35f464d07a33270d027747eb3"
//     }
// }

const gettingNewsApi = async () => {
    try {
        let url = "https://newsapi.org/v2/everything?q=Apple&from=2022-09-23&sortBy=popularity&apiKey=9abf08e35f464d07a33270d027747eb3";
        const news = await fetch(url);
        if (news) {
            news.json().then((data) => {
                // console.log(data.articles);
                displayNews(data.articles)
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

gettingNewsApi();


// console.log("hello");
var id = 0;
const displayNews = (articles) => {
    for (let key in articles) {
        var mainContainer = document.querySelector(".main-container");

        // Creating image box inside container
        var pic = document.createElement("div");
        pic.setAttribute("class", "pic");
        mainContainer.appendChild(pic);

        var backImage = document.createElement("img");
        backImage.setAttribute("src", articles[id].urlToImage);
        pic.appendChild(backImage);

        var box = document.createElement("div");
        box.setAttribute("class", "box");
        mainContainer.appendChild(box);

        var author = document.createElement("h2");
        box.appendChild(author);
        if(articles[id].author === null){
            author.innerHTML = "Author Is Anonymous"
        }
        else{
        author.innerHTML = "The Name Of Author Is: "+articles[id].author;
        }
        // var breaker = document.createElement("br");
        // box.appendChild(breaker);

        var title = document.createElement("h2");
        title.innerHTML = "Title: "+articles[id].title;
        box.appendChild(title);

        var description = document.createElement("h3");
        description.innerHTML = "Descriptions: "+articles[id].description;
        box.appendChild(description);

        var url = document.createElement("a");
        url.setAttribute("href", articles[id].url);
        url.setAttribute("target", "_blank");
        url.innerHTML = articles[id].url;
        box.appendChild(url);

        var pubTime = document.createElement("h2");
        pubTime.innerHTML = "Published At: "+articles[id].publishedAt;
        box.appendChild(pubTime);

        var content = document.createElement("h4");
        content.innerHTML = articles[id].content;
        box.appendChild(content);
        id++;
    }
}


