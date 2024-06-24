import Card from "@/components/ContactCard/page";

const cardsData = [
  {
    icon: "/Vector.svg",
    title: "Email",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    contactInfo: {
      type: "email",
      value: "hello@gmail.com",
    },
  },
  {
    icon: "/Phone.svg",
    title: "Phone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    contactInfo: {
      type: "phone",
      value: "+1 (555) 000-0000	",
    },
  },
  {
    icon: "/Pin.svg",
    title: "Office",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
    contactInfo: {
      type: "address",
      value: "76 9th Avenue New York, NY 10011 USA",
    },
  },
];

export default function Contact() {
  return (
    <section className="contact-section pb-28 pt-[110px] px-[62px]">
      <h2 className="font-bold text-5xl leading-[58px] text-center mb-6">
        Contact me
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div className="flex justify-between gap-x-8 mt-20">
        {cardsData.map((card) => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            contactInfo={card.contactInfo}
          />
        ))}
      </div>
    </section>
  );
}
