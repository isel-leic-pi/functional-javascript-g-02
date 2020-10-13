function getShortMessages(messages) {
    const result = messages.map((msg) => msg.message).filter(x => x.length <50);
    return result;
}

  module.exports = getShortMessages

  /*
   module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
  */