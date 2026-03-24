"use strict"
const renderNewsList = (data, selectPlaceholder, count = 2) => {
    const place = document.querySelector(selectPlaceholder);
    if (!place) {
        throw new Error("place in renderNewsList is not defined");
    }
    const arrNews = data.news;
    
    arrNews.forEach(element => {
        console.log(element.createdAt);
        const day = new Date(element.createdAt).getDate();
        const mount = new Date(element.createdAt).getMonth();
        console.log(day, mount);
    });
}
export default renderNewsList;