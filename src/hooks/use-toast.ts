import { toast } from "sonner";

const useToast = () => {
  return {
    toast,
    success: (message: string, options?: object) =>
      toast.success(message, options),
    error: (message: string, options?: object) =>
      toast.error(message, options),
    info: (message: string, options?: object) =>
      toast(message, options),
    warning: (message: string, options?: object) =>
      toast.warning(message, options),
    dismiss: toast.dismiss,
  };
};

export default useToast;
