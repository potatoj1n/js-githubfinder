class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showproifle(user) {
            this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-third">Followers : ${user.followers}</span>
                        <span class="badge badge-success">Following : ${user.following}</span>
                        <br><br>

                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website / Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>

                    </div>

                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        
        `;
        }
        
        // show alert message
    showalert(message, classname) {

        // this.clearalert();
        // create div
        const div = document.createElement('div');
        // addclass
        div.className = classname;
        // add text
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.searchContainer');
        // get the search box
        const search = document.querySelector('.search');
        // inser alert
        container.insertBefore(div, search);


        // timeout after 3 second
        // setTimeout(() => {
        //     this.clearalert();
        // }, 3000);
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}