define(['knockout-3.2.0', 'jquery', 'models/game', 'models/player', 'jquery-ui'],
    function (ko, $, Game, Player) {
    //View Model
    return function PlayersViewModel() {
        var self = this;

        self.games = ko.observableArray([
                                        new Game({ id: 0, name: "Cricket" }),
                                        new Game({ id: 1, name: "Football" }),
                                        new Game({ id: 2, name: "Hockey" })
        ]);

        self.players = ko.observableArray([
        ]);
        self.playersDD = ko.observableArray([
        ]);

        self.addPlayer = function () {
            self.players.push(new Player({ firstName: "", lastName: "", game: self.games()[0] }));
        };

        self.addPlayerDD = function (player) {
            self.playersDD.push(player);
        };

        self.removePlayer = function (player) {
            self.players.remove(player);
        };

        self.removePlayerDD = function (player) {
            self.playersDD.remove(player);
        };

        self.combinedList = ko.computed(function () {
            return self.players().concat(self.playersDD());
        });

        self.save = function () {
            $.ajax("/api/players", {
                data: JSON.stringify(ko.toJSON(self.combinedList)),
                type: "post", contentType: "application/json",
                success: function (result) { alert("Players Saved Successfully"); },
                error: function (result) { alert("Error Saving Players"); }
            });
        };

        //Drag and Drop
        self.newPlayer = new Player({ firstName: "", lastName: "", game: self.games()[0] });

        self.setTransferProperties = function (data, event) {
            event.originalEvent.dataTransfer.setData("Text", data.id());
            return true;
        };

        self.allowDrop = function (data, event) {
            event.preventDefault();
            return false;
        };

        self.performDrop = function (data, event) {
            var gameId = event.originalEvent.dataTransfer.getData("Text");
            var droppedGame = ko.utils.arrayFirst(self.games(), function (game) {
                return game.id() == gameId;
            });
            self.newPlayer.game(droppedGame);
            $("#addPlayerDialog").dialog({
                width: 400,
                height: 225
            });
            return true;
        };

        self.savePlayerDD = function () {
            var newPlayer = new Player({
                firstName: self.newPlayer.firstName(),
                lastName: self.newPlayer.lastName(),
                game: self.newPlayer.game()
            });
            self.addPlayerDD(newPlayer);
            self.cancelDialog();
        }

        self.cancelDialog = function () {
            $("#addPlayerDialog").dialog("close");
            self.newPlayer.firstName("");
            self.newPlayer.lastName("");
            self.newPlayer.game(self.games()[0]);
        }
        //
    }
});

