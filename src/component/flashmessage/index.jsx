import { toast } from "react-toastify";

const flashMessage = ({ message = "", status = false }) => {
  const messageStyle = {
    position: "bottom-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  if (message) {
    if (status) {
      toast.success(message, messageStyle);
    } else {
      toast.error(message, messageStyle);
    }
  }
};
export default flashMessage;
