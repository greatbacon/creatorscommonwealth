import type {Image} from '$lib/imageGallery';
import aqui1 from '$lib/images/acquisition/acquisition1.png';
import aqui2 from '$lib/images/acquisition/acquisition2.jpg';
import aqui3 from '$lib/images/acquisition/acquisition3.jpg';
import aqui4 from '$lib/images/acquisition/acquisition4.jpg';
import aqui5 from '$lib/images/acquisition/acquisition5.png';
import aqui6 from '$lib/images/acquisition/acquisition6.jpg';
import aqui7 from '$lib/images/acquisition/acquisition7.jpg';
import aqui8 from '$lib/images/acquisition/acquisition8.jpg';
import aqui9 from '$lib/images/acquisition/acquisition9.png';
import aqui10 from '$lib/images/acquisition/acquisition10.png';

export type Game = {
    name: string;
    images: Image[];
    players: string;
    age: string;
    playtime: string;
    description: string;    
    priceSheet: PriceSheet[]
}

export type PriceSheet = {
    purchaseLink: string;
    priceDollar: number;
    priceCents: number;
    payWhatYouWant: boolean;
    productName: string;
    productDescription: string;
    creatorTitle: string;
    creatorVerb: string;
    creatorName: string;
    outOfStock: boolean;    
}

export const games: Game[] = [{
    name: "acquisition",
    players: "2-6",
    age: "8+",
    playtime: "1hr",
    images: [
        {
        url: aqui1,
        description: "A wooden box with the name Acquisition engraved on its lid, open to reveal game components"
        },
                {
        url: aqui2,
        description: "Uncut printed stocks for the game Acquisition"
        },
        {
            url: aqui3,
            description: "Uncut printed sheets of play money."
            },
            {
                url: aqui4,
                description: "Plywood boards with components of Acquisition cut into them, waiting to be removed for assembly."
                },
        {
        url: aqui5,
        description: "A wooden box with the name Acquisition engraved on its lid."
        },
        {
            url: aqui6,
            description: "Cut out playing tiles for the game Acquisition."
            },
            {
                url: aqui7,
                description: "4 different colors of play money, cut out as individual pieces"
                },        
            {url: aqui8,
                description: "3 cut out stock cards for Red Rocks, Meow Wolf, and Elitch Garden"
            },
            {url: aqui9,
                description: "A screenshot of the acquisition board lasercutting file."
            },
            {url: aqui10,
                description: "A screenshot of a pdf of one of the acquisition stocks"
            }
],
    description: "Acquisition is a game about building an empire out of small companies. Each player takes turn placing tiles in an effort to found, expand, and merge various companies all while buying up stocks and making some money in the acquisition process. The player with the most money at the end wins. An average game takes about 1 hour.",
    priceSheet: [{
        purchaseLink: 'email admin',
        priceDollar: 5,
        priceCents: 0,
        productName: 'pattern',
        productDescription: 'Designed in-house by Creators Commonwealth, the pattern consists of finished Lightburn files for cutting out a board+tiles as well as a box. It also includes print ready PDFs for money, stock cards, cheat sheets, and an instruction 1 pager, plus the Nandeck script used to generate the money & stock cards.',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'designer',
        creatorVerb: 'designed',
        payWhatYouWant: true,
        outOfStock: false,
    },{
        purchaseLink: 'email admin',
        priceDollar: 25,
        priceCents: 0,
        productName: 'kit',
        productDescription: 'Kits are fabricated in-house by Creators Commonwealth. They include 5 perforated, 12in x 12in x 1/8in birch plywood boards that can be assembled into the board and box, as well as all paper printed materials. Stocks, money, and cheat sheets will still need to be cut with scissors as well. Glue for assembly not included.',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'fabricator',
        creatorVerb: 'fabricated',
        payWhatYouWant: false,
        outOfStock: false,
    }, {
        purchaseLink: 'email admin',
        priceDollar: 100,
        priceCents: 0,
        productName: 'full game',
        productDescription: 'A fully assembled copy ready for gifting or gaming. Finished wood, assembled board & box, pre-cut cards, plus a bag for tiles & 6 tile holders',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'assembler',
        creatorVerb: 'assembled',
        payWhatYouWant: false,
        outOfStock: true,
    }]
}];