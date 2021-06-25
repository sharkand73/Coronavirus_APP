// Converts 'yyyy-mm-dd' to 'dd/mm/yyyy'

export const convertDate1 = function(dateString){
    let dateSplit = dateString.split("-");
    let newString = dateSplit[2]+"/"+dateSplit[1]+"/"+dateSplit[0];
    return newString;     
}

// Converts 'yyyy-mm-dd' to words (short month name)

export const convertDate2 = function(dateString){
    let months = [' Jan ',' Feb ',' Mar ',' Apr ',' May ',' Jun ',' Jul ',' Aug ',' Sep ',' Oct ',' Nov ',' Dec '];
    let dateSplit = dateString.split("-");
    let newString = parseInt(dateSplit[2]).toString();
    let suffix = 'th';
    if (newString === '1' || newString === '21' || newString === '31'){suffix="st"}
    else if (newString === '2' || newString === '22'){suffix='nd'}
    else if (newString === '3' || newString === '23'){suffix='rd'};
    newString += suffix;
    let monthIndex = parseInt(dateSplit[1]) - 1;
    newString += months[monthIndex];
    newString += dateSplit[0];
    return newString;
}

export const getMonYYYY = function(dateString){
let months = [' Jan ',' Feb ',' Mar ',' Apr ',' May ',' Jun ',' Jul ',' Aug ',' Sep ',' Oct ',' Nov ',' Dec '];
let dateSplit = dateString.split("-");
let monthIndex = parseInt(dateSplit[1]) - 1;
let newString = months[monthIndex] + " ";
newString += parseInt(dateSplit[0]);
return newString;
}

// Adds commas to large numbers (stolen from internet)

export function nwc(number) {
if (number) {
return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}

// Converts js date object to 'yyyy-mm-dd'
export const convertDate3 = function(date){
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    // if (dd.toString.length === 1) {
    //     dd = "0"+dd
    // };
    if (mm.toString.length === 1) {
        mm = "0"+mm
    };
    let yyyy = date.getFullYear();
    return (yyyy+"-"+mm+"-"+dd);
}

