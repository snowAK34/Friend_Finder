module.exports = function(newAdd, friendsArr) {
    
    let bestFriend = friendsArr[0];
    let score = 50;

    for (let i = 0; i < friendsArr.length; i++) {

        for (answers in friendsArr[i]) {
            let sumDiff;
            for (let j = 0; j < answers.length; j++) {
                let diff = answers[j] - newAdd.answers[j];
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
    }
    return bestFriend;
}