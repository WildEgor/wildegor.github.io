$('#R_form').submit(function(e) {
    e.preventDefault();

    let r_username = $('#R_username').val();
    let r_password = $('#R_password').val();
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})");
    if(strongRegex.test(r_password) == false) {
        alert('Password invalid');
    }
    else {
        $.ajax({
            method: 'POST',
            url: 'auth/signup.php',
            data: {
                username: r_username,
                password: r_password
            }
        }).done(function(result) {
            console.log(result);
            let response = JSON.parse(result);
            console.log(response);
            if(response.success) {
                alert('Done');
                $('#R_form').addClass("hide");
            }
            else {
                alert(response.error);
            }
        });
    }
});

$('#L_form').submit(function(e) {
    e.preventDefault();

    let l_username = $('#L_username').val();
    let l_password = $('#L_password').val();
    
    $.ajax({
        method: 'GET',
        url: 'auth/signin.php',
        data: {
            username: l_username,
            password: l_password
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result);
        console.log(response);
        if(response.success) {
            alert('Welcome');
            localStorage['user'] = response.user_id;
            localStorage['username'] = response.user_name;
            $('#L_form').addClass("hide");
            $('#R_form').addClass("hide");
            $( ".UserNameShow" ).removeClass('hide');
            $( ".UserNameShow" ).css( "border", "3px solid red" );
            $( ".UserNameShow" ).html("<h2>" + response.user_name + "</h2>");
        }
        else {
            alert(response.error);
        }
    })
})

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    $('#L_form').removeClass("hide");
    $('#R_form').removeClass("hide");
    $( ".UserNameShow" ).addClass('hide');
}

