export const getComment = (precip, icon, pm10Value, tempMax, tempYestMax, tempMin) => {
    getRandomCommet = (comments) => {
        index = Math.floor(Math.random() * comments.length)
        return comments[index]
    }

    comment = ''
    if(icon == 'rain') {
        if(precip < 1.22) {
            const comments = [
                '밖에 비 온다 주륵주륵',
                '오늘은 나무들 샤워하는 날~',
                '비도 오는데 김치전 한판 때릴까요?',
            ]
            return getRandomCommet(comments)
        }
        else {
            const comments = [
                '하늘에 구멍 뚫렸나봐',
                '하늘에서 폭우가 빗발친다!',
            ]
            return getRandomCommet(comments)
        }
    }
    if(icon == 'snow') {
        const comments = [
            '엘사가 화났다',
            '올라프 : 내 몸이 커지고 있어~',
        ]
        return getRandomCommet(comments)
    }
    if(pm10Value >= 101) {
        const comments = [
            '오늘 하늘은 공기 반 먼지 반',
            '숨 쉴 수 없다',
            '마스크 필수로 챙겨야 돼요!',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax >= 33 && tempYestMax >= 33) {
        const comments = [
            '태양을 피하고싶은 날씨네요 얼른 피하세요!',
            '자외선이 강해요! 반팔 입고 꼭 썬크림 바르세요!',
            '썬크림도 녹아버릴 폭염이네요 실내로 피신!',
            '폭염 주의보가 내려졌어요 비상비상',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax - tempYestMax >= 4 && tempMax >= 25) {
        const comments = [
            '어제보다 확 더워진 날씨! 주의하세요~',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax - tempYestMax <= -4 && tempMax <= 22) {
        const comments = [
            '어제보다 확 서늘해진 날씨! 감기 조심하세요~',
            '모기 코도 삐뚤어질 날씨 쌀쌀해졌습니당 :0',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax - tempMin >= 12) {
        const comments = [
            '일교차가 커요! 겉옷 챙기세요~',
            '낮엔 덥고 밤엔 춥고 어쩌라는거지?',
            '일교차가 커서 감기 걸리기 딱 좋은 날ㅎㅎ',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax >= 40) {
        const comments = [
            '여기 한국 맞죠?',
            '어디서 타는 냄새 안 나요? 내 땀샘 타는 냄새',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax >= 35) {
        const comments = [
            '겨울 언제 와 ㅠㅠ',
            '오늘의 날씨 점수는 F(Fire)입니다.',
            '냉장고에 들어갔다 나오고 싶다..',
            '남극으로 이사가고싶다..',
            '썬크림도 녹아버릴 폭염이네요 실내로 피신!',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax >= 30) {
        const comments = [
            '겨드랑이땀샘요정 : 오늘 할 일이 많겠군',
            '메르시 : 더위는 죽지 않아요',
            '오늘은 에어컨 밑에 누워서 이불 덮고 쉬세요',
            '올라프 : 나는 녹고있어…',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax >= 25) {
        const comments = [
            '날씨도 더운데 시원한 맥주 한잔 어때요?',
            '아..빙수에 코박고싶다..',
            '더우니까 올 때 메로나',
        ]
        return getRandomCommet(comments)
    }
    if(tempMax>=23) {
        const comments = [
            '볼빨간 사춘기랑 나들이 가고싶은 날~',
            '선선한 바람이 부는 밀린 일 없는 한가한 주말같은 날씨',
            '알라딘 : 아 밤공기가 좋다 매직카펫 타고 날아야지',
        ]
        return getRandomCommet(comments)
    }

    const comments = [
        '나는 필연적인 존재다',
    ]
    return getRandomCommet(comments)
}