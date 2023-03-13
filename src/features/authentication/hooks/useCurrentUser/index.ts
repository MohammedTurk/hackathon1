import { useState, useEffect } from "react";
import { getCookie, setCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import type { UserType, CurrentUserType } from "types";

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserType | null>(
    getCookie(COOKIES_KEYS.currentUser).user
  );

  const updateUser = (newUser: UserType, refetch: boolean = false) => {
    const currentUser: CurrentUserType | null = getCookie(
      COOKIES_KEYS.currentUser
    );
    if (currentUser) {
      // if refetch is true then call the API and update the user
      const updatedUser = {
        ...currentUser,
        user: {
          ...currentUser.user,
          ...newUser,
        },
      };

      setCookie(COOKIES_KEYS.currentUser, updatedUser);
      setUser(updatedUser.user);
    }
  };

  return { user, updateUser };
};

export default useCurrentUser;
