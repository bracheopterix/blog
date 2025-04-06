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
            src: new URL('./src/MemoryGame/img/market/cheese.png', import.meta.url).href            
        },
        {
            name: 'bread',
            src: new URL('./src/MemoryGame/img/market/rolls.png', import.meta.url).href
        },
        {
            name: 'vegs',
            src: new URL('./src/MemoryGame/img/market/vegetable.png', import.meta.url).href
        },
        {
            name: 'beer',
            src: new URL('./src/MemoryGame/img/market/beer.png', import.meta.url).href
        },
        {
            name: 'apple3',
            src: new URL('./src/MemoryGame/img/market/apple(3).png', import.meta.url).href
        },
        {
            name: 'bread&fish',
            src: new URL('./src/MemoryGame/img/market/bread-and-fish.png', import.meta.url).href
        }],
    'sushi': [
        {
            name: 'sauce',
            src: '/src/MemoryGame/img/sushi/sauce.png'
        },
        {
            name: 'nigiri',
            src: '/src/MemoryGame/img/sushi/nigiri.png'
        },
        {
            name: 'jjamppong',
            src: '/src/MemoryGame/img/sushi/jjamppong.png'
        },
        {
            name: 'tepache',
            src: '/src/MemoryGame/img/sushi/tepache.png'
        },
        {
            name: 'wasabi',
            src: '/src/MemoryGame/img/sushi/wasabi.png'
        },
        {
            name: 'maki',
            src: '/src/MemoryGame/img/sushi/anakyu-maki.png'
        },
        {
            name: 'dumplings',
            src: '/src/MemoryGame/img/sushi/dumplings.png'
        },
        {
            name: 'gyoza',
            src: '/src/MemoryGame/img/sushi/gyoza.png'
        }],
    'harvest': [
        {
            name: 'apple',
            src: '/src/MemoryGame/img/harvest/apple.png'
        },
        {
            name: 'apple1',
            src: '/src/MemoryGame/img/harvest/apple(1).png'
        },
        {
            name: 'apple2',
            src: '/src/MemoryGame/img/harvest/apple(2).png'
        },
        {
            name: 'blueberry',
            src: '/src/MemoryGame/img/harvest/blueberry.png'
        },
        {
            name: 'oak',
            src: '/src/MemoryGame/img/harvest/oak.png'
        },
        {
            name: 'orange',
            src: '/src/MemoryGame/img/harvest/orange.png'
        },
        {
            name: 'pomegranate',
            src: '/src/MemoryGame/img/harvest/pomegranate.png'
        },
        {
            name: 'pumpkin',
            src: '/src/MemoryGame/img/harvest/pumpkin.png'
        },
        {
            name: 'grape',
            src: '/src/MemoryGame/img/harvest/grape.png'
        }],
};