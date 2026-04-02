import type { ImgHTMLAttributes } from "react";

/** Output of `?…&as=img` from vite-imagetools */
export type ResponsiveImgMeta = {
  src: string;
  srcset?: string;
  w?: number;
  h?: number;
};

type Props = {
  meta: ResponsiveImgMeta;
  alt: string;
  sizes: string;
  className?: string;
} & Pick<ImgHTMLAttributes<HTMLImageElement>, "loading" | "fetchPriority">;

export function ResponsiveImage({
  meta,
  alt,
  sizes,
  className,
  loading,
  fetchPriority,
}: Props) {
  return (
    <img
      src={meta.src}
      srcSet={meta.srcset}
      sizes={sizes}
      width={meta.w}
      height={meta.h}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
    />
  );
}
