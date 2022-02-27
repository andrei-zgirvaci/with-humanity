import BreakLine from 'components/BreakLine';

interface Props {
  description: string;
}

export default function ShelterPopover({ description }: Props) {
  return (
    <>
      <p className="mb-2 text-lg font-bold">Shelter</p>

      <hr className="mb-4" />

      <div className="text-sm text-slate-900">
        <BreakLine text={description} />
      </div>
    </>
  );
}
