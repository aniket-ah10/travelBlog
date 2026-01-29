import residencyLucknow from '../asset/image/residencyLucknow.jpg'
import shivalayaPark from '../asset/image/shivalayaPark.jpg'
import imambadaGulabBari from '../asset/image/imambadaGulabBari.jpg'
import dograRegimentFaizabad from '../asset/image/dograRegimentFaizabad.jpg'
import badaImambara from '../asset/image/badaImambara.jpg'
import surajKundPark from '../asset/image/surajKundPark.jpg'

var idNo=1;
export default [
    {
        id:idNo++,
        img:{
            src:shivalayaPark,
            alt:'Shivalaya Park Picture'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/5rRyBuHuv9bYxLdL7',
        name:'The Shivalaya Park',
        date:'16 Jan 2025',
        description:'Park features replicas of all 12 Jyotirlinga ,along with other famous Shiva temples'
    },
     {
        id:idNo++,
        img:{
            src:imambadaGulabBari,
            alt:'the gulab bari picture'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/HtmzGW2HU1mqaP9b6',
        name:'The Imambada Gulab Bari',
        date:'15 Aug 2025',
        description:'Gulab Bari is the Tomb of Nawab Shuja-ud-Daula which is collection of various good looking and fragence rose'
    },
     {
        id:idNo++,
        img:{
            src:dograRegimentFaizabad,
            alt:'Dogra Regiment picture'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/tYtgvLrB95xSMfyLA',
        name:'Dogra Central Regiment Faizabad',
        date:'11 Sep 2025',
        description:'Here Dogra central regiment is established since june 1976'
    },
        {
        id:idNo++,
        img:{
            src:residencyLucknow,
            alt:'the residency lucknow picture'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/wL7EawtRM396ZvfN8',
        name:'The Residency , Lucknow',
        date:'14 Sep 2025',
        description:'Historical site featuring the ruins of a refuge for British citizen during the Revolt of 1857'
    },{
        id:idNo++,
        img:{
            src:badaImambara,
            alt:'bada imambara image'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/XMcenmuXKmrjJkUW6',
        name:'Bada Imambara , Lucknow',
        date:'14 Sep 2025',
        description:'It is garden with historical place stunning architecture , include grand hall built without pillars. '
    },
     {
        id:idNo++,
        img:{
            src:surajKundPark,
            alt:'suraj  Kund Park picture'
        },
        country:'india',
        googleMapLocation:'https://maps.app.goo.gl/e1TwvMtM7Pb3DCwDA',
        name:'Suraj Kund Park',
        date:'14 Sep 2025',
        description:'The park is built on central theme of plant and their moon and the solar System'
    }
]