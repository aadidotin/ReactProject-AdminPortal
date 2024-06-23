import { useRef } from 'react';

const useAlert = () => {
    const timeoutRef = useRef(null);

    const alertPlaceholder = document.getElementById('notify')
    const appendAlert = (message, type, uniqueID) => {
        const wrapper = document.createElement('div');
        wrapper.className = `alert bottom-right alert-${type} alert-dismissible`;
        wrapper.id = uniqueID;
        wrapper.setAttribute("role", "alert");
        wrapper.innerHTML = `
        <div class="row">
            <div class="col-10 p-0">
                <b>${message}</b>
            </div>
            <div class="position-relative col-2 p-0">
                <button type="button" class="btn-close py-1 px-1" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
        `
        alertPlaceholder.append(wrapper)
    }

    const showAlert = (message, type = 'info', duration = 7000) => {
        let uniqueID = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        appendAlert(message, type, uniqueID);

        // Set a timeout to hide the alert automatically
        timeoutRef.current = setTimeout(() => {
            if (uniqueID !== '' && document.getElementById(uniqueID)) {
                document.getElementById(uniqueID).remove();
            }
        }, duration);
    };

    return { showAlert };
};

export default useAlert;
