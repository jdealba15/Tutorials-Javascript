const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'Github'];

// socials.forEach(function (string) {
//     console.log(string);
// })

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// function logSocials(elToBePassThru) {
//     console.log(elToBePassThru);
// }

// socials.forEach(logSocials);

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
];

socialObjs.forEach((item) => console.log(item.url));
socialObjs.forEach((item) => console.log(item.name));
