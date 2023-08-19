import { TestimonialData } from "@src/assets/data/testimonials";
import { CardTestimonial } from "@src/components/CardTestimonial";
import { Title } from "@src/components/Title";

export interface TestimonialsProps {
  data: TestimonialData[];
}

export const Testimonials = (props: TestimonialsProps) => {
  return (
    <div id="testimonials" className="block-outline space-y-[42px]">
      <Title
        title="What our clients say"
        subTitle="500+ organizations have found their best employees with "
        accent="Scalemate."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {props.data.map((el) => (
          <CardTestimonial
            testimonial={el.testimonial}
            position={el.position}
            name={el.name}
            image={el.image}
            id={el.id}
            color={el.color}
            key={el.id}
          />
        ))}
      </div>
    </div>
  );
};
