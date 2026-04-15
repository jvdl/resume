import "./Icon.styles.css"

type IconProps = React.SVGProps<SVGSVGElement> & {
  /**
   * Will be used to generate a class name for the icon, which can be used to apply specific styles to it.
   */
  name: string;

}

export const Icon = (props: IconProps) => {
  const { className, name, children, ...rest } = props;
  // add some default CSS classes to allow us to specify default styles
  const defaultClassName = `icon icon-${name}`;
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;
  return (
    <svg className={combinedClassName} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {children}
    </svg>
  );
}
