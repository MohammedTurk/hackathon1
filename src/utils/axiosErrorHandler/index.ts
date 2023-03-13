import type { AxiosError } from "lib/axios";
import type { ErrorType } from "types";

export const axiosErrorHandler = (error: AxiosError<ErrorType>): ErrorType => {
  // Error 😨
  if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    return error.response.data;
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    return {
      statusCode: error.request.status,
      status: "failed",
      message: error.request.statusText,
      data: null,
    };
  } else {
    // Something happened in setting up the request and triggered an Error
    console.log("Error", error.message);
    return {
      statusCode: error.request.status,
      status: "failed",
      message: error.message,
      data: null,
    };
  }
};
export default axiosErrorHandler;
