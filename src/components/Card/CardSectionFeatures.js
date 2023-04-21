
export default function CardSectionFeatures({
  title,
  description,
  icons
}) {
  return (
    <div className="flex space-x-4">
      {icons}
      <div>
        <p className="font-black pl-3 ">{title}</p>
        <p className="max-w-sm pl-3 font-light">{description}</p>
      </div>
    </div>
  );
}
