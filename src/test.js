const ElementDegistir = (users,paces) => {
    let temp = users;
    for(let i = 0 ; i < users.length ; i++){
        for(let j = 0 ; j < paces.length ; j++){
            if(temp[i]['userid'] === paces[j]['userid']) {

             temp[i]['total_time'] = paces[j]['total_time'];
             temp[i]['distance'] = paces[j]['distance'];
             temp[i]['average_pace'] = temp[i]['total_time']/temp[i]['distance'];
    }
        }
    }
    return temp;
}
//console.log(ElementDegistir(users,paces));


exports.ElementDegistir = ElementDegistir;