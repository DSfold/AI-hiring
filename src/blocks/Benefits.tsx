import { BenefitsCard } from "@src/assets/data/benefits";
import { CardBenefits } from "@src/components/CardBenefits";
import { Title } from "@src/components/Title";

export interface BenefitsProps {
  data: BenefitsCard[];
}

export const Benefits = (props: BenefitsProps) => {
  return (
    <div id="benefits" className="block-outline">
      <div>
        <Title title="Benefits of artificial intelligence" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {props.data.map((el) => (
          <CardBenefits
            text={el.text}
            title={el.title}
            image={el.image}
            color={el.color}
            key={el.id}
            id={el.id}
          />
        ))}
      </div>
    </div>
  );
};
