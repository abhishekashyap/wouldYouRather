const logger = (store) => (next) => (action) => {
  console.group(action.type);
    console.log("Action is", action);
    const returnValue = next(action);
    console.log("Updated state", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
