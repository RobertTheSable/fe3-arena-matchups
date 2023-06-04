function filterList() {
    $("tr.datarow").hide();
    let plevel = $("#level").val();
    let bounty = $("#bounty").val();
    let selector = "tr.bounty-" + bounty + ".plevel-" + plevel;
    console.log(selector);
    $(selector).show();
}

function toggleRNG() {
    var hidden = ($(this).attr("data-hidden") === "true");
    console.log(hidden);
    $(this).attr("data-hidden", !hidden);
    if (hidden) {
        $(this).text("Hide RNG Positions");
        $(".rngdata").show()
    } else {
        $(this).text("Show RNG Positions");
        $(".rngdata").hide()
    }
}

$( document ).ready(function() {
    $("input#bounty").on("change", filterList);
    $("input#level").on("change", filterList);
    $("button#showrng").on("click", toggleRNG)
});

