module.exports = {
    Name: "string",
    duration: {
        label: "Duration",
        type: "string",
        placeholder: "e.g. 4m 32s"
    },
    trackNumber: {
        label: "Track Number",
        type: "number"
    },
    releaseDate: {
        label: "Release Date",
        type: "date"
    }
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

