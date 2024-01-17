//
class Github {
    constructor() {
        this.client_id = '4905e3a24606033c122f';
        this.client_secret = '066dce2629721724b48114922d21c2c635b46295';
    }
    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}