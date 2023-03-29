$(document).ready(function () {


    $('.formContact').submit(function (e) {
        e.preventDefault();
        var formIndex = $(this).attr('data-formIndex');
        var fname = $(this).find('.fname').val(),
            email = $(this).find('.email').val(),
            subject = $(this).find('.subject').val(),
            userMessage = $(this).find('.message').val();


        if (fname == '' || email == '' || subject == "" || userMessage == "") {
            $('.statusForm').fadeIn(500).html('All fields are mandatory');
        }

        else {
            Email.send({
                Host: "smtp.elasticemail.com",
                // Username: "anereddyshanreddy@gmail.com",
                // Password: "E58DAA3A46B771930C78829C43EADCF04DFB",
                // To: "anereddyshanreddy@gmail.com",
                // From: 'anereddyshanreddy@gmail.com',
                // Username: "akanksha.c@1digitals.com",
                // Password: "D8D4168E7754F8E8E745F46E547895113837",
                Username: "contactus@1digitals.com",
                Password: "BE3F50FAC6B1B586F2C1A847B7562C583A96",
                To: "contactus@1digitals.com",
                From: 'contactus@1digitals.com',
                Subject: `Query From ${fname}`,
                Body: `<html>
                        <div>
                        <h2>User Details</h2>
                            <table style="width:500px;border:1px solid #000">
                                <tr style="border:1px solid #000; padding:10px 0px;background-color:#000;color:#fff">
                                    <th style="padding:5px">Name</th>
                                    <th style="padding:5px">Email</th>
                                    <th style="padding:5px">Subject</th>
                                    <th style="padding:5px">Message</th>
                                </tr>

                                <tr style="border:1px solid #000">
                                    <td style="padding:5px">${fname}</td>
                                    <td style="padding:5px">${email}</td>
                                    <td style="padding:5px">${subject}</td>
                                    <td style="padding:5px">${userMessage}</td>
                                </tr>
                            </table>
                        </div>
                    </html>       
                `,
            })
                .then(function (message) {
                    console.log(message)
                    $('.form-process').css({'display':'none'})
                    $('.statusForm').css({
                        'color': 'green'
                    })
                    $('.statusForm').fadeIn(500).html('The form was submitted successfully!');
                    $('.fname').val('');
                    $('.email').val('');
                    $('.subject').val('');
                    $('.message').val('');
                });


                setTimeout(()=>{
                    $('.statusForm').fadeOut().html('');
                },5000)
        }
    });
});