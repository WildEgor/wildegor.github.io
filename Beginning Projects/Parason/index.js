$('#R_form').submit(function(e) {
    e.preventDefault()

    let r_username = $('#R_username').val()
    let r_password = $('#R_password').val()
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,16})");
    if(strongRegex.test(r_password) == false) {
        alert('Password invalid')
    }
    else {
        $.ajax({
            method: 'POST',
            url: 'signup.php',
            data: {
                username: r_username,
                password: r_password
            }
        }).done(function(result) {
            console.log(result);
            let response = JSON.parse(result)
            console.log(response);
            if(response.success) {
                alert('Done')
            }
            else {
                alert(response.error)
            }
        })
    }
})

$('#L_form').submit(function(e) {
    e.preventDefault()

    let l_username = $('#L_username').val()
    let l_password = $('#L_password').val()
    
    $.ajax({
        method: 'GET',
        url: 'signin.php',
        data: {
            username: l_username,
            password: l_password
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result)
        console.log(response);
        if(response.success) {
            alert('Welcome')
        }
        else {
            alert(response.error)
        }
    })
})