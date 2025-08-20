
interface IconRenderProps {
  name?: string; 
  children?: React.ReactNode;
  className?: string;
  size?: number,
};

function IconRender({
  name, 
  children, 
  className,
  size = 25,
}: IconRenderProps){
  if (children) {
    return <span className={className}>{children}</span>;
  }

  if (name) {
    return (
      <svg className={className} width={size} height={size}
        style={{
          fill: 'currentcolor',
          transition: 'fill 0.3s ease'
        }}
      >
        <use href={`/symbol-defs.svg#icon-${name}`} />
      </svg>
    );
  }

  return null;
}

export default IconRender;