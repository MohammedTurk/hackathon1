export const deepEqual = (obj1: any, obj2: any) => {
  if (obj1 === obj2) return true;

  if (typeof obj1 === "object" && typeof obj2 === "object") {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        if (!deepEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

export default deepEqual;
