import Link from 'next/link';

const Button = ({ href, text, styleType }) => {
  // Osnovne stilove za dugme
  const baseStyles = 'inline-block px-8 py-4 text-lg rounded-full shadow-lg transition';

  // Specifični stilovi za različite tipove dugmadi
  const styleVariants = {
    consultation: 'bg-text-primary text-white hover:bg-text-secondary',
    message: ' text-white bg-text-secondary hover:bg-background hover:text-text-primary',
  };

  return (
    <Link href={href} className={`${baseStyles} ${styleVariants[styleType]}`}>
      {text}
    </Link>
  );
};

export default Button;
