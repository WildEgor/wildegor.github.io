$('#C_form').submit(function(e) {
    e.preventDefault();

    if(localStorage['user']) {
        let c_employ = $('#C_employ').val();
        let c_feedback = $('#C_feedback').val();
        let c_rating = $('#C_rating').val();

        let user = localStorage['user'];

        $.ajax({
            method: 'POST',
            url: 'posts/create.php',
            data: {
                employ: c_employ,
                feedback: c_feedback,
                rating: c_rating,
                user_id: user
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
    else {
        alert('Sign in first!!!')
    }
})

const show_feedbacks = () => {
    $.ajax({
        method: 'GET',
        url: 'posts/get.php',
        data: {
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result);
        console.log(response);

        response.forEach(feedbacks => {

            document.querySelector('.posts-list').innerHTML += `
                <div class="post">
                    <h3>${feedbacks.username}</h3>
                    <p>${feedbacks.employ}</p>
                    <p>${feedbacks.feedback}</p>
                    <p>${feedbacks.rating}</p>
                </div>
            `;
        });

    });
};

show_feedbacks();