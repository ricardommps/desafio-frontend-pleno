const removeProps = (props, listRemove) => {
  const newProps = { ...props };

  Object.keys(newProps).map(prop => {
    if (listRemove.includes(prop)) {
      delete newProps[prop];
    }

    return prop;
  });

  return newProps;
};

export default removeProps;
