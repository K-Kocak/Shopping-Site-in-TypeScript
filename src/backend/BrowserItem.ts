export interface BrowserItem {
    name: string,
    price: number,
    description: string
}

export const BrowserItemList: BrowserItem[] = [
    {
        name: "Shoes",
        price: 23.99,
        description: "A pair of shoes."
    },
    {
        name: "Shirt",
        price: 5.99,
        description: "A shirt."
    },
    {
        name: "Trousers",
        price: 15.99,
        description: "Trousers."
    },
    {
        name: "Gloves",
        price: 8.99,
        description: "Pair of gloves."
    },
    {
        name: "Cap",
        price: 14.99,
        description: "A cap."
    },
]

export default BrowserItemList;