const PRODUCTS = [
    {
        id: 100,
        name: 'Xbox',
        price: 100, // Prix à la location
        locateur: 'Marouane Haddad',
        image: require('../assets/products/xbox.jpg'),
        description: 'La Xbox est une console de jeux vidéo développée par Microsoft. Elle propose une vaste bibliothèque de jeux comprenant des titres exclusifs, des jeux populaires provenant de différents genres et une sélection croissante de jeux rétrocompatibles. Les joueurs peuvent profiter de jeux solo captivants, de modes multijoueurs en ligne avec des amis, de compétitions e-sport et autres expériences interactives.',
         contact: {
            email: 'Marouane.had@example.com',
            phone: '0613508702'
  }
    },
    {
        id: 101,
        name: 'Trottinette Électrique',
        price: 89, // Prix à la location
        locateur: 'ID SAID SALMAN',
        image: require('../assets/products/electric-scooter.jpg'),
        description: 'La trottinette électrique est un moyen de transport urbain pratique et écologique. Elle est idéale pour se déplacer en ville de manière rapide et économique.',
        contact: {
            email: 'ID_SAID_SALMAN@example.com',
            phone: '+1234567890'
  }
    },
    {
        id: 102,
        name: 'Costume',
        price: 60, // Prix à la location
        locateur: 'Aymane Ouyachchi',
        image: require('../assets/products/suit.jpg'),
        description: 'Le costume est une tenue élégante et formelle, souvent portée lors d occasions spéciales ou de réunions professionnelles. Il se compose généralement d une veste, d un pantalon assorti et d une chemise.',
        contact: {
            email: 'Aymane Ouyachchi@example.com',
            phone: '+1234567890'
  }
    },
    {
        id: 103,
        name: 'Caftan Marocain',
        price: 75, // Prix à la location
        locateur: 'Ali elAidaoui',
        image: require('../assets/products/caftan.jpg'),
        description: 'Le caftan marocain est une robe traditionnelle portée au Maroc lors d événements spéciaux tels que les mariages ou les fêtes. Il est connu pour ses tissus somptueux, ses motifs et sa broderie détaillée.'
        ,contact: {
            email: 'Ali elAidaoui@example.com',
            phone: '+1234567890'
  }
    },
    {
        id: 104,
        name: 'Mac Bock',
        price: 120, // Prix à la location
        locateur: 'Anass Mouakit',
        image: require('../assets/products/macbook.jpg'),
        description: 'Le Mac Bock est un ordinateur portable haut de gamme développé par Apple. Il offre des performances puissantes, un écran de qualité et une expérience utilisateur fluide.'
        ,contact: {
            email: 'Anass Mouakit@example.com',
            phone: '+1234567890'
  }
    },
    {
        id: 105,
        name: 'Camera Nikon',
        price: 55, // Prix à la location
        locateur: 'Abdellah Achchabi',
        image: require('../assets/products/camera-nikon.jpg'),
        description: 'La caméra Nikon est un appareil photo de qualité professionnelle, connu pour sa précision, sa polyvalence et sa capacité à capturer des images de haute qualité.'
    ,contact: {
            email: 'Abdellah Achchabi@example.com',
            phone: '+1234567890'
  }
    },
    {
        id: 106,
        name: 'Costume Femme',
        price: 65, // Prix à la location
        locateur: 'Mehdi Arejdal',
        image: require('../assets/products/womens-suit.jpg'),
        description: 'Le costume pour femme est une tenue élégante et professionnelle, adaptée aux occasions formelles ou aux réunions d affaires. Il se compose généralement d une veste, d une jupe ou d un pantalon assorti et d une chemise.'
    ,contact: {
            email: 'Mehdi Arejdal@example.com',
            phone: '+1234567890'
  }
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

