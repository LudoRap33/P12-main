import perso from './assets/images/ludo.webp'
import p2 from './assets/images/projet2.webp'
import p3 from './assets/images/projet3.webp'
import p4 from './assets/images/projet4.webp'
import p5 from './assets/images/projet5.webp'
import p6 from './assets/images/projet6.webp'
import p8 from './assets/images/projet8.webp'
import p9 from './assets/images/projet9.webp'
import p10 from './assets/images/projet10.webp'
import p11 from './assets/images/projet11.webp'

const logotext = "LUDO";
const meta = {

    title: "Ludovic DUFAURE",
    description: "Je m'appelle Luudovic 'Intégrateur Web', actuellement basé sur Bordeaux en France",
};

const introdata = {

    title: "Bonjour je m'appelle",
    animated: {
        first: "J'adore coder.",
        second: "Je code des sites internet cools.",
        third: "Je développe en utilisant React",
    },
    description: "je suis 'Intégrateur Web' , actuellement basé sur Bordeaux en France",
};

const dataabout = {

    title: "A propos de moi",
    aboutme: "Je suis 'Intégrateur Web', actuellement basé sur Bordeaux en France.",
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{

    name: "HTML",
    value: 90,
},
{
    name: "CSS",
    value: 80,
},
{
    name: "Sass",
    value: 80,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 70,
}
];

const services = [{

    title: "Création de Site internet",
    description: "Je créé des site internet professionel sur mesure.",
},
{
    title: "Intégration",
    description: "J'intégre vos maquettes.",
},
];

const dataportfolio = [{

    img: p2,
    description: "Riding Cities - Intégrer des éléments sur une page web en utilisant les fondamentaux de HTML et CSS.",
    linkGitub: "https://github.com/LudoRap33/P2",
    linkSite: "https://ludorap33.github.io/P2/"
},
{
    img: p3,
    description: "Booki - Créez la page d'accueil responsive d'une agence de voyage avec HTML & CSS conformément à une maquette.",
    linkGitub: "https://github.com/LudoRap33/P3",
    linkSite: "https://ludorap33.github.io/P3"
},
{
    img: p4,
    description: "OhMyFood - Améliorez l'interface d'un site mobile avec des animations CSS en utilisant Sass.",
    linkGitub: "https://github.com/LudoRap33/P4",
    linkSite: "https://ludorap33.github.io/P4"
},
{
    img: p5,
    description: "Print it! - Programmer en utilisant les fondamentaux de JavaScript.",
    linkGitub: "https://github.com/LudoRap33/P5",
    linkSite: "https://ludorap33.github.io/P5"
},
{
    img: p6,
    description: "Sophie Bluel - Créez une page web dynamique avec JavaScript en communiquant avec une API, gestion des événements et manipulation du DOM.",
    linkGitub: "https://github.com/LudoRap33/P6"
},
{
    img: p8,
    description: "Kasa - Créez une application web de location immobilière avec React. Create React App, React Router, Sass",
    linkGitub: "https://github.com/LudoRap33/P8"
},
{
    img: p9,
    description: "Nina Carducci - Optimisez le référencement d'un site de photographe.",
    linkGitub: "https://github.com/LudoRap33/P9",
    linkSite: "https://ludorap33.github.io/P9"
},
{
    img: p10,
    description: "724 Events - Débuggez le site d'une agence d'événementiel grâce aux Chrome DevTools et tests unitaires et d'intégrations.",
    linkGitub: "https://github.com/LudoRap33/P10"
},
{
    img: p11,
    description: "Argent Bank - Implémentez le front-end d'une application bancaire avec React et Redux. Configuration des routes API",
    linkGitub: "https://github.com/LudoRap33/P11"
},
];

const contactConfig = {
    YOUR_EMAIL: "ludovicdufaure@gmail.com",
    description: "N'hésitez pas à me contacter par email, je vous répondrez dès que possible. :)",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/LudoRap33",
    // facebook: "https://facebook.com",
    // linkedin: "https://linkedin.com",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};