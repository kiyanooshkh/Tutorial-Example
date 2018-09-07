//let phoneNumber = "+(234)-8[7]_3-2-3+98"

//console.log("after " + phoneNumberCleaner(phoneNumber));

function phoneNumberCleaner(value) {
    if (value) {
      return value = value.replace(/[\(\)\-\_\+\[\]\s]+/g,'');
    } else return ''
}
