export const ADMIN_ROLES = ["shangtingli@outlook.com","shangtingli@gmail.com","yenchenc@usc.edu","liuzhife@usc.edu"]
export const STORES_EACH_PAGE = 3;
export const COMMENTS_EACH_PAGE = 4;
export const TRAVELLERS_EACH_PAGE = 4;
export const TRAVELLERS_EACH_ROW = 2;
export const HOURS_CONSIDERED = 12;
export const CACHE_DURATION_MINUTES= 10;
export const DEFAULT_LATTITUDE = -22.814785;
export const DEFAULT_LONGITUDE = -43.246648;
// export const TRAVEL_PLAN_COOKIE_TOKEN_KEY="travel_plan_cookie_token_key_yuema_application_author_lst";
// export const TRAVEL_PLAN_VALID_DURATION_HOURS = 6;
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
export const COLOR_SCHEMES1 = ['#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704']
export const COLOR_SCHEMES2 = ['#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b']
export const COLOR_SCHEMES3 = ['#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f']
export const COLOR_SCHEMES=[];
for(let i=0; i< COLOR_SCHEMES1.length; ++i){
    COLOR_SCHEMES.push(COLOR_SCHEMES1[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES2[i]);
    COLOR_SCHEMES.push(COLOR_SCHEMES3[i]);
}

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
export const MAXIMUM_HOBBIES_SELECTED = 5;