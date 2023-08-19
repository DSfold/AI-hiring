import { QuestionData } from "@src/assets/data/questions";
import { CardQuestion } from "@src/components/CardQuestion";
import { Title } from "@src/components/Title";

export interface FAQProps {
  data: QuestionData[];
}

export const FAQ = (props: FAQProps) => {
  return (
    <div id="faq" className="block-outline">
      <Title
        title="Friendly asked questions"
        subTitle="We have the most popular user queries"
      />
      <div className="flex flex-col justify-center items-center gap-y-6  max-w-[808px]">
        {props.data.map((question) => (
          <CardQuestion
            key={question.id}
            question={question.question}
            answer={question.answer}
            id={question.id}
          />
        ))}
      </div>
    </div>
  );
};
