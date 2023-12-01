import "../css/main.css";
import "../css/scheme.css";

const mostrarLinksMovil = document.querySelector('#bmenu');
const masOpcionesPc = document.querySelector('#bmore');
const linksMovil = document.querySelector('.links');
const linksPc = document.querySelector('.menu');

mostrarLinksMovil.addEventListener('click', function (e) {
    e.preventDefault();
    linksMovil.classList.toggle('show');
})

masOpcionesPc.addEventListener('click', function (e) {
    e.preventDefault();
    linksPc.classList.toggle('show');
})

//* Videos

const videos = [
    { id: "PyMlV5_HRWk" },
    { id: "XCbMVbeKlCg" },
    { id: "Fmdb-KmlzD8" },
    { id: "lOthvD1rMbQ" },
    { id: "nXDk86lQhto" },
];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videoList = document.querySelector('#video-list');
const bNext = document.querySelector('.next');
const bPrev = document.querySelector('.prev');
let current = 0;

bNext.addEventListener('click', (e) => {
    let changed = current;
    current = current + 1 < videos.length ? current + 1 : current;

    if (current !== changed) {
        renderCurrentVideo(videos[current].id);
    }
})

bPrev.addEventListener('click', (e) => {
    let changed = current;
    current = current - 1 >= 0 ? current - 1 : current;
    
    if (current !== changed) {
        renderCurrentVideo(videos[current].id);
    }
})

renderCurrentVideo(videos[current].id);

renderImageVideos();

function renderCurrentVideo (id) { 
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="🔥  Sitio Web con HTML y CSS de Halo usando Flex, dark mode y responsive design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

function renderImageVideos() {
    const html = videos.map((video, index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="http://i3.ytimg.com/vi/${video.id}/mqdefault.jpg">    
                </a>
                </div>`;
        });

    videoList.innerHTML = html.join("");

    document.querySelectorAll('.item a').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const id = item.getAttribute('data-id');
            current = id;
            renderCurrentVideo(videos[current].id);
        })
    })
}

