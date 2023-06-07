function doFilter(selector) {
    let plevel = $("#level").val();
    let bounty = $("#bounty").val();
    
    if (plevel !== "") {
        selector += (".plevel-" + plevel);
    }
    if (bounty !== "") {
        selector += (".bounty-" + bounty);
    }
    if (selector === "") {
        $("tbody.datarow").show();
        return;
    }
    $("tbody.datarow").hide();
    $(selector).show();
}

function filterList() {
    let rngHidden = ($("button#showrng").attr("data-hidden") === "true");
    let selector = "";
    
    if (rngHidden) {
        selector += ".norng";
    } else {
        selector += ".rngdata";
    }
    doFilter(selector);
}

function toggleRNG() {
    $("button#showrng").attr("disabled", true);
    setTimeout(function() {
        var hidden = ($("button#showrng").attr("data-hidden") === "true");
        $("button#showrng").attr("data-hidden", !hidden);
        if (hidden) {
            $("button#showrng").text("Hide RNG Positions");
            $(".rngdata").show();
            $(".norng").hide();
            filterList(".rngdata");
        } else {
            $("button#showrng").text("Show RNG Positions");
            $(".rngdata").hide();
            $(".norng").show();
            filterList(".norng");
        }
        $("button#showrng").attr("disabled", false);
    }, 0);
}

$( document ).ready(function() {
    $("input#bounty").on("change", filterList);
    $("input#level").on("change", filterList);
    $("button#showrng").on("click", toggleRNG)
});

