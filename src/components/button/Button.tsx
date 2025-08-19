import { useRef, type ButtonHTMLAttributes, type ChangeEvent } from "react";
import s from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary' | 'secondary' | 'transparent',

  onFileSelect?: (files: FileList) => void;
  multipleFile?: boolean;
}

function Button({
  variant = 'primary',
  className,
  children,
  disabled,
  onClick,
  onFileSelect,
  multipleFile,
  ...btnProps
}: ButtonProps){
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && onFileSelect) {
      onFileSelect(e.target.files);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return(
    <button
      {...btnProps}
      className={`
        ${s.btn}
        ${s[variant]}
        ${className}
      `}
      onClick={onFileSelect ? triggerFileInput : onClick}
      disabled={disabled}
    >
      {children}
      {!!onFileSelect && (
        <input
          type="file"
          hidden
          multiple={multipleFile}
          ref={fileInputRef}
          onChange={handleFileChange}
          disabled={disabled}
        />
      )}
    </button>
  );
}

export default Button;