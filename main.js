
var AutoComplete = function(){

    var self;

    input = document.getElementById( 'string' );
    container = document.getElementById( 'suggestions' );
    dictionary = ['billy', 'silly', 'milk', 'silk', 'bob', 'rob', 'snob', 'lob', 'song', 'long', 'strong', 'remember', 'member', 'december'];

    var Completion = function(){

        self = this;

        input.onkeyup = self.onKeyUp;

        container.onclick = function( e ){
            var target = e.target.innerHTML;
            self.complete(target);
        };

    };

    Completion.prototype.onKeyUp = function() {

        var text = input.value;
        container.innerHTML = '';

        if (text == '') {
            return console.log('There\'s nothing to search dummy');
        }else {
            self.suggest( text );
        }

    };

    Completion.prototype.suggest = function( text ){

        var fragment = document.createDocumentFragment();

        for(var i = 0; i < dictionary.length; i++){

            var index = dictionary[i].indexOf(text);

            if(index != -1){
                var el =  document.createElement( 'li' );
                var textNode = document.createTextNode(dictionary[i]);
                el.appendChild(textNode);

                fragment.appendChild(el);
            }

        }

        container.appendChild(fragment);
    };

    Completion.prototype.complete = function( string ){
        input.value = string;
        container.innerHTML = '';
    };

    return new Completion();

};

var autoCompletion = new AutoComplete();