import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  DescriptionExperience,
} from "@/components";
import { HeadingExperienceProps } from "@/types";

export const HeadingExperience: React.FC<HeadingExperienceProps> = ({
  name,
  place,
  fromDate,
  toDate,
  role,
  description,
}) => {
  return (
    <FlexBoxContainer className="flex-col gap-y-2 w-6/12">
      <FlexBoxContainer className="items-center gap-x-2">
        <Heading text={`${name},${place}`} className="font-bold text-sm" />
        <Paragraph
          text={`[${fromDate} - ${toDate}]`}
          className="text-xs italic"
        />
      </FlexBoxContainer>
      <FlexBoxContainer className="text-xs italic">
        <Paragraph text={role} />
      </FlexBoxContainer>
      <DescriptionExperience description={description} />
    </FlexBoxContainer>
  );
};
