$(function () {
    // btn.addEventListener("click",()=>{
    //     console.log(heading1.innerText);

    // });
    $("#btn").on("click", () => {
        console.log($("#heading1").text());
    });

    // form.addEventListener("submit",e=>{
    //     e.preventDefault();
    //     if(title.value != ""){
    //         heading1.innerText = title.value;
    //     }else{
    //         Swal.fire({
    //             title: "خطا",
    //             text: "ورودی نباید خالی باشد.",
    //             icon: "error"
    //           });
    //     }
    // });

    $("#form").on("submit", e => {
        e.preventDefault();
        if ($("#title").val() != "") {
            $("#heading1").text($("#title").val());

            // $("#heading1").text("درود "+$("#title").val())
            Swal.fire({
                title: "خوش آمدید",
                text: "سلام "  +$("#title").val() ,
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "خطا",
                text: "ورودی نباید خالی باشد.",
                icon: "error"
            });
        }
    });

})


