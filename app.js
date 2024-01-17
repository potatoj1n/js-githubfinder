// init github
const github = new Github;
// init ui class
const ui = new UI;

// serarch input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if (userText !== '') {
        // make http call

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    //ui.showalert('User Not Found', 'alert alert-danger');

                } else {
                    // show profile
                    ui.showproifle(data.profile);

                }
            });
    } else {
        // clear profile
        ui.clearProfile();

    }
});