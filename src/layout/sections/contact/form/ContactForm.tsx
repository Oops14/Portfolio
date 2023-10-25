import { Button } from "../../../../components/Button";
import { S } from "./ContactForm_Styles";

export const ContactForm = () => {
    return (
        <S.FormWrapper>
            <S.Form>
                <S.Label>Name</S.Label>
                <S.FromInput type="text" />
                <S.Label>Email</S.Label>
                <S.FromInput type="email" />
                <S.Label>Message</S.Label>
                <S.FromTextArea />
                <Button href="#" primary>
                    Submit
                </Button>
            </S.Form>
        </S.FormWrapper>
    );
};