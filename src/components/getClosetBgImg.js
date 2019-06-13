export default getClosetBgImg = () => {
    hour = new Date().getHours();
    if(hour>=5&&hour<6) // 새벽 [5, 6)
        return require('../assets/images/closet/bar_05-06.png')
    if(hour>=6&&hour<8) // 아침 [6, 8)
        return require('../assets/images/closet/bar_06-08.png')
    if(hour>=8&&hour<13) // 낮 [8, 13)
        return require('../assets/images/closet/bar_08-13.png')
    if(hour>=13&&hour<18) // 저녁 [13, 18)
        return require('../assets/images/closet/bar_13-18.png')
    if(hour>=18&&hour<20) // 밤 [18, 20)
        return require('../assets/images/closet/bar_18-20.png')
    if(hour>=20||hour<5) // 밤 [20, 24)
        return require('../assets/images/closet/bar_20-05.png')
}