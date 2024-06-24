import Image from "next/image";

const ContactCard = ({ icon, title, description, contactInfo }) => {
  const renderContactInfo = () => {
    if (contactInfo.type === "email") {
      return (
        <a
				className="text-black hover:text-blue underline transition-colors mt-6 block"
				href={`mailto:${contactInfo.value}`}
        >
          {contactInfo.value}
        </a>
      );
    } else if (contactInfo.type === "phone") {
      const cleanedPhone = contactInfo.value.replace(/\s+/g, "");
      return (
        <a
				className="text-black hover:text-blue underline transition-colors mt-6 block"
				href={`tel:${cleanedPhone}`}
        >
          {contactInfo.value}
        </a>
      );
    } else if (contactInfo.type === "address") {
      return (
        <a
          className="text-black hover:text-blue underline transition-colors mt-6 block"
          href={`http://maps.google.com/?q=${contactInfo.value}`}
          target="_blank"
					rel="noopener noreferrer"
        >
          {contactInfo.value}
        </a>
      );
    }
    return null;
  };

  return (
    <div className="mx-auto bg-white rounded-xl overflow-hidden border-2 border-customGray flex-1">
      <div className="p-6 flex flex-col items-center">
        <figure className="w-12 h-12 flex justify-center items-center">
          <Image
            className="w-12 h-auto"
            src={icon}
            alt={title}
            width={40}
            height={48}
          />
        </figure>
        <h2 className="mt-6 text-[32px] font-bold leading-tight">{title}</h2>
        <p className="mt-4 text-gray-500 text-base text-center">
          {description}
        </p>
        {renderContactInfo()}
      </div>
    </div>
  );
};

export default ContactCard;
