export type States = "default" | "hover" | "active" | "focus";
export type Style<TVariant extends string, TSize extends string> = {
  variants: { [key in TVariant]: { [key in States]?: string } };
  sizes: { [key in TSize]: string };
  default: string;
};

export const convertStyleToString = <
  TVariant extends string,
  TSize extends string,
>(
  style: Style<TVariant, TSize>,
  variant: TVariant,
  size: TSize,
): string => {
  const variantAsString = Object.values(style.variants[variant]).join(" ");
  return `${style.default} ${variantAsString} ${style.sizes[size]}`;
};
