import decode from 'jwt-decode'

class Authenticate {
    getProfile() {
        return decode(this.getToken())
    }
    loggedIn() {
        const token = this.getToken()
        return token ? true : false
    }
    getToken() {
        return localStorage.getItem('id_token')
    }
    login(idToken) {
        localStorage.setItem('id_token', idToken)
        window.location.assign('/')
    }
    logout() {
        localStorage.removeItem('id_token')
        window.location.reload()
    }
}

const authInstance = new Authenticate();
export default authInstance;