// -------  night mode --------


window.addEventListener('load', dayNightMode)

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}



 // ------- load photos --------- 


function loadImages() {
    removeImages()

    let clientId = "o0n0fKYBfRdWBbNpqpcAPS86Mq_KcFB5xYEdKGVJQus";
    let query = document.getElementById("query").value;
    let url = "https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;

    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        console.log(data);

        data.results.forEach(photo => {
            let picture = document.createElement('div')
            let result = `
            <img src="${photo.urls.regular}">
            <a href="${photo.links.download}">
            `;
            
            picture.innerHTML = result;

           document.getElementById("result").appendChild(picture)
        });
    });
}

const query = document.getElementById('query');
const photo = document.getElementsByClassName('photos')[0];


function removeImages(){
    let result = ``;
}
