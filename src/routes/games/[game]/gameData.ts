import type {Image} from '$lib/imageGallery';

export type Game = {
    name: string;
    images: Image[];
    description: string;
    priceSheet: PriceSheet[]
}

export type PriceSheet = {
    priceInCents: number;
    productName: string;
    productDescription: string;
    creatorTitle: string;
    creatorVerb: string;
    creatorName: string;
}

export const games: Game[] = [{
    name: "aquisition",
    images: [],
    description: "Lorem Ipsum",
    priceSheet: [{
        priceInCents: 500,
        productName: 'pattern',
        productDescription: 'Lorem Ipsum',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'designer',
        creatorVerb: 'designed',
    },{
        priceInCents: 2000,
        productName: 'kit',
        productDescription: 'Lorem Ipsum',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'fabricator',
        creatorVerb: 'fabricated'
    }, {
        priceInCents: 10000,
        productName: 'full game',
        productDescription: 'Lorem Ipsum',
        creatorName: 'Creators Commonwealth',
        creatorTitle: 'assembler',
        creatorVerb: 'assembled'
    }]
}];