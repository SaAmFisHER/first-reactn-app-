var Message = (function () {
    function Message(text) {
        this.messageText = text;
    }
    Message.prototype.showAlert = function () {
        alert(this.messageText);
    };
    return Message;
}());
var test = new Message('Hello world');
test.showAlert();
//# sourceMappingURL=we-app.js.map