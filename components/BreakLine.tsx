interface Props {
  text: string;
}

export default function BreakLine({ text }: Props) {
  return (
    <>
      {text.split('\\n').map((c, index) => (
        <p key={`p-${index}`}>
          {c}
          <br />
        </p>
      ))}
    </>
  );
}
