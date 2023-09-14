import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  DescriptionExperience,
} from "@/app/components";
import { HeadingExperienceProps } from "@/app/types";

export const HeadingExperience: React.FC<HeadingExperienceProps> = ({
  name,
  place,
  fromDate,
  toDate,
  role,
  description,
}) => {
  return (
    <FlexBoxContainer className="flex-col lg:gap-y-2 lg:w-6/12">
      <FlexBoxContainer className=" flex-col lg:gap-x-2  ">
        <Heading
          text={`${name},${place}`}
          className="font-bold lg:text-sm text-xs"
        />
        <Paragraph
          text={`[${fromDate} - ${toDate}]`}
          className="text-xs lg:italic"
        />
      </FlexBoxContainer>
      <FlexBoxContainer className="text-xs lg:italic pb-2">
        <Paragraph text={role} />
      </FlexBoxContainer>
      <DescriptionExperience description={description} />
    </FlexBoxContainer>
  );
};
