export const ADMIN_ROLES = ["shangtingli@outlook.com","shangtingli@gmail.com","yenchenc@usc.edu","liuzhife@usc.edu"]

/**
 * Pagination Settings
 * @type {number}
 */
export const STORES_EACH_PAGE = 3;
export const COMMENTS_EACH_PAGE = 4;
export const TRAVELLERS_EACH_PAGE = 4;
export const TRAVELLERS_EACH_ROW = 2;

/**
 * Travel plans' Hyperparameters
 * @type {number}
 */
export const HOURS_CONSIDERED = 12;
export const DEFAULT_LATTITUDE = -22.814785;
export const DEFAULT_LONGITUDE = -43.246648;

/**
 * Cache Minutes
 * @type {number}
 */
export const CACHE_DURATION_MINUTES= 10;

/**
 * GraphQL list users, stores maximum
 * @type {number}
 */
export const MAX_STORES_LISTED = 50;
export const MAX_USERS_LISTED = 50;
export const MAX_COMMENTS_LISTED = 50;

/**
 * Months
 * @type {string[]}
 */
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
/**
 * Color Schemes to create tags
 * @type {string[]}
 */
export const COLOR_SCHEMES1 = ['#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704']
export const COLOR_SCHEMES2 = ['#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b']
export const COLOR_SCHEMES3 = ['#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f']
export const COLOR_SCHEMES=[];
for(let i=0; i< COLOR_SCHEMES1.length; ++i){
    COLOR_SCHEMES.push(COLOR_SCHEMES1[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES2[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES3[i]);
}

/**
 * All shopping categories to consider about
 * @type {string[]}
 */
export const ALL_CATEGORIES = [
    'Clothing',
    'Shoes',
    'Consumer Electronics',
    'Books',
    'Movies',
    'Cosmetics',
    'Food and Drinks',
    'Sports',
    'Music',
    'Entertaining',
    'DIY',
    'Games',
    'Traveling',
    'Electronics',
    'Furniture',
    'Accessories',
    'Luxury',
    'Economical'
]

/**
 * Number of maximum categories allowed to be selected
 * @type {number}
 */
export const MAXIMUM_CATEGORIES_SELECTED = 5;