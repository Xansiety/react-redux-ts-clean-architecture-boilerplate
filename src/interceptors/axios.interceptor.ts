import axios from "axios";
import { getValidationError } from "@/utilities";

export const AxiosInterceptor = () => {
  const updateHeader = (request: any) => {
    const token = "123456789";
    const newHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    //  if request don't need a header auth, return request without update
    if (request.url?.includes("assets")) return request;
    // if request need a header auth, update header and return request
    return updateHeader(request);
  });

  // Return and manage the response with or without error
  axios.interceptors.response.use(
    // If response is ok, return response
    (response) => {
      console.log("Response:", response);
      return response;
    },
    // if response has error, return error and can manage it, for example, show a snackbar with error message
    (error) => {
      console.log("Error:", getValidationError(error.code));
      alert(getValidationError(error.code));
      //SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error); // elimina la response y retorna el error
    }
  );
};
