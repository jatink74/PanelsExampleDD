define(['knockout-3.2.0', 'jquery', 'jquery-ui'], function (ko, $) {
    //View Model
    return function Game(data) {
        this.id = ko.observable(data.id);
        this.name = ko.observable(data.name);
    }
});
