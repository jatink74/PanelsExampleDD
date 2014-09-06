define(['knockout-3.2.0', 'jquery', 'jquery-ui'], function (ko, $) {
    //View Model
    return function Player(data) {
            this.id = ko.observable(data.id);
            this.firstName = ko.observable(data.firstName);
            this.lastName = ko.observable(data.lastName);
            this.game = ko.observable(data.game);
    }
});

