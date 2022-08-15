// Handles sending alert to specified socket ID
const send = (socket, currentUser) => {
  socket.on("send", (list) => {
    const {
      _id,
      firstName,
      lastName,
      emailAddress,
      address,
      image,
    } = currentUser;

    const alert = { _id, firstName, lastName, emailAddress, address, image };

    // If no users in the send list
    if (!list.length > 0) return console.log("Send list empty");

    // // Emit alert to each user in send list
    list.forEach((user) => {
      try {
        console.log({ user });
        // console.log({user.socket.socketId})
        socket.to(user.socket.socketId).emit("send_alert", alert);
      } catch (error) {
        console.log(error);
      }
    });
  });
};

module.exports = send;
