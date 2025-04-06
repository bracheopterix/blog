import { StyleObj } from './types.ts'

export const AllStyles: StyleObj = {
    'market': [
        {
            name: 'fish',
            src: new URL('./img/market/salmon.png', import.meta.url).href
        },
        {
            name: 'cider',
            src: new URL('./img/market/cider-drink.png', import.meta.url).href
        },
        {
            name: 'cheese',
            src: new URL('./img/market/cheese.png', import.meta.url).href            
        },
        {
            name: 'bread',
            src: new URL('./img/market/rolls.png', import.meta.url).href
        },
        {
            name: 'vegs',
            src: new URL('./img/market/vegetable.png', import.meta.url).href
        },
        {
            name: 'beer',
            src: new URL('./img/market/beer.png', import.meta.url).href
        },
        {
            name: 'apple3',
            src: new URL('./img/market/apple(3).png', import.meta.url).href
        },
        {
            name: 'bread&fish',
            src: new URL('./img/market/bread-and-fish.png', import.meta.url).href
        }],
    'sushi': [
        {
            name: 'sauce',
            src: new URL('./img/sushi/sauce.png', import.meta.url).href

        },
        {
            name: 'nigiri',
            src: new URL('./img/sushi/nigiri.png', import.meta.url).href

        },
        {
            name: 'jjamppong',
            src: new URL('./img/sushi/jjamppong.png', import.meta.url).href

        },
        {
            name: 'tepache',
            src: new URL('./img/sushi/tepache.png', import.meta.url).href

        },
        {
            name: 'wasabi',
            src: new URL('./img/sushi/wasabi.png', import.meta.url).href
        },
        {
            name: 'maki',
            src: new URL('./img/sushi/anakyu-maki.png', import.meta.url).href
        },
        {
            name: 'dumplings',
            src: new URL('./img/sushi/dumplings.png', import.meta.url).href
        },
        {
            name: 'gyoza',
            src: new URL('./img/sushi/gyoza.png', import.meta.url).href
        }],
    'harvest': [
        {
            name: 'apple',
            src: new URL('./img/harvest/apple.png', import.meta.url).href
        },
        {
            name: 'apple1',
            src: new URL('./img/harvest/apple(1).png', import.meta.url).href
        },
        {
            name: 'apple2',
            src: new URL('./img/harvest/apple(2).png', import.meta.url).href
        },
        {
            name: 'blueberry',
            src: new URL('./img/harvest/blueberry.png', import.meta.url).href
        },
        {
            name: 'oak',
            src: new URL('./img/harvest/oak.png', import.meta.url).href
        },
        {
            name: 'orange',
            src: new URL('./img/harvest/orange.png', import.meta.url).href
        },
        {
            name: 'pomegranate',
            src: new URL('./img/harvest/pomegranate.png', import.meta.url).href
        },
        {
            name: 'pumpkin',
            src: new URL('./img/harvest/pumpkin.png', import.meta.url).href
        },
        {
            name: 'grape',
            src: new URL('./img/harvest/grape.png', import.meta.url).href
        }],
};