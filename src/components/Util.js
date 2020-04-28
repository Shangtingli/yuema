

export function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    else {

        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit==="K") { dist = dist * 1.609344 }
        if (unit==="N") { dist = dist * 0.8684 }
        return dist;
    }
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


export function verifyTraveller(traveller,validAge,validGender){
    if (validAge !== 'none' && traveller['ageRange'] !== validAge){
        return false;
    }
    if (validGender !== 'none' && traveller['sex'] !== validGender){
        return false;
    }

    return true;
}

export function filterTravellers(travellerData,validAge,validGender){
    const filtered = travellerData.filter(function(traveller){
        return verifyTraveller(traveller,validAge,validGender);
    })

    return filtered;
}

function choose(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

export function generateTraveller(data){
    const macid = Object.keys(data)[0];
    const ageRange = data[macid][0][1];
    const gender = data[macid][0][0];
    const country = data[macid][0][2];

    const firstNames = ["James","Jason","Tim","Steven","Jimmy"]
    const lastNames = ["Timwood","WoodField","Lee","Jack"]
    const traveller = {};

    const first = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const second = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const third = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    debugger;
    traveller["firstName"] = choose(firstNames);
    traveller["lastName"] = choose(lastNames);
    traveller["ageRange"] = ageRange;
    traveller["sex"] = gender;
    traveller["country"] = country;
    traveller["email"] = first + second + third + "@usc.edu";
    traveller["avatarKey"] = "avatars/defaultAvatar.png";
    traveller["phoneNumber"] = "1234567890";
    traveller["hobbies"] = "undecided"
    return traveller;
}