// import * as basicLightbox from 'basiclightbox';

import andreyUrl from '../images/footer/teem-1.jpg';
import antonUrl from '../images/footer/teem-2.jpg';
import antoninaUrl from '../images/footer/teem-3.jpg';
import VasylUrl from '../images/footer/teem-4.jpg';
import DmytriyPUrl from '../images/footer/teem-5.jpg';
import RuslanUrl from '../images/footer/teem-7.jpg';
import KaterynaUrl from '../images/footer/teem-6.jpg';
import DenysUrl from '../images/footer/teem-8.jpg';
import DmytriiUrl from '../images/footer/teem-9.jpg';
import AnastasiiaUrl from '../images/footer/teem-10.jpg';
import VitaliyUrl from '../images/footer/teem-11.jpg';
import SergiiUrl from '../images/footer/teem-12.jpg';
import VitaliySUrl from '../images/footer/teem-13.jpg';
import VladislavUrl from '../images/footer/teem-14.jpg';

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
        surnameDev: 'Kuznetsov',
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
        nameDev: 'Vasyl',
        surnameDev: 'Kutsyi',
        photo: `${VasylUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/UserVasyk',
    },
    // 5
    {
        nameDev: 'Dmytriy',
        surnameDev: 'Pokhylenko',
        photo: `${DmytriyPUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/PokhilenkoD?tab=repositories',
    },
    // 6
    {
        nameDev: 'Ruslan',
        surnameDev: 'Samoylenkoy',
        photo: `${RuslanUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/ruslan-sem',
    },
    // 7
    {
        nameDev: 'Antonova',
        surnameDev: 'Kateryna',
        photo: `${KaterynaUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/katya20220910',
    },
    // 8
    {
        nameDev: 'Denys',
        surnameDev: 'Tunyk',
        photo: `${DenysUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/DenisTunyk',
    },
    // 9
    {
        nameDev: 'Dmytrii',
        surnameDev: 'Holiaka',
        photo: `${DmytriiUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/holiaka',
    },
    // 10
    {
        nameDev: 'Anastasiia',
        surnameDev: 'Hluhan',
        photo: `${AnastasiiaUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/nastiglugan',
    },
    // 11
    {
        nameDev: 'Vitaliy',
        surnameDev: 'Guivan',
        photo: `${VitaliyUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/ventel90',
    },
    // 12
    {
        nameDev: 'Sergii',
        surnameDev: 'Maitamal',
        photo: `${SergiiUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/SergeyMaitamal7',
    },
    // 13
    {
        nameDev: 'Vitaliy',
        surnameDev: 'Saburdo',
        photo: `${VitaliySUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/VitaliySaburdo',
    },
    // 14
    {
        nameDev: 'Vladislav',
        surnameDev: 'Ulianeev',
        photo: `${VladislavUrl}`,
        roleDev: 'Frontend',
        gitDev: 'https://github.com/vladisulian',
    },
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