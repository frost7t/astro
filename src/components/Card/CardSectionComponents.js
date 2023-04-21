export default function CardSectionComponents({title,description,url_img}) {
  return (
    <div className="bg-white max-w-sm p-4 shadow-2xl mx-auto px-5">
      <div className='flex space-x-3 py-3'>
        <div className="w-6">
          <img src={url_img} alt="" />
        </div>
        <div className="">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="">
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}
