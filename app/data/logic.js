module.exports = function(newAdd, friendsArr) {
    
    let bestFriend = friendsArr[0];
    let score = 50;

    for (let i = 0; i < friendsArr.length; i++) {    
            let sumDiff = 0;
            for (let j = 0; j < friendsArr[i].answers.length; j++) {
                let diff = friendsArr[i].answers[j] - newAdd.answers[j];
                if (diff < 0) {
                    diff *= -1;
                }
                sumDiff += diff;
            }
            if (sumDiff < score) {
                score = sumDiff;
                bestFriend = friendsArr[i];
            }
    }
    return bestFriend;
}