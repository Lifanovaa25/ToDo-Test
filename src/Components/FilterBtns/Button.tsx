import s from './style.module.scss';

interface ButtonProps {
  text: string;
  handler: () => void;
  isActive?: boolean;
}

export const Button = ({ text, handler, isActive }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${s.button} ${isActive ? s.active : ''}`}
      onClick={handler}
    >
      {text}
    </button>
  )
}
