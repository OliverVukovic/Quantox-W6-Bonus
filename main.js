

/*

const query = document.getElementById('query');
const photo = document.getElementsByClassName('photos')[0];

window.addEventListener('load', dayNightMode)

search.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
    loadImages();
})

function loadImages(){
    removeImages();

    const url = 'https://api.unsplash.com/search/photos/?query='+search.value+'&per_page=9&client_id=o0n0fKYBfRdWBbNpqpcAPS86Mq_KcFB5xYEdKGVJQus';

    fetch(url)

    .then(response => {
                                     /*console.log(response);*/ /*
        if(response.ok)
            return response.json();
        else
            alert(response.status)
})

    .then(data => {
        const imageNodes = [];
        
        for(let i = 0; i < data.results.length; i++){
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.download, '_blank');
            })
            photos.appendChild(imageNodes[i]);
        }
    })

}


 ----------------------------------------- */




window.addEventListener('load', dayNightMode)

function dayNightMode(){
    const date = new Date();
    const hour = date.getHours();

    if(hour >= 7 && hour <= 19){            /* try || */ 
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}








 /* ----------------------------------------- */


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
            let slika = document.createElement('div')
            let result = `
            <img src="${photo.urls.regular}">
            <a href="${photo.links.download}">
            `;
            
            slika.innerHTML = result;

           document.getElementById("result").appendChild(slika)
            // $("#result").append(result);
            
        });
    });
}

const query = document.getElementById('query');
const photo = document.getElementsByClassName('photos')[0];


function removeImages(){
    let result = ``;
}
