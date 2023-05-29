
$(function(){
    $("#container").draggable();
})

$(function(){
    $("#Registration").validate({
        rules:{
            fname :{ 
                required : true
            }, 
            sname :{ 
                required : true
            }, 
            email :{
                required :true,
                email : true
            },
            password :{
                required : true,
                minlength : 5,
            },
            confirmpassword :{
                required : true,
                minlength : 5,
                equalTo : "#password"             
            }
        },
        messages : {
            fname : {
                required : "Please Enter Your First Name"
            },
            sname : {
                required : "Please Enter Your Second Name"
            },
            email :{
                required : "Please Enter Your Email Address",
                email : "Pleas Enter A Valid Email Address"
            },
            password:{
                required : "Please Provide A Password",
                minlength : "Your Password Must Be Consist Of At Least 5 Characters"
            },
            confirmpassword:{
                required : "Please Re-enter The Password",
                minlength : "Your Password Must Be Consist Of At Least 5 Characters",
                equalTo : "Please Enter The Same Password As Above"
            }
        }
    })
})