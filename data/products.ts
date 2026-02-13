import type { Product } from '@/types';

export const products: Product[] = [
    // L'Oréal Professionnel - 8 products
    {
        id: '1',
        slug: 'loreal-inoa-6-34-dark-golden-copper-blonde',
        brand: 'L\'Oréal Professionnel',
        name: 'INOA Supreme Color Crème',
        shadeCode: '6.34',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'golden',
        type: 'permanent',
        description: 'Ammonia-free permanent color with supreme comfort and full gray coverage. Delivers rich, long-lasting color with maximum care.',
        highlights: [
            'Zero ammonia formula',
            '100% gray coverage',
            'Up to 6 weeks color longevity',
            'Enhanced shine and softness'
        ],
        howToUse: [
            'Mix with INOA developer in 1:1 ratio',
            'Apply to dry, unwashed hair',
            'Leave on for 35 minutes',
            'Rinse thoroughly and shampoo'
        ],
        ingredients: ['ODS² Oil Delivery System', 'Monoethanolamine', 'PEG-4 Rapeseedamide', 'Ethanolamine'],
        specs: {
            volumeMl: 60,
            finish: 'Glossy',
            grayCoverage: 'full',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 6
        },
        price: 24.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/D4A574/FFF?text=L%27Oreal+INOA+6.34', alt: 'L\'Oréal INOA 6.34' }
        ],
        tags: ['ammonia-free', 'golden', 'blonde', 'permanent'],
        createdAt: '2025-12-15T10:00:00Z'
    },
    {
        id: '2',
        slug: 'loreal-inoa-8-13-light-ash-golden-blonde',
        brand: 'L\'Oréal Professionnel',
        name: 'INOA Supreme Color Crème',
        shadeCode: '8.13',
        shadeFamily: 'blonde',
        level: 8,
        tone: 'ash',
        type: 'permanent',
        description: 'Light ash golden blonde with cool undertones. Perfect for lightening while neutralizing warmth.',
        highlights: [
            'Cool ash reflects',
            'No ammonia smell',
            'Full gray coverage',
            'Silky smooth finish'
        ],
        howToUse: [
            'Mix 1:1 with 6% developer for lift',
            'Apply to dry hair',
            'Process for 35 minutes',
            'Rinse and condition'
        ],
        ingredients: ['ODS² Technology', 'Conditioning agents', 'Color precursors'],
        specs: {
            volumeMl: 60,
            finish: 'Natural matte',
            grayCoverage: 'full',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 6
        },
        price: 24.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/E5D4B5/333?text=L%27Oreal+INOA+8.13', alt: 'L\'Oréal INOA 8.13' }
        ],
        tags: ['ash', 'blonde', 'cool-tone', 'permanent'],
        createdAt: '2025-12-20T10:00:00Z'
    },
    {
        id: '3',
        slug: 'loreal-dialight-9-12-milkshake',
        brand: 'L\'Oréal Professionnel',
        name: 'Dia Light Demi-Permanent',
        shadeCode: '9.12',
        shadeFamily: 'blonde',
        level: 9,
        tone: 'ash',
        type: 'demi',
        description: 'Ultra-light demi-permanent color for toning and refreshing blonde hair. Acid technology for gentle color deposit.',
        highlights: [
            'Acid pH technology',
            'Long-lasting shine',
            'Gentle on hair',
            'Perfect for toning'
        ],
        howToUse: [
            'Mix 1:1.5 with Dia Activator',
            'Apply to towel-dried hair',
            'Process 20 minutes',
            'Emulsify and rinse'
        ],
        ingredients: ['Ionène G™', 'Acids', 'Vitamin B3'],
        specs: {
            volumeMl: 50,
            finish: 'High shine',
            grayCoverage: 'partial',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 4
        },
        price: 19.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/F5E6D3/333?text=L%27Oreal+Dia+Light+9.12', alt: 'L\'Oréal Dia Light 9.12' }
        ],
        tags: ['demi', 'toner', 'blonde', 'shine'],
        createdAt: '2026-01-10T10:00:00Z'
    },
    {
        id: '4',
        slug: 'loreal-majirel-5-0-light-brown',
        brand: 'L\'Oréal Professionnel',
        name: 'Majirel Permanent Crème',
        shadeCode: '5.0',
        shadeFamily: 'brown',
        level: 5,
        tone: 'neutral',
        type: 'permanent',
        description: 'Classic light brown with neutral base. Professional permanent color with Ionène G™ and Incell technology.',
        highlights: [
            'Deep color penetration',
            '100% white coverage',
            'Long-lasting results',
            'Smooth application'
        ],
        howToUse: [
            'Mix 1:1.5 with Oxydant',
            'Apply to dry hair',
            'Leave 35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['Ionène G™', 'Incell', 'Color molecules'],
        specs: {
            volumeMl: 50,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 18.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/8B7355/FFF?text=L%27Oreal+Majirel+5.0', alt: 'L\'Oréal Majirel 5.0' }
        ],
        tags: ['brown', 'neutral', 'permanent', 'classic'],
        createdAt: '2025-11-05T10:00:00Z'
    },
    {
        id: '5',
        slug: 'loreal-majirel-4-45-copper-mahogany-brown',
        brand: 'L\'Oréal Professionnel',
        name: 'Majirel Permanent Crème',
        shadeCode: '4.45',
        shadeFamily: 'copper',
        level: 4,
        tone: 'copper',
        type: 'permanent',
        description: 'Rich copper mahogany brown with warm, vibrant reflects. Intense color payoff with full gray coverage.',
        highlights: [
            'Vibrant copper reflects',
            'Full coverage',
            'Rich pigmentation',
            'Long-lasting warmth'
        ],
        howToUse: [
            'Mix with 6% developer',
            'Apply root to ends',
            'Process 35 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['Ionène G™', 'Incell technology', 'Copper pigments'],
        specs: {
            volumeMl: 50,
            finish: 'Glossy',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 18.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/6B4423/FFF?text=L%27Oreal+Majirel+4.45', alt: 'L\'Oréal Majirel 4.45' }
        ],
        tags: ['copper', 'mahogany', 'warm', 'permanent'],
        createdAt: '2025-10-20T10:00:00Z'
    },
    {
        id: '6',
        slug: 'loreal-blondstudio-multi-techniques-powder',
        brand: 'L\'Oréal Professionnel',
        name: 'Blond Studio Multi-Techniques Powder',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Professional bleaching powder for up to 8 levels of lift. Dust-free formula with care agents.',
        highlights: [
            'Up to 8 levels of lift',
            'Dust-free formula',
            'Bonder inside',
            'Flexible application'
        ],
        howToUse: [
            'Mix with developer 1:2 ratio',
            'Apply to dry hair',
            'Check every 10 minutes',
            'Rinse when desired lift achieved'
        ],
        ingredients: ['Potassium persulfate', 'Bond protecting agents', 'Anti-yellowing agents'],
        specs: {
            volumeMl: 500,
            finish: 'Matte',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 32.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/F8F0E3/333?text=Blond+Studio', alt: 'L\'Oréal Blond Studio Powder' }
        ],
        tags: ['bleach', 'lightening', 'professional'],
        createdAt: '2025-09-15T10:00:00Z'
    },
    {
        id: '7',
        slug: 'loreal-majirel-3-0-dark-brown',
        brand: 'L\'Oréal Professionnel',
        name: 'Majirel Permanent Crème',
        shadeCode: '3.0',
        shadeFamily: 'brown',
        level: 3,
        tone: 'neutral',
        type: 'permanent',
        description: 'Deep dark brown with neutral undertones. Perfect for rich, natural-looking brunette shades.',
        highlights: [
            'Deep color deposit',
            '100% gray coverage',
            'Neutral reflects',
            'Professional results'
        ],
        howToUse: [
            'Mix 1:1.5 with Oxydant',
            'Apply to dry hair',
            'Process 35 minutes',
            'Rinse and condition'
        ],
        ingredients: ['Ionène G™', 'Incell', 'Conditioning agents'],
        specs: {
            volumeMl: 50,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 18.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/3D2817/FFF?text=L%27Oreal+Majirel+3.0', alt: 'L\'Oréal Majirel 3.0' }
        ],
        tags: ['dark', 'brown', 'neutral'],
        createdAt: '2025-08-10T10:00:00Z'
    },
    {
        id: '8',
        slug: 'loreal-majirel-6-64-dark-red-copper-blonde',
        brand: 'L\'Oréal Professionnel',
        name: 'Majirel Permanent Crème',
        shadeCode: '6.64',
        shadeFamily: 'red',
        level: 6,
        tone: 'red',
        type: 'permanent',
        description: 'Vibrant dark red copper blonde with intense warm reflects. Long-lasting red pigments.',
        highlights: [
            'Intense red reflects',
            'Full gray coverage',
            'Vibrant copper tones',
            'Fade-resistant formula'
        ],
        howToUse: [
            'Mix with 6% developer',
            'Apply root to ends',
            'Leave 35 minutes',
            'Rinse with cool water'
        ],
        ingredients: ['Ionène G™', 'Red pigments', 'Copper molecules'],
        specs: {
            volumeMl: 50,
            finish: 'High shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 5
        },
        price: 18.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B86F50/FFF?text=L%27Oreal+Majirel+6.64', alt: 'L\'Oréal Majirel 6.64' }
        ],
        tags: ['red', 'copper', 'vibrant'],
        createdAt: '2026-01-05T10:00:00Z'
    },

    // Wella Professionals - 8 products
    {
        id: '9',
        slug: 'wella-koleston-perfect-7-0-medium-blonde',
        brand: 'Wella Professionals',
        name: 'Koleston Perfect Permanent Crème',
        shadeCode: '7.0',
        shadeFamily: 'blonde',
        level: 7,
        tone: 'neutral',
        type: 'permanent',
        description: 'Pure balanced blonde with ME+ technology for reduced risk of allergic reactions. Professional permanent hair color.',
        highlights: [
            'ME+ technology',
            'Perfect gray coverage',
            'True-to-tone results',
            'Enhanced shine'
        ],
        howToUse: [
            'Mix 1:1.5 with Welloxon Perfect',
            'Apply to dry hair',
            'Process 30-35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['ME+', 'Pure Balance Technology', 'Color molecules'],
        specs: {
            volumeMl: 60,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 22.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/A67C52/FFF?text=Wella+Koleston+7.0', alt: 'Wella Koleston Perfect 7.0' }
        ],
        tags: ['blonde', 'neutral', 'me-plus'],
        createdAt: '2025-12-01T10:00:00Z'
    },
    {
        id: '10',
        slug: 'wella-koleston-perfect-8-38-light-gold-pearl-blonde',
        brand: 'Wella Professionals',
        name: 'Koleston Perfect Permanent Crème',
        shadeCode: '8.38',
        shadeFamily: 'blonde',
        level: 8,
        tone: 'golden',
        type: 'permanent',
        description: 'Luminous light golden blonde with pearl reflects. Advanced ME+ formula for salon-quality results.',
        highlights: [
            'Pearl reflects',
            'ME+ low allergen',
            '100% gray coverage',
            'Luminous finish'
        ],
        howToUse: [
            'Mix with 6% developer',
            'Apply to dry hair',
            'Leave 30 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['ME+ molecule', 'Pearl pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'Luminous',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 22.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/E0B58D/333?text=Wella+Koleston+8.38', alt: 'Wella Koleston Perfect 8.38' }
        ],
        tags: ['golden', 'pearl', 'blonde'],
        createdAt: '2025-11-20T10:00:00Z'
    },
    {
        id: '11',
        slug: 'wella-color-touch-9-16-very-light-ash-violet-blonde',
        brand: 'Wella Professionals',
        name: 'Color Touch Demi-Permanent',
        shadeCode: '9.16',
        shadeFamily: 'blonde',
        level: 9,
        tone: 'ash',
        type: 'demi',
        description: 'Gentle demi-permanent color with conditioning care. Ideal for toning and refreshing blonde shades.',
        highlights: [
            'Conditioning formula',
            'Brilliant shine',
            'Gentle on hair',
            'Easy to blend'
        ],
        howToUse: [
            'Mix 1:2 with Color Touch Emulsion',
            'Apply to towel-dried hair',
            'Process 20 minutes',
            'Emulsify and rinse'
        ],
        ingredients: ['Advanced Color Technology', 'Keratin', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'Brilliant shine',
            grayCoverage: 'partial',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 4
        },
        price: 17.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/EFD9C1/333?text=Wella+Color+Touch+9.16', alt: 'Wella Color Touch 9.16' }
        ],
        tags: ['ash', 'violet', 'demi', 'toner'],
        createdAt: '2026-01-15T10:00:00Z'
    },
    {
        id: '12',
        slug: 'wella-koleston-perfect-6-3-dark-gold-blonde',
        brand: 'Wella Professionals',
        name: 'Koleston Perfect Permanent Crème',
        shadeCode: '6.3',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'golden',
        type: 'permanent',
        description: 'Rich dark golden blonde with warm reflects. ME+ technology ensures predictable, long-lasting results.',
        highlights: [
            'Warm golden tone',
            'ME+ technology',
            'Full coverage',
            'Predictable results'
        ],
        howToUse: [
            'Mix 1:1.5 with developer',
            'Apply to dry hair',
            'Process 30 minutes',
            'Rinse well'
        ],
        ingredients: ['ME+', 'Golden pigments', 'Care ingredients'],
        specs: {
            volumeMl: 60,
            finish: 'Golden shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 22.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B8935A/FFF?text=Wella+Koleston+6.3', alt: 'Wella Koleston Perfect 6.3' }
        ],
        tags: ['golden', 'blonde', 'warm'],
        createdAt: '2025-10-10T10:00:00Z'
    },
    {
        id: '13',
        slug: 'wella-koleston-perfect-5-4-light-brown-red',
        brand: 'Wella Professionals',
        name: 'Koleston Perfect Permanent Crème',
        shadeCode: '5.4',
        shadeFamily: 'brown',
        level: 5,
        tone: 'copper',
        type: 'permanent',
        description: 'Light brown with copper-red reflects. Vibrant warm tone with excellent gray coverage.',
        highlights: [
            'Copper-red reflects',
            'ME+ formula',
            'Vibrant warmth',
            '100% white coverage'
        ],
        howToUse: [
            'Mix with Welloxon Perfect',
            'Apply evenly',
            'Process 30-35 minutes',
            'Rinse and condition'
        ],
        ingredients: ['ME+ technology', 'Copper molecules', 'Red pigments'],
        specs: {
            volumeMl: 60,
            finish: 'Glossy',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 22.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/8B6F47/FFF?text=Wella+Koleston+5.4', alt: 'Wella Koleston Perfect 5.4' }
        ],
        tags: ['copper', 'brown', 'warm'],
        createdAt: '2025-09-25T10:00:00Z'
    },
    {
        id: '14',
        slug: 'wella-blondor-multi-blonde-powder',
        brand: 'Wella Professionals',
        name: 'Blondor Multi Blonde Powder',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Professional multi-blonde powder lightener for up to 7 levels of lift. Anti-yellow molecules for cleaner results.',
        highlights: [
            'Up to 7 levels of lift',
            'Anti-yellow complex',
            'Dust-free',
            'Versatile mixing'
        ],
        howToUse: [
            'Mix with Welloxon Perfect',
            'Apply to dry hair',
            'Monitor lift progress',
            'Rinse when desired level reached'
        ],
        ingredients: ['Lightening agents', 'Anti-yellow molecules', 'Care complex'],
        specs: {
            volumeMl: 400,
            finish: 'Clean',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 28.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/FFF8DC/333?text=Wella+Blondor', alt: 'Wella Blondor Powder' }
        ],
        tags: ['bleach', 'lightener', 'professional'],
        createdAt: '2025-08-15T10:00:00Z'
    },
    {
        id: '15',
        slug: 'wella-color-touch-relights-0-56-red-violet',
        brand: 'Wella Professionals',
        name: 'Color Touch Relights',
        shadeCode: '/56',
        shadeFamily: 'fantasy',
        level: 8,
        tone: 'violet',
        type: 'demi',
        description: 'Intensive violet toner for lightened hair. Creates beautiful red-violet reflects with shine.',
        highlights: [
            'Intensive color deposit',
            'For pre-lightened hair',
            'Beautiful violet tones',
            'Conditioning care'
        ],
        howToUse: [
            'Mix with Color Touch Emulsion 1:2',
            'Apply to pre-lightened hair',
            'Process 15-20 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['Violet pigments', 'Keratin', 'Shine enhancers'],
        specs: {
            volumeMl: 60,
            finish: 'High shine',
            grayCoverage: 'none',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 3
        },
        price: 19.99,
        currency: 'USD',
        inStock: false,
        images: [
            { src: 'https://placehold.co/400x500/C89A81/FFF?text=Wella+Relights+%2F56', alt: 'Wella Color Touch Relights /56' }
        ],
        tags: ['violet', 'fantasy', 'toner'],
        createdAt: '2026-02-01T10:00:00Z'
    },
    {
        id: '16',
        slug: 'wella-koleston-perfect-2-0-black',
        brand: 'Wella Professionals',
        name: 'Koleston Perfect Permanent Crème',
        shadeCode: '2.0',
        shadeFamily: 'black',
        level: 2,
        tone: 'neutral',
        type: 'permanent',
        description: 'Deep intense black with neutral base. Pure black color with ME+ technology for professional results.',
        highlights: [
            'Pure black shade',
            'ME+ technology',
            'Complete gray coverage',
            'Long-lasting intensity'
        ],
        howToUse: [
            'Mix 1:1.5 with developer',
            'Apply to dry hair',
            'Process 35 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['ME+', 'Black pigments', 'Care complex'],
        specs: {
            volumeMl: 60,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 22.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/1A1110/FFF?text=Wella+Koleston+2.0', alt: 'Wella Koleston Perfect 2.0' }
        ],
        tags: ['black', 'neutral', 'intense'],
        createdAt: '2025-07-20T10:00:00Z'
    },

    // Schwarzkopf Professional - 8 products
    {
        id: '17',
        slug: 'schwarzkopf-igora-royal-9-1-extra-light-ash-blonde',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Permanent Color',
        shadeCode: '9-1',
        shadeFamily: 'blonde',
        level: 9,
        tone: 'ash',
        type: 'permanent',
        description: 'Extra light ash blonde with cool reflects. High-definition color technology for brilliant results.',
        highlights: [
            'High Definition Color',
            '100% white coverage',
            'Cool ash reflects',
            'Brilliant shine'
        ],
        howToUse: [
            'Mix 1:1 with Igora Developer',
            'Apply to dry hair',
            'Process 30-45 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['HD Color Technology', 'Pigment matrix', 'Care agents'],
        specs: {
            volumeMl: 60,
            finish: 'Brilliant',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/F0E4D7/333?text=Igora+Royal+9-1', alt: 'Schwarzkopf Igora Royal 9-1' }
        ],
        tags: ['ash', 'blonde', 'cool'],
        createdAt: '2025-12-10T10:00:00Z'
    },
    {
        id: '18',
        slug: 'schwarzkopf-igora-royal-7-65-medium-blonde-chocolate-gold',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Permanent Color',
        shadeCode: '7-65',
        shadeFamily: 'blonde',
        level: 7,
        tone: 'golden',
        type: 'permanent',
        description: 'Medium blonde with chocolate gold reflects. Rich warm tone with excellent coverage.',
        highlights: [
            'Warm golden reflects',
            'Rich pigmentation',
            'Perfect coverage',
            'Long-lasting color'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply root to ends',
            'Leave 30-45 minutes',
            'Rinse well'
        ],
        ingredients: ['HD Color Technology', 'Golden pigments', 'Care complex'],
        specs: {
            volumeMl: 60,
            finish: 'Rich shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B87A5E/FFF?text=Igora+Royal+7-65', alt: 'Schwarzkopf Igora Royal 7-65' }
        ],
        tags: ['golden', 'chocolate', 'warm'],
        createdAt: '2025-11-15T10:00:00Z'
    },
    {
        id: '19',
        slug: 'schwarzkopf-igora-vibrance-8-1-light-blonde-cendre',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Vibrance Demi-Permanent',
        shadeCode: '8-1',
        shadeFamily: 'blonde',
        level: 8,
        tone: 'ash',
        type: 'demi',
        description: 'Moisture-protecting demi-permanent color. Gentle gel-to-cream formula for brilliant shine.',
        highlights: [
            'Moisture protection',
            'Gentle formula',
            'Brilliant shine',
            'Easy application'
        ],
        howToUse: [
            'Mix 1:1 with Igora Vibrance Activator',
            'Apply to towel-dried hair',
            'Process 20 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['Aquaxyl™', 'Color molecules', 'Moisturizing agents'],
        specs: {
            volumeMl: 60,
            finish: 'Brilliant shine',
            grayCoverage: 'partial',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 4
        },
        price: 18.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/D9C4A8/333?text=Igora+Vibrance+8-1', alt: 'Schwarzkopf Igora Vibrance 8-1' }
        ],
        tags: ['demi', 'ash', 'gentle'],
        createdAt: '2026-01-20T10:00:00Z'
    },
    {
        id: '20',
        slug: 'schwarzkopf-igora-royal-6-0-dark-blonde',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Permanent Color',
        shadeCode: '6-0',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'neutral',
        type: 'permanent',
        description: 'Pure dark blonde with neutral balance. High-performance color for natural-looking results.',
        highlights: [
            'Perfect neutral tone',
            '100% gray coverage',
            'Natural results',
            'Long-lasting'
        ],
        howToUse: [
            'Mix with Igora Developer',
            'Apply to dry hair',
            'Process 30-45 minutes',
            'Rinse and condition'
        ],
        ingredients: ['HD Technology', 'Neutral pigments', 'Care ingredients'],
        specs: {
            volumeMl: 60,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/9B7653/FFF?text=Igora+Royal+6-0', alt: 'Schwarzkopf Igora Royal 6-0' }
        ],
        tags: ['neutral', 'blonde', 'natural'],
        createdAt: '2025-10-05T10:00:00Z'
    },
    {
        id: '21',
        slug: 'schwarzkopf-igora-royal-4-68-medium-brown-chocolate-red',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Permanent Color',
        shadeCode: '4-68',
        shadeFamily: 'brown',
        level: 4,
        tone: 'red',
        type: 'permanent',
        description: 'Rich medium brown with intense chocolate red reflects. Vibrant warm tone with full coverage.',
        highlights: [
            'Rich red reflects',
            'Intense pigmentation',
            '100% coverage',
            'Vibrant warmth'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply evenly',
            'Leave 30-45 minutes',
            'Rinse with cool water'
        ],
        ingredients: ['HD Color', 'Red pigments', 'Chocolate molecules'],
        specs: {
            volumeMl: 60,
            finish: 'Rich shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 5
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/6B4C3B/FFF?text=Igora+Royal+4-68', alt: 'Schwarzkopf Igora Royal 4-68' }
        ],
        tags: ['red', 'chocolate', 'brown'],
        createdAt: '2025-09-10T10:00:00Z'
    },
    {
        id: '22',
        slug: 'schwarzkopf-blondme-premium-lift-9',
        brand: 'Schwarzkopf Professional',
        name: 'BlondMe Premium Lightener 9+',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Premium lightening powder for up to 9 levels of lift. Integrated bond-strengthening technology.',
        highlights: [
            'Up to 9 levels of lift',
            'Bond strengthening',
            'Clean lift',
            'Low damage'
        ],
        howToUse: [
            'Mix with developer',
            'Apply to dry hair',
            'Monitor lift',
            'Rinse when target level achieved'
        ],
        ingredients: ['Lightening agents', 'Bond Enforcing Technology', 'Care complex'],
        specs: {
            volumeMl: 450,
            finish: 'Clean',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 34.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/FAF0E6/333?text=BlondMe+Premium', alt: 'Schwarzkopf BlondMe Premium' }
        ],
        tags: ['bleach', 'premium', 'lightener'],
        createdAt: '2025-08-05T10:00:00Z'
    },
    {
        id: '23',
        slug: 'schwarzkopf-igora-royal-3-0-dark-brown',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Permanent Color',
        shadeCode: '3-0',
        shadeFamily: 'brown',
        level: 3,
        tone: 'neutral',
        type: 'permanent',
        description: 'Deep dark brown with perfect neutral balance. Professional permanent color with HD technology.',
        highlights: [
            'Deep color',
            'Neutral reflects',
            '100% white coverage',
            'Long-lasting results'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Process 30-45 minutes',
            'Rinse well'
        ],
        ingredients: ['HD Technology', 'Brown pigments', 'Care agents'],
        specs: {
            volumeMl: 60,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/4A3426/FFF?text=Igora+Royal+3-0', alt: 'Schwarzkopf Igora Royal 3-0' }
        ],
        tags: ['brown', 'dark', 'neutral'],
        createdAt: '2025-07-15T10:00:00Z'
    },
    {
        id: '24',
        slug: 'schwarzkopf-igora-royal-silverwhite-steel-grey',
        brand: 'Schwarzkopf Professional',
        name: 'Igora Royal Silverwhite',
        shadeCode: 'Steel',
        shadeFamily: 'gray-silver',
        level: 9,
        tone: 'ash',
        type: 'semi',
        description: 'Steel grey semi-permanent color for fashion grey looks. Vibrant silver pigmentation.',
        highlights: [
            'Fashion grey tone',
            'High pigmentation',
            'For pre-lightened hair',
            'Vibrant results'
        ],
        howToUse: [
            'Apply to pre-lightened hair',
            'Process 15-20 minutes',
            'Rinse with cool water',
            'No developer needed'
        ],
        ingredients: ['Silver pigments', 'Care complex', 'Color molecules'],
        specs: {
            volumeMl: 60,
            finish: 'Matte metallic',
            grayCoverage: 'none',
            ammoniaFree: true,
            vegan: true,
            longevityWeeks: 3
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B8BCC2/333?text=Silverwhite+Steel', alt: 'Schwarzkopf Igora Silverwhite Steel' }
        ],
        tags: ['silver', 'grey', 'fashion', 'semi'],
        createdAt: '2026-02-05T10:00:00Z'
    },

    // Matrix - 8 products
    {
        id: '25',
        slug: 'matrix-socolor-beauty-8n-light-blonde',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '8N',
        shadeFamily: 'blonde',
        level: 8,
        tone: 'neutral',
        type: 'permanent',
        description: 'Light blonde with neutral base. ColorGrip™ technology for long-lasting color and coverage.',
        highlights: [
            'ColorGrip™ technology',
            '100% gray coverage',
            'Long-lasting color',
            'Even application'
        ],
        howToUse: [
            'Mix 1:1 with Cream Developer',
            'Apply to dry hair',
            'Process 35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['ColorGrip™', 'Ceramide', 'Cationic conditioners'],
        specs: {
            volumeMl: 90,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/D4B896/333?text=Matrix+SoColor+8N', alt: 'Matrix SoColor Beauty 8N' }
        ],
        tags: ['blonde', 'neutral', 'permanent'],
        createdAt: '2025-12-05T10:00:00Z'
    },
    {
        id: '26',
        slug: 'matrix-socolor-beauty-7g-medium-gold-blonde',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '7G',
        shadeFamily: 'blonde',
        level: 7,
        tone: 'golden',
        type: 'permanent',
        description: 'Warm medium golden blonde with rich reflects. Professional salon color with superior coverage.',
        highlights: [
            'Warm golden reflects',
            'Rich color',
            'Full coverage',
            'Professional quality'
        ],
        howToUse: [
            'Mix with Cream Developer',
            'Apply evenly',
            'Leave 35 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['ColorGrip™', 'Golden pigments', 'Care ingredients'],
        specs: {
            volumeMl: 90,
            finish: 'Golden shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B8956A/FFF?text=Matrix+SoColor+7G', alt: 'Matrix SoColor Beauty 7G' }
        ],
        tags: ['golden', 'blonde', 'warm'],
        createdAt: '2025-11-10T10:00:00Z'
    },
    {
        id: '27',
        slug: 'matrix-color-sync-10a-lightest-ash-blonde',
        brand: 'Matrix',
        name: 'Color Sync Demi-Permanent',
        shadeCode: '10A',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'ash',
        type: 'toner',
        description: 'Ultra-light ash blonde toner. Acidic demi-permanent for gentle toning and shine.',
        highlights: [
            'Acidic formula',
            'Gentle toning',
            'Brilliant shine',
            'No lift'
        ],
        howToUse: [
            'Mix 1:2 with Color Sync Activator',
            'Apply to damp hair',
            'Process 20 minutes',
            'Rinse well'
        ],
        ingredients: ['Acidic technology', 'Ash pigments', 'Ceramides'],
        specs: {
            volumeMl: 90,
            finish: 'High shine',
            grayCoverage: 'partial',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 4
        },
        price: 14.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/E8DCC8/333?text=Matrix+Color+Sync+10A', alt: 'Matrix Color Sync 10A' }
        ],
        tags: ['ash', 'toner', 'demi'],
        createdAt: '2026-01-25T10:00:00Z'
    },
    {
        id: '28',
        slug: 'matrix-socolor-beauty-6n-dark-blonde',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '6N',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'neutral',
        type: 'permanent',
        description: 'Classic dark blonde with neutral balance. Reliable gray coverage with ColorGrip™ technology.',
        highlights: [
            'Neutral balance',
            '100% gray coverage',
            'Even color',
            'Dependable results'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Process 35 minutes',
            'Rinse and condition'
        ],
        ingredients: ['ColorGrip™', 'Neutral pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 90,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/8B6F4F/FFF?text=Matrix+SoColor+6N', alt: 'Matrix SoColor Beauty 6N' }
        ],
        tags: ['neutral', 'blonde', 'classic'],
        createdAt: '2025-10-01T10:00:00Z'
    },
    {
        id: '29',
        slug: 'matrix-socolor-beauty-5rr-light-brown-intense-red',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '5RR',
        shadeFamily: 'red',
        level: 5,
        tone: 'red',
        type: 'permanent',
        description: 'Intense red light brown with vibrant red reflects. High-impact red color with full coverage.',
        highlights: [
            'Intense red pigments',
            'Vibrant color',
            'Full coverage',
            'Long-lasting red'
        ],
        howToUse: [
            'Mix with Cream Developer',
            'Apply root to ends',
            'Leave 35 minutes',
            'Rinse with cool water'
        ],
        ingredients: ['ColorGrip™', 'Red pigments', 'Care complex'],
        specs: {
            volumeMl: 90,
            finish: 'High shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 5
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/8B4049/FFF?text=Matrix+SoColor+5RR', alt: 'Matrix SoColor Beauty 5RR' }
        ],
        tags: ['red', 'intense', 'vibrant'],
        createdAt: '2025-09-05T10:00:00Z'
    },
    {
        id: '30',
        slug: 'matrix-light-master-lightening-powder',
        brand: 'Matrix',
        name: 'Light Master Lightening Powder',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Professional lightening powder for up to 7 levels of lift. Controlled lightening with minimal damage.',
        highlights: [
            'Up to 7 levels lift',
            'Controlled lightening',
            'Minimal damage',
            'Versatile application'
        ],
        howToUse: [
            'Mix with cream developer',
            'Apply to dry hair',
            'Check lift every 10 minutes',
            'Rinse when desired'
        ],
        ingredients: ['Lightening agents', 'Conditioning complex', 'Bond care'],
        specs: {
            volumeMl: 500,
            finish: 'Clean',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 26.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/FFFACD/333?text=Light+Master', alt: 'Matrix Light Master Powder' }
        ],
        tags: ['bleach', 'lightener', 'professional'],
        createdAt: '2025-08-01T10:00:00Z'
    },
    {
        id: '31',
        slug: 'matrix-socolor-beauty-4m-medium-brown-mocha',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '4M',
        shadeFamily: 'brown',
        level: 4,
        tone: 'neutral',
        type: 'permanent',
        description: 'Rich medium brown with subtle mocha reflects. Professional permanent color for natural results.',
        highlights: [
            'Mocha reflects',
            'Rich color',
            '100% coverage',
            'Natural finish'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Process 35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['ColorGrip™', 'Mocha pigments', 'Care ingredients'],
        specs: {
            volumeMl: 90,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/5D4037/FFF?text=Matrix+SoColor+4M', alt: 'Matrix SoColor Beauty 4M' }
        ],
        tags: ['brown', 'mocha', 'neutral'],
        createdAt: '2025-07-10T10:00:00Z'
    },
    {
        id: '32',
        slug: 'matrix-socolor-beauty-6c-dark-blonde-copper',
        brand: 'Matrix',
        name: 'SoColor Beauty Permanent',
        shadeCode: '6C',
        shadeFamily: 'copper',
        level: 6,
        tone: 'copper',
        type: 'permanent',
        description: 'Warm copper dark blonde with vibrant reflects. ColorGrip™ ensures even, long-lasting color.',
        highlights: [
            'Vibrant copper',
            'Warm reflects',
            'Full coverage',
            'Long-lasting'
        ],
        howToUse: [
            'Mix with developer',
            'Apply evenly',
            'Leave 35 minutes',
            'Rinse well'
        ],
        ingredients: ['ColorGrip™', 'Copper pigments', 'Ceramides'],
        specs: {
            volumeMl: 90,
            finish: 'Glossy',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 16.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/A67B5B/FFF?text=Matrix+SoColor+6C', alt: 'Matrix SoColor Beauty 6C' }
        ],
        tags: ['copper', 'warm', 'blonde'],
        createdAt: '2026-01-30T10:00:00Z'
    },

    // Redken - 8 products
    {
        id: '33',
        slug: 'redken-shades-eq-9t-vanilla-cream',
        brand: 'Redken',
        name: 'Shades EQ Gloss',
        shadeCode: '09T',
        shadeFamily: 'blonde',
        level: 9,
        tone: 'neutral',
        type: 'toner',
        description: 'Acidic demi-permanent gloss for toning and shine. Gentle formula with no lift.',
        highlights: [
            'Acidic pH',
            'Amazing shine',
            'Gentle formula',
            'Perfect for toning'
        ],
        howToUse: [
            'Mix 1:1 with Processing Solution',
            'Apply to clean, damp hair',
            'Process 20 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['Acidic color', 'Conditioning agents', 'Shine enhancers'],
        specs: {
            volumeMl: 60,
            finish: 'Extreme shine',
            grayCoverage: 'partial',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 4
        },
        price: 19.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/E6D3C1/333?text=Redken+Shades+EQ+09T', alt: 'Redken Shades EQ 09T' }
        ],
        tags: ['toner', 'gloss', 'shine'],
        createdAt: '2025-12-08T10:00:00Z'
    },
    {
        id: '34',
        slug: 'redken-color-fusion-7na-natural-ash',
        brand: 'Redken',
        name: 'Color Fusion Cream',
        shadeCode: '7NA',
        shadeFamily: 'blonde',
        level: 7,
        tone: 'ash',
        type: 'permanent',
        description: 'Natural ash blonde with cool undertones. Advanced permanent color with Silkening Complex.',
        highlights: [
            'Natural ash tone',
            'Cool reflects',
            'Full coverage',
            'Silkening Complex'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Process 30 minutes',
            'Rinse and condition'
        ],
        ingredients: ['Silkening Complex', 'Ash pigments', 'Care agents'],
        specs: {
            volumeMl: 60,
            finish: 'Silky',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 20.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/C4A57B/FFF?text=Redken+Color+Fusion+7NA', alt: 'Redken Color Fusion 7NA' }
        ],
        tags: ['ash', 'natural', 'blonde'],
        createdAt: '2025-11-12T10:00:00Z'
    },
    {
        id: '35',
        slug: 'redken-shades-eq-10v-vanilla-ice',
        brand: 'Redken',
        name: 'Shades EQ Gloss',
        shadeCode: '10V',
        shadeFamily: 'fantasy',
        level: 10,
        tone: 'violet',
        type: 'toner',
        description: 'Violet-based toner for ultra-light blonde. Neutralizes yellow tones for icy results.',
        highlights: [
            'Neutralizes yellow',
            'Violet pigments',
            'For very light hair',
            'High shine'
        ],
        howToUse: [
            'Mix 1:1 with Processing Solution',
            'Apply to pre-lightened hair',
            'Process 15-20 minutes',
            'Rinse with cool water'
        ],
        ingredients: ['Violet pigments', 'Acidic formula', 'Shine complex'],
        specs: {
            volumeMl: 60,
            finish: 'Glossy',
            grayCoverage: 'none',
            ammoniaFree: true,
            vegan: false,
            longevityWeeks: 3
        },
        price: 19.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/DCC6E0/333?text=Redken+Shades+EQ+10V', alt: 'Redken Shades EQ 10V' }
        ],
        tags: ['violet', 'toner', 'fantasy'],
        createdAt: '2026-02-02T10:00:00Z'
    },
    {
        id: '36',
        slug: 'redken-color-fusion-6gb-gold-brown',
        brand: 'Redken',
        name: 'Color Fusion Cream',
        shadeCode: '6GB',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'golden',
        type: 'permanent',
        description: 'Warm gold brown blonde with rich reflects. Professional permanent hair color.',
        highlights: [
            'Warm golden tone',
            'Rich color',
            'Full gray coverage',
            'Silky finish'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Leave 30 minutes',
            'Rinse well'
        ],
        ingredients: ['Silkening Complex', 'Golden pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'Silky shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 20.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/A68A64/FFF?text=Redken+Color+Fusion+6GB', alt: 'Redken Color Fusion 6GB' }
        ],
        tags: ['golden', 'brown', 'warm'],
        createdAt: '2025-10-15T10:00:00Z'
    },
    {
        id: '37',
        slug: 'redken-color-fusion-5cr-copper-red',
        brand: 'Redken',
        name: 'Color Fusion Cream',
        shadeCode: '5CR',
        shadeFamily: 'copper',
        level: 5,
        tone: 'copper',
        type: 'permanent',
        description: 'Vibrant copper red with intense warm reflects. High-performance permanent color.',
        highlights: [
            'Intense copper',
            'Vibrant red reflects',
            '100% coverage',
            'Long-lasting warmth'
        ],
        howToUse: [
            'Mix with developer',
            'Apply evenly',
            'Process 30 minutes',
            'Rinse with cool water'
        ],
        ingredients: ['Silkening Complex', 'Copper pigments', 'Red molecules'],
        specs: {
            volumeMl: 60,
            finish: 'High shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 5
        },
        price: 20.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/8B5A5A/FFF?text=Redken+Color+Fusion+5CR', alt: 'Redken Color Fusion 5CR' }
        ],
        tags: ['copper', 'red', 'vibrant'],
        createdAt: '2025-09-20T10:00:00Z'
    },
    {
        id: '38',
        slug: 'redken-flashlift-lightening-powder',
        brand: 'Redken',
        name: 'Flash Lift Bonder Inside',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Professional lightening powder with Bonder Inside. Up to 8 levels of lift with bond protection.',
        highlights: [
            'Bonder Inside technology',
            'Up to 8 levels lift',
            'Bond protection',
            'Versatile application'
        ],
        howToUse: [
            'Mix with Pro-Oxide developer',
            'Apply to dry hair',
            'Monitor lift carefully',
            'Rinse when target reached'
        ],
        ingredients: ['Lightening agents', 'Bonder Inside', 'Care complex'],
        specs: {
            volumeMl: 500,
            finish: 'Clean',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 29.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/FFF9E6/333?text=Redken+Flash+Lift', alt: 'Redken Flash Lift' }
        ],
        tags: ['bleach', 'bonder', 'professional'],
        createdAt: '2025-08-08T10:00:00Z'
    },
    {
        id: '39',
        slug: 'redken-color-fusion-3n-natural',
        brand: 'Redken',
        name: 'Color Fusion Cream',
        shadeCode: '3N',
        shadeFamily: 'brown',
        level: 3,
        tone: 'neutral',
        type: 'permanent',
        description: 'Deep natural brown with balanced undertones. Professional permanent color with full coverage.',
        highlights: [
            'Deep natural brown',
            'Balanced tone',
            '100% gray coverage',
            'Silky results'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Process 30 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['Silkening Complex', 'Natural pigments', 'Care agents'],
        specs: {
            volumeMl: 60,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 20.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/4E3629/FFF?text=Redken+Color+Fusion+3N', alt: 'Redken Color Fusion 3N' }
        ],
        tags: ['brown', 'dark', 'natural'],
        createdAt: '2025-07-12T10:00:00Z'
    },
    {
        id: '40',
        slug: 'redken-color-fusion-1n-black',
        brand: 'Redken',
        name: 'Color Fusion Cream',
        shadeCode: '1N',
        shadeFamily: 'black',
        level: 1,
        tone: 'neutral',
        type: 'permanent',
        description: 'Intense natural black with full coverage. Pure black shade with Silkening Complex.',
        highlights: [
            'Intense black',
            'Pure color',
            '100% coverage',
            'Long-lasting'
        ],
        howToUse: [
            'Mix with developer',
            'Apply evenly',
            'Leave 30 minutes',
            'Rinse thoroughly'
        ],
        ingredients: ['Silkening Complex', 'Black pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 20.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/2B1B17/FFF?text=Redken+Color+Fusion+1N', alt: 'Redken Color Fusion 1N' }
        ],
        tags: ['black', 'intense', 'natural'],
        createdAt: '2025-06-20T10:00:00Z'
    },

    // Keune - 8 products
    {
        id: '41',
        slug: 'keune-tinta-color-8-light-blonde',
        brand: 'Keune',
        name: 'Tinta Color Permanent',
        shadeCode: '8',
        shadeFamily: 'blonde',
        level: 8,
        tone: 'neutral',
        type: 'permanent',
        description: 'Light blonde with natural base. Silk Protein Complex for healthy, vibrant color.',
        highlights: [
            'Silk Protein Complex',
            'Full gray coverage',
            'Natural results',
            'Healthy shine'
        ],
        howToUse: [
            'Mix 1:1 with Cream Developer',
            'Apply to dry hair',
            'Process 30-35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['Silk Protein Complex', 'Color molecules', 'Care agents'],
        specs: {
            volumeMl: 60,
            finish: 'Natural shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/CFAE8E/333?text=Keune+Tinta+Color+8', alt: 'Keune Tinta Color 8' }
        ],
        tags: ['blonde', 'neutral', 'silk'],
        createdAt: '2025-12-12T10:00:00Z'
    },
    {
        id: '42',
        slug: 'keune-tinta-color-7-3-medium-golden-blonde',
        brand: 'Keune',
        name: 'Tinta Color Permanent',
        shadeCode: '7.3',
        shadeFamily: 'blonde',
        level: 7,
        tone: 'golden',
        type: 'permanent',
        description: 'Warm medium golden blonde with rich undertones. Professional permanent color with silk proteins.',
        highlights: [
            'Warm golden tone',
            'Silk proteins',
            'Rich color',
            'Full coverage'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Leave 30-35 minutes',
            'Rinse well'
        ],
        ingredients: ['Silk Protein', 'Golden pigments', 'Conditioning complex'],
        specs: {
            volumeMl: 60,
            finish: 'Golden shine',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/B89968/FFF?text=Keune+Tinta+Color+7.3', alt: 'Keune Tinta Color 7.3' }
        ],
        tags: ['golden', 'blonde', 'warm'],
        createdAt: '2025-11-18T10:00:00Z'
    },
    {
        id: '43',
        slug: 'keune-semi-color-10-21-lightest-pearl-ash',
        brand: 'Keune',
        name: 'Semi Color',
        shadeCode: '10.21',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'ash',
        type: 'semi',
        description: 'Ultra-light pearl ash toner. No ammonia, no developer needed. Perfect for pre-lightened hair.',
        highlights: [
            'No ammonia',
            'No developer needed',
            'Direct application',
            'Pearl ash reflects'
        ],
        howToUse: [
            'Apply directly to pre-lightened hair',
            'Process 10-20 minutes',
            'Rinse with cool water',
            'Style as usual'
        ],
        ingredients: ['Direct dyes', 'Pearl pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'High shine',
            grayCoverage: 'none',
            ammoniaFree: true,
            vegan: true,
            longevityWeeks: 3
        },
        price: 21.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/F5E8DB/333?text=Keune+Semi+Color+10.21', alt: 'Keune Semi Color 10.21' }
        ],
        tags: ['semi', 'toner', 'pearl', 'ash'],
        createdAt: '2026-01-28T10:00:00Z'
    },
    {
        id: '44',
        slug: 'keune-tinta-color-6-1-dark-ash-blonde',
        brand: 'Keune',
        name: 'Tinta Color Permanent',
        shadeCode: '6.1',
        shadeFamily: 'blonde',
        level: 6,
        tone: 'ash',
        type: 'permanent',
        description: 'Dark ash blonde with cool reflects. Silk Protein Complex ensures healthy, vibrant color.',
        highlights: [
            'Cool ash tone',
            'Silk proteins',
            '100% gray coverage',
            'Professional quality'
        ],
        howToUse: [
            'Mix with developer',
            'Apply evenly',
            'Process 30-35 minutes',
            'Rinse and condition'
        ],
        ingredients: ['Silk Protein', 'Ash pigments', 'Care complex'],
        specs: {
            volumeMl: 60,
            finish: 'Natural matte',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/9C7E6B/FFF?text=Keune+Tinta+Color+6.1', alt: 'Keune Tinta Color 6.1' }
        ],
        tags: ['ash', 'cool', 'blonde'],
        createdAt: '2025-10-12T10:00:00Z'
    },
    {
        id: '45',
        slug: 'keune-tinta-color-5-4-light-copper-brown',
        brand: 'Keune',
        name: 'Tinta Color Permanent',
        shadeCode: '5.4',
        shadeFamily: 'brown',
        level: 5,
        tone: 'copper',
        type: 'permanent',
        description: 'Light copper brown with warm reflects. Rich copper tones with full gray coverage.',
        highlights: [
            'Warm copper reflects',
            'Silk Protein Complex',
            'Full coverage',
            'Vibrant color'
        ],
        howToUse: [
            'Mix 1:1 with developer',
            'Apply to dry hair',
            'Leave 30-35 minutes',
            'Rinse well'
        ],
        ingredients: ['Silk Protein', 'Copper pigments', 'Care ingredients'],
        specs: {
            volumeMl: 60,
            finish: 'Glossy',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/7D5A50/FFF?text=Keune+Tinta+Color+5.4', alt: 'Keune Tinta Color 5.4' }
        ],
        tags: ['copper', 'brown', 'warm'],
        createdAt: '2025-09-18T10:00:00Z'
    },
    {
        id: '46',
        slug: 'keune-ultimate-blonde-powder-lightener',
        brand: 'Keune',
        name: 'Ultimate Blonde Powder Lightener',
        shadeCode: 'BLEACH',
        shadeFamily: 'blonde',
        level: 10,
        tone: 'neutral',
        type: 'bleach',
        description: 'Professional bleaching powder for up to 8 levels of lift. Bond Fusion Technology protects hair.',
        highlights: [
            'Bond Fusion Technology',
            'Up to 8 levels lift',
            'Dust-free formula',
            'Hair protection'
        ],
        howToUse: [
            'Mix with Cream Developer',
            'Apply to dry hair',
            'Check lift regularly',
            'Rinse when desired level achieved'
        ],
        ingredients: ['Lightening agents', 'Bond Fusion', 'Care complex'],
        specs: {
            volumeMl: 500,
            finish: 'Clean',
            grayCoverage: 'none',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 8
        },
        price: 31.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/FFFFF0/333?text=Keune+Ultimate+Blonde', alt: 'Keune Ultimate Blonde Powder' }
        ],
        tags: ['bleach', 'lightener', 'bond-fusion'],
        createdAt: '2025-08-12T10:00:00Z'
    },
    {
        id: '47',
        slug: 'keune-tinta-color-4-medium-brown',
        brand: 'Keune',
        name: 'Tinta Color Permanent',
        shadeCode: '4',
        shadeFamily: 'brown',
        level: 4,
        tone: 'neutral',
        type: 'permanent',
        description: 'Rich medium brown with neutral balance. Silk Protein Complex for deep, healthy color.',
        highlights: [
            'Deep medium brown',
            'Neutral balance',
            'Silk proteins',
            '100% coverage'
        ],
        howToUse: [
            'Mix with developer',
            'Apply evenly',
            'Process 30-35 minutes',
            'Rinse and shampoo'
        ],
        ingredients: ['Silk Protein', 'Brown pigments', 'Conditioning agents'],
        specs: {
            volumeMl: 60,
            finish: 'Natural',
            grayCoverage: 'full',
            ammoniaFree: false,
            vegan: false,
            longevityWeeks: 6
        },
        price: 23.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/3E2723/FFF?text=Keune+Tinta+Color+4', alt: 'Keune Tinta Color 4' }
        ],
        tags: ['brown', 'neutral', 'medium'],
        createdAt: '2025-07-18T10:00:00Z'
    },
    {
        id: '48',
        slug: 'keune-semi-color-silver-liife',
        brand: 'Keune',
        name: 'Semi Color Silver Liife',
        shadeCode: 'Silver',
        shadeFamily: 'gray-silver',
        level: 9,
        tone: 'ash',
        type: 'semi',
        description: 'Fashion silver semi-permanent color. No ammonia, direct application for pre-lightened hair.',
        highlights: [
            'Fashion silver tone',
            'No ammonia',
            'Direct application',
            'Vibrant color'
        ],
        howToUse: [
            'Apply to pre-lightened hair',
            'Process 15-25 minutes',
            'Rinse with cool water',
            'No developer needed'
        ],
        ingredients: ['Direct silver dyes', 'Care complex', 'Shine agents'],
        specs: {
            volumeMl: 60,
            finish: 'Matte metallic',
            grayCoverage: 'none',
            ammoniaFree: true,
            vegan: true,
            longevityWeeks: 3
        },
        price: 24.99,
        currency: 'USD',
        inStock: true,
        images: [
            { src: 'https://placehold.co/400x500/C0C0C0/333?text=Keune+Semi+Silver', alt: 'Keune Semi Color Silver' }
        ],
        tags: ['silver', 'fashion', 'semi', 'grey'],
        createdAt: '2026-02-08T10:00:00Z'
    },
];

// Helper function to get products (can be replaced with API call later)
export async function getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return products;
}

// Get single product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return products.find((p) => p.slug === slug) || null;
}

// Get related products (same brand or shade family, exclude current)
export async function getRelatedProducts(
    productId: string,
    limit: number = 4
): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const currentProduct = products.find((p) => p.id === productId);
    if (!currentProduct) return [];

    const related = products
        .filter((p) => p.id !== productId)
        .filter(
            (p) =>
                p.brand === currentProduct.brand ||
                p.shadeFamily === currentProduct.shadeFamily
        )
        .slice(0, limit);

    return related;
}
