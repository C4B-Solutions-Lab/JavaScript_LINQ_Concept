// context-wide available object
var my_custom_jlc_filters = {
    myFilter1 : function(min, max, currentObj) {
        var obj_id_prop_Value = currentObj['id'];

        if(obj_id_prop_Value > min && obj_id_prop_Value < max)
            return true;

        return false;
    },

    myFilter2 : function(idValue, currentObj) {
        var obj_id_prop_Value = currentObj['id'];

        if(obj_id_prop_Value > idValue)
            return true;

        return false;
    },

    compareObjAsc : function(itemCurrent, itemPrevious) {
        if(itemCurrent.id > itemPrevious.id)
            return 1;
        else
            return -1;
    },

    compareObjDesc : function(itemCurrent, itemPrevious) {
        if(itemCurrent.id > itemPrevious.id)
            return -1;
        else
            return 1;
    }
};


window.jlc_filters = window.jlc_filters || my_custom_jlc_filters;