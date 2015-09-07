var Language = function(language) {
    for (var k of Object.keys(language)) {
        if(!this[k]) this[k] = ko.observable(language[k]);
    }
    // this.name = ko.observable(language.name);
    // this.credit = ko.observable(language.credit);
    // // this.header = ko.observable(language.header);
};

var ViewModel = function(data) {
    var self = this;
    self.languages = ko.observableArray(
        ko.utils.arrayMap(data, function(i) {
            return new Language(i);
        })
    );
    self.selectedLanguage = ko.observable() || languages[0];
};


var languages = [
    {
        name        : "English",
        credit      : "by HTML5 UP",
        welcome     : "Welcome",
        descL1      : "this is a free",
        descL2      : "responsive template",
        more        : "Tell Me More",
        twentiethL1 : "As this is my twentieth freebie for HTML5 UP",
        twentiethL2 : "I decided to give it a really creative name.",
        behold      : "Behold the icons that visualize what you’re all about. or just take up space. your call bro.",
        find        : "Find out more",
        ready       : "Ready to do something??",
        lets        : "Lets do this",
    },
    {
        name        : "Norwegian",
        credit      : "av HTML5 UP",
        welcome     : "Velkommen",
        descL1      : "Dette er en gratis",
        descL2      : "responsive mal",
        more        : "Fortell meg mer",
        twentiethL1 : "Siden dette er min tjuende freebie for HTML5 UP",
        twentiethL2 : "Jeg bestemte meg for å gi den en virkelig kreativ navn.",
        behold      : "Se ikonene som visualiserer hva du alt om. eller bare tar opp plass. samtalen bro.",
        find        : "Finn ut mer",
        ready       : "Klar til å gjøre noe??",
        lets        : "La oss gjøre dette",
    }
];
ko.applyBindings(new ViewModel(languages));


