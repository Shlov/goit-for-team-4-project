
// import * as basicLightbox from 'basiclightbox';

import andreyUrl from '../images/footer/teem-1.jpg';
import antonUrl from '../images/footer/teem-2.jpg';
import antoninaUrl from '../images/footer/teem-3.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';
// import andreyUrl from '../images/footer/teem-1.jpg';

import spriteUrl from '../images/symbol.svg';

const developers = [
    {
        nameDev: 'Anton',
        surnameDev: 'Shabalov',
        photo: `${antonUrl}`,
        roleDev: 'Team lead',
        gitDev: 'https://github.com/Shlov',
    },
    // 2
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 3
    {
        nameDev: 'Antonina',
        surnameDev: 'Buchak',
        photo: `${antoninaUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/AninotA',
    },
    // 4
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 5
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 6
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 7
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 8
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // 9
    {
        nameDev: 'Andrey',
        surnameDev: 'Smit',
        photo: `${andreyUrl}`,
        roleDev: 'Scrum master',
        gitDev: 'https://github.com/KuznecovAndrey7777777',
    },
    // // 10
    // {
    //     nameDev: 'Andrey',
    //     surnameDev: 'Smit',
    //     photo: `${andreyUrl}`,
    //     roleDev: 'Scrum master',
    //     gitDev: 'https://github.com/KuznecovAndrey7777777',
    // },
    // // 11
    // {
    //     nameDev: 'Andrey',
    //     surnameDev: 'Smit',
    //     photo: `${andreyUrl}`,
    //     roleDev: 'Scrum master',
    //     gitDev: 'https://github.com/KuznecovAndrey7777777',
    // },
    // // 12
    // {
    //     nameDev: 'Andrey',
    //     surnameDev: 'Smit',
    //     photo: `${andreyUrl}`,
    //     roleDev: 'Scrum master',
    //     gitDev: 'https://github.com/KuznecovAndrey7777777',
    // },
    // // 13
    // {
    //     nameDev: 'Andrey',
    //     surnameDev: 'Smit',
    //     photo: `${andreyUrl}`,
    //     roleDev: 'Scrum master',
    //     gitDev: 'https://github.com/KuznecovAndrey7777777',
    // },
    // // 14
    // {
    //     nameDev: 'Andrey',
    //     surnameDev: 'Smit',
    //     photo: `${andreyUrl}`,
    //     roleDev: 'Scrum master',
    //     gitDev: 'https://github.com/KuznecovAndrey7777777',
    // },
];

const markupTeamCard = developers
    .map(({ surnameDev, nameDev, photo, roleDev, gitDev }) => {
        return `
<li class="team-card">
    <img src="${photo}" alt="${nameDev}" class="team-image">
    <p class="team-name">${surnameDev}<br>${nameDev}</p>
    <p class="team-role">${roleDev}</p>
    <a href="${gitDev}" target="_blank" class="team-git"><svg width="24" height="24">
        <use href="${spriteUrl}#icon-github"></use>
    </svg></a>
</li>`;
    })
    .join('');
const markupModal = `<p class="team-title">FourTeam<span class="logogoit"></span></p>
<ul class="team-wrapper">
${markupTeamCard}
</ul>
</div>`;
const container = document.querySelector('.developers');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markupModal);

function openModal(e) {
    e.preventDefault();
    modal.show();
    const body = document.querySelector('body');
    body.classList.add('bg-scrolling-element-when-modal-open');
    // const closeModalBtn = document.querySelector('[data-modal-close]');
    // closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalHandler);
    const backdrop = document.querySelector('.basicLightbox');
    backdrop.addEventListener('click', closeBackdrop);

    // function closeModal(e) {
    //     modal.close();
    //     body.classList.remove('bg-scrolling-element-when-modal-open');
    //     closeModalBtn.removeEventListener('click', closeModal);
    // }

    function closeModalHandler(e) {
        if (e.key === 'Escape') {
            modal.close();
            body.classList.remove('bg-scrolling-element-when-modal-open');
            window.removeEventListener('keydown', closeModalHandler);
        }
    }

    function closeBackdrop(e) {
        if (e.target === backdrop) {
            modal.close();
            body.classList.remove('bg-scrolling-element-when-modal-open');
            backdrop.removeEventListener('click', closeBackdrop);
        }
    }
}