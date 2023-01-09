const Toast = ({closeCb}) => {
    return (
        <div class="toast-container position-absolute p-3 top-0 end-0" id="toastPlacement" data-original-class="toast-container position-absolute p-3">
            <div class="toast fade show">
                <div class="toast-header">
                    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>

                    <strong class="me-auto">Успешно!</strong>
                    <button onClick={closeCb} type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
};

export default Toast;


