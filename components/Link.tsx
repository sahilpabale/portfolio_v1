interface Props {
  href?: string | undefined;
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  onClick?: ((e: any) => void) | undefined;
}

export const Link = ({ href, style, target, children, onClick }: Props) => {
  return (
    <a
      href={href}
      className="font-bold w-fit cursor-pointer text-[#fc9d03] hover:underline"
      onClick={onClick}
      style={style}
      target={target}
    >
      {children}
    </a>
  );
};
