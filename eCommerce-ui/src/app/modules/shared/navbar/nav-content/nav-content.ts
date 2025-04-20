export const navigation = {
    women: {
        id: 'women',
        name: 'Women',
        featured: [],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Tops', id: 'top', href: '{women/clothing/tops}' },
                    { name: 'Dresses', id: 'women_dress', href: '#' },
                    { name: 'Pants', id: 'women_jeans' },
                    { name: 'Lengha Choli', id: 'lengha_choli' },
                    { name: 'Sweaters', id: 'women_sweater' },
                    { name: 'T-Shirts', id: 't-shirts' },
                    { name: 'Jackets', id: 'jacket' },
                    { name: 'Gowns', id: 'women_gowns' },
                    { name: 'Sarees', id: 'women_saree' },
                    { name: 'Kurtas', id: 'women_kurtas' },
                ]
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    { name: 'Watches', id: 'watch' },
                    { name: 'Wallets', id: 'wallet' },
                    { name: 'Bags', id: 'bag' },
                    { name: 'Sunglasses', id: 'sunglasse' },
                    { name: 'Hats', id: 'hat' },
                    { name: 'Belts', id: 'belt' }
                ]
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    { name: 'Full Nelson', id: '#' },
                    { name: 'My Way', id: '#' },
                    { name: 'Re-Arranged', id: '#' },
                    { name: 'Counterfeit', id: '#' },
                    { name: 'Significant Other', id: '#' }
                ]
            }
        ]
    },
    men: {
        id: 'men',
        name: 'Men',
        featured: [],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Tops', id: 'top', href: '{men/clothing/tops}' },
                    { name: 'Shirts', id: 'men_shirt', href: '#' },
                    { name: 'Pants', id: 'men_jeans' },
                    { name: 'T-Shirts', id: 't-shirts' },
                    { name: 'Jackets', id: 'jacket' },
                    { name: 'Sweaters', id: 'men_sweater' },
                    { name: 'Suits', id: 'men_suit' },
                    { name: 'Kurtas', id: 'men_kurtas' },
                    { name: 'Trousers', id: 'trousers' },
                    { name: 'Blazers', id: 'blazer' },
                ]
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    { name: 'Watches', id: 'watch' },
                    { name: 'Wallets', id: 'wallet' },
                    { name: 'Bags', id: 'bag' },
                    { name: 'Sunglasses', id: 'sunglasse' },
                    { name: 'Caps', id: 'cap' },
                    { name: 'Belts', id: 'belt' }
                ]
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    { name: 'Full Nelson', id: '#' },
                    { name: 'My Way', id: '#' },
                    { name: 'Re-Arranged', id: '#' },
                    { name: 'Counterfeit', id: '#' },
                    { name: 'Significant Other', id: '#' }
                ]
            }
        ]
    }
};