
import $ from "jquery"
import "@script/bootstrap-notify.min.js"

function notify() {
    const showNotify = (message, type, title = false) => {
        $.notify({
            // options
            icon: false,
            title: title,
            message: `<b>${message}</b>`,
            // url: 'https://github.com/mouse0270/bootstrap-notify',
            // target: '_blank'
        }, {
            // settings
            element: 'body',
            position: null,
            type: type,
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: true,
            placement: {
                from: "bottom",
                align: "left"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 8000,
            timer: 500,
            url_target: '_blank',
            mouse_over: 'pause',
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        });
    }

    return { showNotify }
}

export default notify