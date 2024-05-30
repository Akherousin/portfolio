import Link, { LinkProps } from 'next/link';
import styles from './Button.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
} & (
  | ({
      as?: 'button';
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'link' } & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

function Button({
  variant = 'primary',
  className,
  children,
  as = 'button',
  ...delegated
}: ButtonProps) {
  const classes = `${className ? className : ''} ${styles.button}
  `.trim();

  if (as === 'link') {
    return (
      <Link
        className={classes}
        data-variant={variant}
        {...(delegated as LinkProps)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={classes}
        data-variant={variant}
        {...(delegated as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
}

export default Button;
