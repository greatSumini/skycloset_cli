export const getDiscomfort = (temp, hum) => {
    return temp * 1.8 - (0.55 * (1 - hum) * (1.8 * temp - 26)) + 32
}

export const getUserDiscomfort = (temp, hum, bias, sun) => {
    return temp * 1.8 - (0.55 * (1 - hum) * (1.8 * temp - 26)) + 32 + 3.4 * bias + (3 - sun * 10) / 3
}

export const getDiscomfortGrade = (temp, hum) => {
    const discomfort = temp * 1.8 - (0.55 * (1 - hum) * (1.8 * temp - 26)) + 32
    if(discomfort>=80) {
        return '매우 높음'
    }
    if(discomfort>=75) {
        return '높음'
    }
    if(discomfort>=68) {
        return '보통'
    }
    return '낮음'
}