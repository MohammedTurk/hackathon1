import { useMemo, useState, useCallback } from "react";
import { EyeIconMini, EyeSlashIconMini } from "lib/@heroicons";
import type { SizeVariantsType } from "components/types";

const usePasswordInput = (inputSize: SizeVariantsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(
    () => setShowPassword((prevShowPassword) => !prevShowPassword),
    []
  );

  const passwordIconProps = useMemo(
    () => ({
      className: `${
        inputSize === "small" ? "w-5 h-5" : "w-6 h-6"
      } cursor-pointer`,
      onClick: toggleShowPassword,
    }),
    [toggleShowPassword, inputSize]
  );

  const passwordInputIcon = showPassword ? (
    <EyeIconMini {...passwordIconProps} />
  ) : (
    <EyeSlashIconMini {...passwordIconProps} />
  );

  const passwordInputType = showPassword ? "text" : "password";

  return { passwordInputType, passwordInputIcon };
};

export default usePasswordInput;
