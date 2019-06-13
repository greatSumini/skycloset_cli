const pmStand = [
    [15, 30, 40, 50, 75, 100, 150],
    [8, 15, 20, 25, 37, 50, 75]
];
const pmIcon = [
    require('../../assets/images/dustIcon/1_best.png'),
    require('../../assets/images/dustIcon/2_great.png'),
    require('../../assets/images/dustIcon/3_verygood.png'),
    require('../../assets/images/dustIcon/4_good.png'),
    require('../../assets/images/dustIcon/5_soso.png'),
    require('../../assets/images/dustIcon/6_bad.png'),
    require('../../assets/images/dustIcon/7_angry.png'),
    require('../../assets/images/dustIcon/8_terrible.png'),
];
const pmCondition = [
    '최고',
    '좋음',
    '양호',
    '보통',
    '주의',
    '나쁨',
    '위험',
    '최악',
];
const pmImoticon = [
    '😍',
    '😄',
    '🙂',
    '😐',
    '😕',
    '😫',
    '😡',
    '👿',
];

export const getPmIcon = (value, type) => {
    let i = 0
    for(;i<7;++i) {
        if(value <= pmStand[type][i])
            break;
    }
    return pmIcon[i];
}

export const getPmCondition = (value, type) => {
    let i = 0
    for(;i<7;++i) {
        if(value <= pmStand[type][i])
            break;
    }
    return pmCondition[i];
}

export const getPmImoticon = (value, type) => {
    let i = 0
    for(;i<7;++i) {
        if(value <= pmStand[type][i])
            break;
    }
    return pmImoticon[i];
}