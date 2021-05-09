$(document).ready(function() {
    var coinURL = 'https://api.nomics.com/v1/currencies/ticker?key=28a45504e7a0e0963495e7301bf1a885&sort=rank&interval=1d&convert=USD&per-page=10&page=1'
   
    $.ajax({
        url: coinURL,
        type: 'GET',
        Access-Control-Allow-Headers: *,
        dataType: 'jsonp',
        contentType: 'application/json',
        crossDomain: true,
        success: function() { alert("Success"); },
        error: function() { alert('Failed!'); }
    }).done(function (response) {
        console.log(response)
        displayCrypto(response)
    }).fail(function (error) {
        alert("Error occured")
    })
    
    function jsonp_callback(json){
        console.log(json)
    }
    
    function displayCrypto(response){

        var firstCrypto = $(".symbolone h4")
        firstCrypto.text("Symbol : "+response[0].id)
        firstCrypto = $(".first")
        firstCrypto.text(response[0].name)
        firstCrypto = $("#firstImg")
        firstCrypto.attr("src",response[0].logo_url)
        firstCrypto = $(".priceone h4")
        firstCrypto.text("Price : "+response[0].price.substring(0,8)+" USD")
        firstCrypto = $(".capone h4")
        firstCrypto.text("Market Cap : "+response[0].market_cap)
        firstCrypto = $(".rankone h4")
        firstCrypto.text("Rank : "+response[0].rank)

        var secondCrypto = $(".symbolsecond h4")
        secondCrypto.text("Symbol : " + response[1].id)
        secondCrypto = $(".second")
        secondCrypto.text(response[1].name)
        secondCrypto = $("#secondImg")
        secondCrypto.attr("src", response[1].logo_url)
        secondCrypto = $(".pricesecond h4")
        secondCrypto.text("Price : " + response[1].price.substring(0, 8) + " USD")
        secondCrypto = $(".capsecond h4")
        secondCrypto.text("Market Cap : " + response[1].market_cap)
        secondCrypto = $(".ranksecond h4")
        secondCrypto.text("Rank : " + response[1].rank)

        var thirdCrypto = $(".symbolthird h4")
        thirdCrypto.text("Symbol : " + response[2].id)
        thirdCrypto = $(".third")
        thirdCrypto.text(response[2].name)
        thirdCrypto = $("#thirdImg")
        thirdCrypto.attr("src", response[2].logo_url)
        thirdCrypto = $(".pricethird h4")
        thirdCrypto.text("Price : " + response[2].price.substring(0, 8) + " USD")
        thirdCrypto = $(".capthird h4")
        thirdCrypto.text("Market Cap : " + response[2].market_cap)
        thirdCrypto = $(".rankthird h4")
        thirdCrypto.text("Rank : " + response[2].rank)

        var fourthCrypto = $(".symbolfourth h4")
        fourthCrypto.text("Symbol : " + response[3].id)
        fourthCrypto = $(".fourth")
        fourthCrypto.text(response[3].name)
        fourthCrypto = $("#fourthImg")
        fourthCrypto.attr("src", response[3].logo_url)
        fourthCrypto = $(".pricefourth h4")
        fourthCrypto.text("Price : " + response[3].price.substring(0, 8) + " USD")
        fourthCrypto = $(".capfourth h4")
        fourthCrypto.text("Market Cap : " + response[3].market_cap)
        fourthCrypto = $(".rankfourth h4")
        fourthCrypto.text("Rank : " + response[3].rank)

        var tableCrypto = $("#coin1")
        tableCrypto.text(response[4].name)
        tableCrypto = $("#cell1-1")
        tableCrypto.text(response[4].rank)
        tableCrypto = $("#cell2-1")
        tableCrypto.text(response[4].id)
        tableCrypto = $("#cell3-1")
        tableCrypto.text(response[4].price.substring(0,8))
        tableCrypto = $("#cell4-1")
        tableCrypto.text(response[4].market_cap)

        tableCrypto = $("#coin2")
        tableCrypto.text(response[5].name)
        tableCrypto = $("#cell1-2")
        tableCrypto.text(response[5].rank)
        tableCrypto = $("#cell2-2")
        tableCrypto.text(response[5].id)
        tableCrypto = $("#cell3-2")
        tableCrypto.text(response[5].price.substring(0, 8))
        tableCrypto = $("#cell4-2")
        tableCrypto.text(response[5].market_cap)

        tableCrypto = $("#coin3")
        tableCrypto.text(response[6].name)
        tableCrypto = $("#cell1-3")
        tableCrypto.text(response[6].rank)
        tableCrypto = $("#cell2-3")
        tableCrypto.text(response[6].id)
        tableCrypto = $("#cell3-3")
        tableCrypto.text(response[6].price.substring(0, 8))
        tableCrypto = $("#cell4-3")
        tableCrypto.text(response[6].market_cap)

        tableCrypto = $("#coin4")
        tableCrypto.text(response[7].name)
        tableCrypto = $("#cell1-4")
        tableCrypto.text(response[7].rank)
        tableCrypto = $("#cell2-4")
        tableCrypto.text(response[7].id)
        tableCrypto = $("#cell3-4")
        tableCrypto.text(response[7].price.substring(0, 8))
        tableCrypto = $("#cell4-4")
        tableCrypto.text(response[7].market_cap)

        var tableCrypto = $("#coin5")
        tableCrypto.text(response[8].name)
        tableCrypto = $("#cell1-5")
        tableCrypto.text(response[8].rank)
        tableCrypto = $("#cell2-5")
        tableCrypto.text(response[8].id)
        tableCrypto = $("#cell3-5")
        tableCrypto.text(response[8].price.substring(0, 8))
        tableCrypto = $("#cell4-5")
        tableCrypto.text(response[8].market_cap)

        var tableCrypto = $("#coin6")
        tableCrypto.text(response[9].name)
        tableCrypto = $("#cell1-6")
        tableCrypto.text(response[9].rank)
        tableCrypto = $("#cell2-6")
        tableCrypto.text(response[9].id)
        tableCrypto = $("#cell3-6")
        tableCrypto.text(response[9].price.substring(0, 8))
        tableCrypto = $("#cell4-6")
        tableCrypto.text(response[9].market_cap)
    }
});
