export default class data {
    static state = {
        dev : false,
        dev_hours : 22,
    }

    static setDevMode(mode){
        this.state = {
            ...this.state,
            dev : mode,
        }
    }

    static setDevHours(hours){
        this.state = {
            ...this.state,
            dev_hours : hours,
        }
    }

    static randDevHours() {
        hours = (Math.random() * 24).toFixed(0)
        this.state = {
            ...this.state,
            dev_hours : hours,
        }
    }

    static getHours(){
        if(this.state.dev) {
            return this.state.dev_hours
        }
        return new Date().getHours()
    }
}