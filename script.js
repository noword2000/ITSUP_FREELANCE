$(document).ready(() => {
    $("#contact_form").submit((event) => {
        event.preventDefault();
        const nom_complet = $("#nom_complet").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (nom_complet.trim() === "") {
            $("#nom_complet_block").html("Le nom complet ne peut pas être vide").addClass("text-danger");
        }
        else if (email.trim() === "") {
            $("#email_block").html("L'email ne peut pas être vide").addClass("text-danger");
        }
        else if (message.trim() === "") {
            $("#message_block").html("Le message ne peut pas être vide").addClass("text-danger");
        }
        else {
            $("#nom_complet_block").html("Saisissez votre nom complet.").removeClass("text-danger");
            $("#email_block").html("Saisissez votre adresse mail.").removeClass("text-danger");
            $("#message_block").html("Saisissez votre message.").removeClass("text-danger");

            $("#success_block").html(`D'accord Monsieur "${nom_complet}" nous avons reçu votre message. Nous vous répondrons dans peu temps sur votre email "${email}".`).addClass("text-success");

            $("#nom_complet").val("");
            $("#email").val("");
            $("#message").val("");
        }
    });

    $("#showHidePortfolio").click((event)=>{
        $("#portfolioContainer").toggle();
    });

    $("#animateServices").click((event)=>{
        $("#servicesContainer").toggle().fadeToggle(3000);
    });
});