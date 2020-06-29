require(
[
    'Magento_Ui/js/lib/validation/validator',
    'jquery',
    'mage/translate'
], function(validator, $){

    validator.addRule(
        'validate-zip-br',
        function (value) {
            //return true or false based on your logic
            var patt = new RegExp("^[0-9]{5}\-?[0-9]{3}$");
            return patt.test(value);
        },
        $.mage.__('Please enter a valid zip code.')
    );
});
