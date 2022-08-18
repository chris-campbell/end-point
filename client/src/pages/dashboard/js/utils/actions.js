export const recievedAlert = (enqueue, firstname, lastname) => {
  enqueue(`Alert from ${firstname} ${lastname}`, {
    variant: "success",
  });
};

export const addContactToList = (setSendList, contact) => {
  setSendList((list) => [...list, contact]);
};
