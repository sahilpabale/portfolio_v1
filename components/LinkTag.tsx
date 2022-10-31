// Next.js
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

export const LinkTag = ({ href, children, style, target, onClick }: Props) => {
  return (
    <Link href={href} onClick={onClick} rel="noreferrer">
      <a
        className="font-bold w-fit text-[#fc9d03] hover:underline"
        style={style}
        target={target}
      >
        {children}
      </a>
    </Link>
  );
};
