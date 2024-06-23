import { useState } from "react"
import notify from "../Alert/notify";
import useAlert from "../Alert/alert";
import axios from "axios";
import { useSelector } from "react-redux";

function useAuthPost() {
    const [isLoading, setIsLoading] = useState(false);

    const { showNotify } = notify();
    const { showAlert } = useAlert();

    const userAuth = useSelector(state => state.auth.data);

    const authApiCall = async (endpoint, formdata) => {
        setIsLoading(true);

        try {
            if (!endpoint) {
                showNotify("Endpoint Is required", "danger");
                return;
            }
            if (!formdata) {
                showNotify("Formdata Is required", "danger");
                return;
            }

            return await axios.post(endpoint, formdata, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: userAuth.authtoken,
                }
            })
                .then(({ data }) => {
                    if (!data.success) {
                        showAlert(data?.errors?.error, "warning");
                    }
                    else {
                        return data;
                    }
                })
                .catch(error => {
                    // console.log(error);
                    showNotify(error?.response?.data, "danger");
                }).finally(() => {
                    setIsLoading(false);
                });
        } catch (error) {
            // console.log(error);
            showNotify(error?.response?.data, "danger");
        }
        finally {
            setIsLoading(false);
        }
    }

    return { isLoading, authApiCall }
}

export default useAuthPost