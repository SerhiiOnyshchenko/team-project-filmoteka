 const refsFooterTeam = [
    {
        id: 1,
        title: 'Serhii',
        text: 'Team Lead',
        task: 'sdghg',
        linkGit: 'https://github.com/SerhiiOnyshchenko',
        linkLinkdin: 'https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%BE%D0%BD%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE-045b6a184/',
        img: './images/favicon/serhiy.webp',
        
    },
    {
        id: 2,
        title: 'Anastasiia',
        text: 'Scrum',
        task: 'sdghg',
        linkGit: 'https://github.com/LadyNenAdams',
        linkLinkdin: 'https://www.linkedin.com/in/anastasiia-balhabaieva-830497194/',
        img: './images/team/anastasia.webp',
        
    },
    {
        id: 3,
        title: 'Dmitriy',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/KizievDmitriy/',
        linkLinkdin: 'https://www.linkedin.com/in/dmytro-kiziiev-469991b9/',
        img: './images/team/ya.webp',
        
    },
    {
        id: 4,
        title: 'Illia',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/IlliaBekarevych',
        linkLinkdin: 'https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%B1%D0%B5%D0%BA%D0%B0%D1%80%D0%B5%D0%B2%D0%B8%D1%87-1203751a8/',
        img: './images/team/iliya.webp',
        
    },
    {
        id: 5,
        title: 'Maksym',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/p0shta',
        linkLinkdin: '#',
        img: './images/team/maksim.webp',
        
    },
    {
        id: 6,
        title: 'Vlad',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/Vlad-Petrenko',
        linkLinkdin: 'https://www.linkedin.com/in/vlad-petrenko',
        img: './images/team/vlad.webp',
        
    },
    {
        id: 7,
        title: 'Natalia',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/NataliaMonasturska',
        linkLinkdin: '#',
        img: './images/team/natali.webp',
        
    },
    {
        id: 8,
        title: 'Vladimir',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/Vova-KE',
        linkLinkdin: '#',
        img: './images/team/vladimir.webp',
        
    },
    {
        id: 9,
        title: 'Dmitriy',
        text: 'Developer',
        task: 'sdghg',
        linkGit: 'https://github.com/imavin08',
        linkLinkdin: 'http://www.linkedin.com/in/dima-mykhailov',
        img: './images/team/dima.webp',
        
    }
]
const toHTML = e =>
`<li class="comand-item">
    <img src="${e.img}" alt="${e.text}" class="comand-item-img">
    <div class="comand-item-wrapper">
        <h3 class="comand-title">${e.title}</h3>
        <p class="comand-text">${e.text}</p>
        <ul class="comand-link-list">
            <li class="comand-link-item">
                <a href="${e.linkGit}" class="comand-link-item-social" target="_blank" rel="noopener noreferrer" >
                    <svg class="comand-link-item-svg" width="20" height="20">
                        <use href="./images/symbol-defs.svg#icon-github"></use>
                    </svg>
                </a>
            </li>
            <li class="comand-link-item">
                <a href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%BE%D0%BD%D0%B8%D1%89%D0%B5%D0%BD%D0%BA%D0%BE-045b6a184/" class="comand-link-item-social" target="_blank" rel="noopener noreferrer">
                    <svg class="${e.linkLinkdin}" width="20" height="20">
                        <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
    <div class="comand-item-card-action">
        <p class="comand-item-card-text">${e.task}</p>
    </div>
</li>`

function renderFooterTeamCard() {
    const html = refsFooterTeam.map(toHTML).join('')
    document.querySelector('#footerTeam').innerHTML = html;
}

renderFooterTeamCard();