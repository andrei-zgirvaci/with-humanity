interface Props {
  description: string;
}

export default function IsMissingPopover({ description }: Props) {
  return (
    <>
      <p className="mb-2 text-lg font-bold">Is Missing</p>

      <hr className="mb-4" />

      <pre className="text-xs text-slate-900">{description}</pre>
    </>
  );
}
