const pmStand = [
    [15, 30, 40, 50, 75, 100, 150],
    [8, 15, 20, 25, 37, 50, 75]
];
const pmIcon = [
    require('../assets/images/dustIcon/1_best.png'),
    require('../assets/images/dustIcon/2_great.png'),
    require('../assets/images/dustIcon/3_verygood.png'),
    require('../assets/images/dustIcon/4_good.png'),
    require('../assets/images/dustIcon/5_soso.png'),
    require('../assets/images/dustIcon/6_bad.png'),
    require('../assets/images/dustIcon/7_angry.png'),
    require('../assets/images/dustIcon/8_terrible.png'),
];
const pmCondition = [
    '최고 좋음',
    '좋음',
    '양호',
    '보통',
    '나쁨',
    '상당히 나쁨',
    '매우 나쁨',
    '최악',
];

export const getPmIcon = (value, type) => {
    for(let i = 0;i<8;++i) {
        if(value <= pmStand[type][i])
            return pmIcon[i];
    }
}

export const getPmCondition = (value, type) => {
    for(let i = 0;i<8;++i) {
        if(value <= pmStand[type][i])
            return pmCondition[i];
    }
}