import TestimonialCardProps from "@/@types/types";
import { TestimonialCard } from "@/components/TestimonialCard";
import avatar1 from "../../../public/avatar-1.svg";
import avatar2 from "../../../public/avatar-2.svg";
import avatar3 from "../../../public/avatar-3.svg";

const people: TestimonialCardProps[] = [
  {
    id: 1,
    title: "Jessica Watson",
    image: avatar1,
    description:
      "“Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.”",
  },
  {
    id: 2,
    title: "Kate Szu",
    image: avatar2,
    description:
      "“Great service, beautiful flowers, timely delivery. Highly recommend.”",
  },
  {
    id: 3,
    title: "Grace",
    image: avatar3,
    description:
      "“I am very happy with my purchase from this website, the plants were healthy and arrived on time.”",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pb-[60px] lg:pb-[120px]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-2xl text-center text-green-900 lg:mb-8 md:text-4xl font-latoRegular lg:text-4xl">
          What do they say about us
        </h2>

        <div className="grid gap-4 lg:gap-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {people.map((person) => (
            <TestimonialCard key={person.id} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
