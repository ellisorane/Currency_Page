$(() => {
    // $('#ready').on('click', () => {
    // List available currencies
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://currency28.p.rapidapi.com/all-currency",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency28.p.rapidapi.com",
            "x-rapidapi-key": "b1f64bffc2msh36573fe307fd27ep149d28jsn7e9d51ab6b76"
        }
    }

    $.ajax(settings).done(response => {
        $.each(response.result, (index, curr) => {
            // console.log(curr.name)
            $('.select_currency').append(`
                <option value="${curr.code}">${curr.name} - ${curr.code}</option>
            `)
        })
    })//End of listing availble currencies

    // })//End of Ready on click
        
    
    // Convert Currencies
    $('#submit').on('click', (e) => {
        e.preventDefault()
        let curr1 = $('#currency_1').val()
        const currType1 = $('#currency_1_type')
        const currType2 = $('#currency_2_type')

        if (curr1 !== '') {
            //Show spinner while waiting for the api to respond
            $('.currency_2_div').html('<div class="loader">Loading...</div>')

            const settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://currency28.p.rapidapi.com/convert-currency?amount=${curr1}&to=${currType2.val()}&from=${currType1.val()}`,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "currency28.p.rapidapi.com",
                    "x-rapidapi-key": "b1f64bffc2msh36573fe307fd27ep149d28jsn7e9d51ab6b76"
                }
            }

            $.ajax(settings).done((response) => {
                let amount = response.result.value.toFixed(2)
                $('.currency_2_div').html(`<input type="number" id="currency_2" class="input_output form-control" value="${amount}" disabled>`)
            })
        } 
        
        
    })//End of converting currencies



})//End of Jquery