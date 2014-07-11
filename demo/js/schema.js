module.exports = {
    name: String,
    duration: String,
    trackNumber: Number,
    releaseDate: Date
};


// More possible data designs
// ==========================

// var author = {
//     name: String,
//     isAdmin: Boolean,
//     social: {
//         twitter: String,
//         facebook: String
//     }
// };

// var album =  {
//     exports: 'album',
//     title: String,
//     cover: "Image"
// }

// {
//     name: "recording",
//     fields: {
//         title: {
//             type: "Text"
//         },
//         cover: {
//             type: "Image"
//         },

//     }
// }

// {
//     component: "Track",
//     fields: {
//         name: {
//             type: "Text"
//         },
//         length: {
//             type: "Text"
//         },
//         trackNumber: {
//             type: "Number"
//         },
//         file: {
//             type: "Media"
//         }
//     }
// }

