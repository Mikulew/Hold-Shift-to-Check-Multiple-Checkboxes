(function(){
    var checkboxes = document.querySelectorAll(".inbox input[type=\"checkbox\"]");
    var lastChecked;

    function handleCheck(e) {
        var inBetween = false;
        var that = this;
        if(e.shiftKey && that.checked) {
            checkboxes.forEach(function(checkbox) {

               if(checkbox === that || checkbox === lastChecked) {
                   inBetween = !inBetween;
               }
                if(inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    }

    checkboxes.forEach(function(checkbox) {
        return checkbox.addEventListener('click', handleCheck, false);
    });
})();