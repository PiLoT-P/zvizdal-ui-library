import { useRef, type ButtonHTMLAttributes, type ChangeEvent, } from 'react';
import s from './IconButton.module.scss';
import IconRender from './icon-render/IconRender';

type IconProps = {
  name?: string; 
  children?: React.ReactNode; 
  className?: string;
  size?: number,
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'transparent',

  icon: IconProps

  onFileSelect?: (files: FileList) => void;
  multipleFile?: boolean;
}

function IconButton({
  variant = 'primary',
  icon,
  onFileSelect,
  multipleFile,
  onClick,
  disabled,
  children,
  className,
  ...btnProps
}: IconButtonProps){
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

  return (
    <button 
      {...btnProps}
      className={`
        ${s.btn}
        ${s[variant]}
        ${disabled ? s.disabled : ''}
        ${className}
      `}
      onClick={onFileSelect ? triggerFileInput : onClick}
      disabled={disabled}
    > 
      <div className={s.circle}>
        <IconRender
          {...icon}
        />
      </div>
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

export default IconButton;