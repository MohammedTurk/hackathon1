import { useRef } from "react";
import { deepEqual } from "utils";

export const useDeepCompareMemoize = <ValueType = any>(value: ValueType) => {
  const ref = useRef<ValueType>(value);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
};

export default useDeepCompareMemoize;
