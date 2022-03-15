var numfluffies = 6;
var numcuties = 8;
var numwhites = 3;

var boughtfluf = 0;
var boughtcuties = 0;
var boughtwhitey = 0;

var pricefluf = 9;
var pricecute = 5;
var pricewhite = 3.5;

var totalpricefluffy = 0;
var totalpricecutey = 0;
var totalpricewhitey = 0;

var totalprice = 0;
var VAT = 0;
var VATtotal = 0;

function fluffy() {
    //alert("hey");
    numfluffies = numfluffies - 1;
    document.getElementById("valueFluffy").innerText = "In Stock = " + numfluffies;
    boughtfluf = boughtfluf + 1;

    if (numfluffies < 1) {
        document.getElementById("valueFluffy").innerText = "!OUT OF STOCK!";
        document.getElementById("buttonFluffy").remove();
        document.getElementById("priceFluffy").remove();
    }
}

function cute() {
    numcuties = numcuties - 1;
    document.getElementById("valueCutey").innerText = "In Stock = " + numcuties;
    boughtcuties = boughtcuties + 1;

    if (numcuties < 1) {
        document.getElementById("valueCutey").innerText = "!OUT OF STOCK!";
        document.getElementById("buttonCutey").remove();
        document.getElementById("priceCutey").remove();
    }
}

function white() {
    numwhites = numwhites - 1;
    document.getElementById("valueWhitey").innerText = "In Stock = " + numwhites;
    boughtwhitey = boughtwhitey + 1;

    if (numwhites < 1) {
        // disable button...
        document.getElementById("valueWhitey").innerText = "!OUT OF STOCK!";
        document.getElementById("buttonWhites").remove();
        document.getElementById("priceWhitey").remove();
    }

}

function loaded() {
    // alert("hii");
    document.getElementById("valueFluffy").innerText = "In Stock = " + numfluffies;
    document.getElementById("priceFluffy").innerText = "price fluffy rat = €" + pricefluf;

    document.getElementById("valueCutey").innerText = "In Stock = " + numcuties;
    document.getElementById("priceCutey").innerText = "price cute mouse = €" + pricecute;

    document.getElementById("valueWhitey").innerText = "In Stock = " + numwhites;
    document.getElementById("priceWhitey").innerText = "price white mouse = €" + pricewhite;
}

function checkout() {
    totalpricefluffy = boughtfluf * pricefluf;
    totalpricecutey = boughtcuties * pricecute;
    totalpricewhitey = boughtwhitey * pricewhite;
    VAT = totalprice / 100 * 21;
    VATtotal = totalprice + VAT;
    totalprice = totalpricefluffy + totalpricecutey + totalpricewhitey;
    
    document.getElementById("boughtFluffy").innerText = boughtfluf + " Fluffy Rat's with a total price of €" + totalpricefluffy;
    document.getElementById("boughtCutey").innerText = boughtcuties + " Cute Mouse's with a total price of €" + totalpricecutey;
    document.getElementById("boughtWhitey").innerText = boughtwhitey + " White Mouse's with a total price of €" + totalpricewhitey;

    document.getElementById("totalPrice").innerText = "your total price without VAT is €" + totalprice;
    document.getElementById("VAT").innerText = "VAT price is €" + VAT;
    document.getElementById("VATtotal").innerText = "Your total price is €" + VATtotal;
}