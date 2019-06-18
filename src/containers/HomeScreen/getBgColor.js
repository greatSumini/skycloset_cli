import data from '../../../config/data'

export const getHomeBgColor = () => {
    hour = data.getHours()
    console.log(hour)
    if(hour>=0&&hour<5) // 밤 [0, 5)
        return ['#0D1F53', '#141F3E']
    if(hour>=5&&hour<6) // 새벽 [5, 6)
        return ['#3C4F7E', '#EFD09E']
    if(hour>=6&&hour<8) // 아침 [6, 8)
        return ['#8EA6C1', '#F5BE63']
    if(hour>=8&&hour<13) // 낮 [8, 13)
        return ['#83D7F7', '#4DADFF']
    if(hour>=13&&hour<18) // 저녁 [13, 18)
        return ['#77B3FA', '#0F77ED']
    if(hour>=18&&hour<20) // 늦저녁 [18, 20)
        return ['#4B74AA', '#B38C98', '#DD836F']
    if(hour>=20&&hour<24) // 밤 [20, 24)
        return ['#243B73', '#2B4590']
}

export const getCondBoxColor = () => {
    hour = data.getHours()
    if(hour>=0&&hour<5) // 밤 [0, 5)
        return '#334475'
    if(hour>=5&&hour<6) // 새벽 [5, 6)
        return '#323D5D'
    if(hour>=6&&hour<8) // 아침 [6, 8)
        return '#76838D'
    if(hour>=8&&hour<13) // 낮 [8, 13)
        return '#55ABD2'
    if(hour>=13&&hour<18) // 저녁 [13, 18)
        return '#4385D2'
    if(hour>=18&&hour<20) // 늦저녁 [18, 20)
        return '#41547E'
    if(hour>=20&&hour<24) // 밤 [20, 24)
        return '#00165A'
}