import useReveal from '../hooks/useReveal.js';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`rv ${className}`.trim()} {...rest}>{children}</Tag>;
}
